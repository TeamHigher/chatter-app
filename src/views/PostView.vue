<template>
  <div class="wrapper">
    <div class="side-nav">
      <h1>CHATTER</h1>
      <div class="overview">
        <figure>
          <figcaption>Overview</figcaption>
          <ul class="list">
            <li class="item-1">
              <div class="icon-container">
                <img src="../assets/item-1-icon.png" alt="icon-1" />
              </div>
              <router-link to="/feed">Feeds</router-link>
            </li>
            <li class="item-2">
              <div class="icon-container">
                <img src="../assets/item-2-icon.png" alt="icon-2" />
              </div>
              <router-link to="/bookmarks">Bookmarks</router-link>
            </li>
            <li class="item-3">
              <div class="icon-container">
                <img src="../assets/item-3-icon.png" alt="icon-3" />
              </div>
              <router-link to="/teamblogs">Team blogs</router-link>
            </li>
            <li class="item-4">
              <div class="icon-container">
                <img src="../assets/item-4-icon.png" alt="icon-4" />
              </div>
              <router-link to="/drafts">Drafts</router-link>
            </li>
            <li class="item-5">
              <div class="icon-container">
                <img src="../assets/item-5-icon.png" alt="icon-5" />
              </div>
              <router-link to="/analytics">Analytics</router-link>
            </li>
          </ul>
        </figure>
      </div>
      <div class="trending">
        <figure>
          <figcaption class="trending-tags">Trending tags</figcaption>
          <ul class="list">
            <li>Programming</li>
            <li>Data science</li>
            <li>Technology</li>
            <li>Machine learning</li>
            <li>Politics</li>
          </ul>
        </figure>
      </div>
      <div class="personal">
        <figure>
          <figcaption>Personal</figcaption>
          <ul class="list">
            <li class="item-1">
              <div class="icon-container">
                <img src="../assets/item-1-icon--1.png" alt="icon-1" />
              </div>
              <router-link to="/account">Account</router-link>
            </li>
            <li class="item-2">
              <div class="icon-container">
                <img src="../assets/item-1-icon-2.png" alt="icon-2" />
              </div>
              <router-link to="/notification">Notification</router-link>
            </li>
            <li class="item-6">
              <router-link to="/"> Log out</router-link>
            </li>
          </ul>
        </figure>
      </div>
    </div>
    <div class="sub-wrap">
      <div class="top-bar">
        <div class="search">
          <img src="../assets/search-icon.png" alt="icon-5" />
          <input type="text" placeholder="search chatter" />
        </div>
      </div>
      <div class="content">
        <!-- Profile picture upload -->
        <input
          type="file"
          @change="handleProfilePicUpload"
          class="profile-pic"
        />

        <input
          type="text"
          v-model="authorName"
          placeholder="Author Name"
          class="name"
        />
        <input
          type="text"
          v-model="postTitle"
          placeholder="Title"
          class="title"
        />
        <textarea
          v-model="postContent"
          placeholder="Write your post here"
          :options="editorOptions"
        >
        </textarea>
        <input
          type="file"
          accept="image/*"
          @change="handleBlogImageUpload"
          class="blog-image"
        />

        <button @click="publishPost">Publish Post</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { storage, db } from "../firebase";
