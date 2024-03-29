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
    <div class="sub-wrapper">
      <div class="top-bar">
        <div class="search">
          <img src="../assets/search-icon.png" alt="icon-5" />
          <input type="text" placeholder="search chatter" />
        </div>
      </div>
      <div class="container">
        <div class="cats">
          <div class="cats-text">
            <h1>FEEDS</h1>
            <p>Explore different content you’d love</p>
          </div>
          <router-link to="/post">
            <button>
              <img src="../assets/pen.png" alt="" />
              Post a content
            </button>
          </router-link>
        </div>
        <div class="main-content">
          <div class="card1">
            <h1>For you</h1>
            <h1>Featured</h1>
            <h1>Recent</h1>
          </div>

          <div
            v-for="(post, index) in blogPosts"
            :key="index"
            class="blog-text"
          >
            <div class="blog-text-header">
              <div class="prof-name-time">
                <div class="profile-pic">
                  <img
                    :src="post.profilePictureURL"
                    alt="Profile Picture"
                    v-if="post.profilePictureURL"
                    class="profile-pic"
                  />
                </div>
                <div class="name-timestamp">
                  <h3>{{ post.authorName }}</h3>
                  <h5>{{ post.timestamp }}</h5>
                </div>
              </div>
              <div class="title">
                <h1>{{ post.title }}</h1>
              </div>
            </div>
            <p>{{ post.content }}</p>
            <div class="blog-img">
              <img
                :src="post.blogImageURL"
                alt="Blog Image"
                v-if="post.blogImageURL"
                class="blog-img"
              />
            </div>
            <div class="blog-actions">
              <div class="likes">
                <img
                  src="../assets/like-icon.png"
                  alt="like-icon"
                  @click="incrementLikes(post)"
                />{{ post.likes }}
              </div>
              <div class="comments">
                <img
                  src="../assets/comment-icon.png"
                  alt="comment-icon"
                  @click="addComment(post)"
                />{{ post.comments ? post.comments.length : 0 }}
              </div>
              <div class="views">
                <img
                  src="../assets/views-icon.png"
                  alt="share-icon"
                  @click="incrementViews(post)"
                />{{ post.views }}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { storage, db } from "../firebase";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import {
  collection,
  getDocs,
  DocumentData,
  doc,
  updateDoc,
} from "firebase/firestore";

interface BlogPost {
  title: string;
  content: string;
  authorName: string;
  authorId: string;
  timestamp: number;
  profilePictureURL: string;
  blogImageURL: string; // Add this property for the blog image URL
  likes: number;
  comments: comment[];
  views: number;
  id: string;
  // Add any other properties you expect in a blog post
}

interface comment {
  authorId: string;
  content: string;
  timestamp: number;
}

