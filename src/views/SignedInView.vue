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
      <div class="content">
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
        <div class="card1">
          <h1>For you</h1>
          <h1>Featured</h1>
          <h1>Recent</h1>
        </div>
        <div class="blog-wrapper">
          <div v-for="(post, index) in blogPosts" :key="index" class="blog1">
            <div class="blog1-text">
              <h1>{{ post.title }}</h1>
              <p>{{ post.content }}</p>
              <img
                :src="post.authorProfilePictureURL"
                alt="Profile Picture"
                v-if="post.authorProfilePictureURL"
              />
            </div>
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
import { collection, getDocs, DocumentData } from "firebase/firestore";

interface BlogPost {
  title: string;
  content: string;
  authorName: string;
  authorId: string;
  timestamp: number;
  authorProfilePictureURL: string;
  // Add any other properties you expect in a blog post
}

export default defineComponent({
  setup() {
    const profilePictureURL = ref("");
    const blogPosts = ref<BlogPost[]>([]);

    const getProfilePictureURL = async () => {
      // Your implementation to fetch profile picture URL
      // For example:
      const profilePicRef = storageRef(storage, "profilePictures/userId");
      const url = await getDownloadURL(profilePicRef);
      profilePictureURL.value = url;
    };

    const getBlogPosts = async () => {
      const postsCollection = collection(db, "posts");
      const querySnapshot = await getDocs(postsCollection);
      querySnapshot.forEach((doc) => {
        blogPosts.value.push(doc.data() as BlogPost); // Cast to the BlogPost type
      });
    };

    onMounted(async () => {
      await getProfilePictureURL();
      await getBlogPosts();
    });

    return {
      profilePictureURL,
      blogPosts,
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
.content {
  width: 1200px;
  height: 100%;
  background-color: white;
  border: solid 1px blue;
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
  border: solid 1px red;
  margin-top: 49px;
  margin-left: 30px;
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
.blog-wrapper {
  width: 853px;
  height: 100%;
  background-color: white;
  border: solid 1px red;
  margin-top: 0px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}
.blog1 {
  width: 620px;
  height: 100%;
  background-color: white;
  border: solid 1px purple;
  margin-top: 30px;
  margin-left: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blog1-text {
  width: 620px;
  height: 100%;
  background-color: white;
  border: solid 1px green;
  margin-top: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
}
.blog1-tex-header {
  width: 526px;
  height: 188px;
  background-color: white;
  border: solid 1px green;
  margin-top: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
}
</style>