import { useRouter } from "vue-router";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const postContent = ref("");
    const profilePicture = ref<File | null>(null);
    const blogImage = ref<File | null>(null); // Added for blog image
    const postTitle = ref("");
    const authorName = ref("");
    const editorOptions = {
      spellChecker: true,
    };

    const router = useRouter();
    const store = useStore();

    const handleProfilePicUpload = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        profilePicture.value = file;
      }
    };

    const handleBlogImageUpload = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        blogImage.value = file;
      }
    };

    const publishPost = async () => {
      try {
        if (!postContent.value || !postTitle.value) {
          throw new Error("Please provide a title and content for your post.");
        }

        let profilePicURL = "";
        if (profilePicture.value) {
          const profilePicRef = storageRef(
            storage,
            `profilePictures/${store.state.user.uid}`
          );
          await uploadBytes(profilePicRef, profilePicture.value);
          profilePicURL = await getDownloadURL(profilePicRef);
        }

        let blogImageURL = "";
        if (blogImage.value) {
          const blogImageRef = storageRef(
            storage,
            `blogImages/${store.state.user.uid}/${Date.now()}_${
              blogImage.value.name
            }`
          );
          await uploadBytes(blogImageRef, blogImage.value);
          blogImageURL = await getDownloadURL(blogImageRef);
        }

        const timestamp = new Date().toISOString();

        const docRef = await addDoc(collection(db, "posts"), {
          title: postTitle.value,
          content: postContent.value,
          authorId: store.state.user.uid,
          authorProfilePic: profilePicURL,
          authorName: authorName.value,
          blogImage: blogImageURL,
          timestamp,
        });
        console.log("Document written with ID: ", docRef.id);

        // Reset form fields after successful post
        postTitle.value = "";
        postContent.value = "";
        profilePicture.value = null;
        blogImage.value = null;
        authorName.value = "";

        router.push("/SignedIn");
      } catch (error: any) {
        console.error("Error publishing post: ", error.message);
        // You can display an error message to the user here
      }
    };

    return {
      postContent,
      profilePicture,
      blogImage, // Added for blog image
      postTitle,
      authorName,
      editorOptions,
      handleProfilePicUpload,
      handleBlogImageUpload, // Added for blog image
      publishPost,
    };
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  font-family: "DM Sans variable", sans-serif;
}

.side-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 268px;
  background-color: white;
  border: solid 1px #d0d0d0;
  margin-left: 0px;
  margin-top: 0px;
}
.side-nav h1 {
  font-size: 32px;
  font-weight: 500;
  color: #543ee0;
  margin-top: 10px;
}
.overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: "DM Sans variable", sans-serif;
  color: #111111;
}
.overview figcaption {
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
}
.overview ul {
  list-style-type: none;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 50px;
}
.overview li {
  margin-bottom: 30px;
  font-size: 16px;
  display: flex;
  justify-content: left;
  color: #111111;
}
.overview li a {
  color: #111111;
}
.list .icon-container {
  width: 30px; /* Fixed width for the icon container */
  display: inline-block; /* Make the container inline */
  text-align: left; /* Center align the icon */
}
a {
  text-decoration: none;
}

.trending {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: "DM Sans variable", sans-serif;
}
.trending figcaption {
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
}
.trending ul {
  list-style-type: none;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 50px;
}
.trending li {
  margin-bottom: 30px;
  font-size: 16px;
}
.trending-tags::after {
  content: url(../assets/trending-tags.png);
  margin-left: 10px;
}
.personal {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: "DM Sans variable", sans-serif;
}
.personal figcaption {
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
}
.personal ul {
  list-style-type: none;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 50px;
}
.personal li {
  margin-bottom: 30px;
  font-size: 16px;
  display: flex;
  justify-content: left;
}
.personal li a {
  color: #111111;
}
.item-6 {
  color: red;
}
.top-bar {
  width: 100%;
  height: 66px;
  background-color: white;
  border: solid 1px #d0d0d0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  position: relative;
}

.search input[type="text"] {
  width: 700px;
  height: 48px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #111111;
}
.search img {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.sub-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-top: 0px;
  justify-content: center;
  align-items: center;
}
.content {
  width: 1500px;
  height: 100%;
  background-color: white;
  border: solid 1px #d0d0d0;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  width: 177px;
  height: 56px;
  background-color: #543ee0;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
a {
  text-decoration: none;
  color: white;
}

.button-bg {
  width: 1076px;
  height: 87px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 30px;
  margin-right: 100px;
}

textarea {
  width: 1076px;
  height: 803px;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 18px;
  margin-top: 30px;
  font-weight: 500;
}
</style>