export default defineComponent({
  setup() {
    const profilePictureURL = ref("");
    const blogPosts = ref<BlogPost[]>([]);

    const incrementLikes = async (post: BlogPost) => {
      if (post && typeof post.likes === "number") {
        // If the post and likes property are defined
        post.likes += 1;
        await updateLikesInFirestore(post);
      } else {
        // If either post or likes property is undefined
        console.error("Invalid post object or likes property undefined");
      }
    };

    const addComment = async (post: BlogPost) => {
      if (post && Array.isArray(post.comments)) {
        const newComment: comment = {
          authorId: "user123",
          content: "New comment",
          timestamp: Date.now(),
        };
        post.comments.push(newComment);
        await updateCommentsInFirestore(post);
      } else {
        console.error("Invalid post object or comments array undefined");
      }
    };

    const incrementViews = async (post: BlogPost) => {
      post.views += 1;
      await updateViewsInFirestore(post);
    };

    const updateLikesInFirestore = async (post: BlogPost) => {
      const postRef = doc(db, "posts", post.id); // Assuming you have an 'id' field in BlogPost
      await updateDoc(postRef, { likes: post.likes });
    };

    const updateCommentsInFirestore = async (post: BlogPost) => {
      const postRef = doc(db, "posts", post.id);
      await updateDoc(postRef, { comments: post.comments });
    };

    const updateViewsInFirestore = async (post: BlogPost) => {
      const postRef = doc(db, "posts", post.id);
      await updateDoc(postRef, { views: post.views });
    };

    const getProfilePictureURL = async () => {
      // Your implementation to fetch profile picture URL
      // For example:
      const profilePicRef = storageRef(
        storage,
        "profilePictures/Y14zIEpPsQVs1FatwqSLf0dLEFY2/"
      );
      const url = await getDownloadURL(profilePicRef);
      profilePictureURL.value = url;
    };

    const getBlogPosts = async () => {
      const postsCollection = collection(db, "posts");
      const querySnapshot = await getDocs(postsCollection);
      querySnapshot.forEach((doc) => {
        const postData = doc.data() as BlogPost; // Cast to the BlogPost type
        const likes = postData.likes || 0;
        const comments = postData.comments || [];
        const views = postData.views || 0;

        const blogImagePath = postData.blogImageURL;

        if (blogImagePath) {
          const blogImageRef = storageRef(storage, blogImagePath);
          getDownloadURL(blogImageRef)
            .then((url) => {
              postData.blogImageURL = url;
              blogPosts.value.push(postData);
            })
            .catch((error) => {
              console.error("Error getting blog image URL: ", error);
            });
        } else {
          blogPosts.value.push(postData);
        }
      });
    };

    onMounted(async () => {
      await getProfilePictureURL();
      await getBlogPosts();
    });

    return {
      profilePictureURL,
      blogPosts,
      incrementLikes,
      addComment,
      incrementViews,
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

.sub-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-top: 0px;
  border: solid 1px green;
  justify-content: center;
  align-items: center;
}
.container {
  width: 1200px;
  height: 100%;
  border: solid 1px #d0d0d0;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cats {
  width: 853px;
  height: 87px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-left: 30px;
}
.cats-text {
  width: 400px;
  height: 87px;
  font-size: 18px;
  font-weight: 400;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-family: "DM Sans variable", sans-serif;
}
.cats-text h1 {
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cats-text p {
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
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

.button-wrap {
  width: 400px;
  height: 87px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px red;
  background-color: blue;
}

.card1 {
  width: 853px;
  height: 80px;
  background-color: white;
  margin-top: 49px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.card1 h1 {
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "DM Sans variable", sans-serif;
  border-radius: 8px;
}

.blog-text {
  width: 700px;
  height: 100%;
  background-color: white;
  margin-top: 0px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  border-radius: 8px;
}
.blog-text-header {
  width: 526px;
  height: 188px;
  gap: 12px;
  margin-top: 0px;
  margin-left: 0px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  border-radius: 8px;
}
.prof-name-time {
  width: 500px;
  height: 120px;
  gap: 12px;
  background-color: white;
  margin-top: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  border-radius: 8px;
}

.profile-pic {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-top: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px red;
}

.name-timestamp {
  width: 300px;
  height: 71px;
  gap: 12px;
  background-color: white;
  margin-top: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}
.name-timestamp h3 {
  width: 300px;
  height: 35px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 24px;
  font-weight: 500;
}
.name-timestamp h5 {
  width: 300px;
  height: 24px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #111111;
}
.title {
  width: 500px;
  height: 48px;
  padding: 10px 16px;
  margin-top: 20px;
  margin-left: 0px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.title h1 {
  font-size: 32px;
  font-weight: 500;
  line-height: 36px;
  color: #111111;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: "DM Sans variable", sans-serif;
  text-align: left;
  margin-left: 0px;
}

.main-content {
  width: 1200px;
  height: 100%;
  border: solid 1px #d0d0d0;
  margin-top: 0px;
  margin-left: 0px;
  display: flex;
  flex: 1;
  overflow-y: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "DM sans Variable", Sans-serif;
}
.main-content p {
  width: 700px;
  height: auto;
  background-color: white;
  margin-top: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  font-family: "DM sans Variable", Sans-serif;
}
.blog-img {
  width: 700px;
  height: 242px;
  background-color: white;
  margin-top: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  border-radius: 8px;
}
.blog-actions {
  width: 700px;
  height: 48px;
  background-color: white;
  margin-top: 0px;
  margin-bottom: 50px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
}
hr {
  width: 700px;
  height: 1px;
  color: #d0d0d0;
  margin-top: 0px;
  margin-left: 0px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
