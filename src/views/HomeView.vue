<template>
  <body id="App">
    <nav class="navbar">
      <div class="chat">
        <h1>CHATTER</h1>
      </div>
      <div class="nav-items">
        <div class="routes">
          <router-link to="/home">Home</router-link>
          <router-link to="/">About us</router-link>
          <router-link to="/">Contact</router-link>
          <router-link to="/">Blogs</router-link>
        </div>
        <div class="log">
          <div class="login">
            <router-link to="/login">Log in</router-link>
          </div>
          <div class="signup">
            <router-link to="/signup">Sign up</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="intro">
      <div class="intro-message">
        <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
        <h3>
          Unleash the Power of Words, Connect With Like-minded Readers and
          Writers
        </h3>
        <router-link to="/signup">
          <div class="button">Get Started</div>
        </router-link>
      </div>
    </div>
    <div class="about-chatter-container">
      <div class="about-chatter">
        <div class="about-chatter-text">
          <h5>About Chatter</h5>
          <p>
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm's heaven, and a blog to get access to more text based
            content. Our mission is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open- mindedness and
            respect for all individuals, regardless of their background or
            beliefs. By promoting dialogue and understanding we strive.
          </p>
        </div>
        <div class="about-chatter-image">
          <img src="../assets/about-chatter-image.png" alt="About Chatter" />
        </div>
      </div>
    </div>
    <div class="join-chatter-container">
      <div class="join-chatter">
        <div class="text-one">
          <h5>Why you should join chatter</h5>
          <p>
            Our goal is to make writers and readers see our platform as their
            next heaven for blogging, ensuring ease in interactions, connecting
            with like-minded peers, have access to favorite content based on
            interests and able to communicate your great ideas with people
          </p>
        </div>
        <div class="text-two">
          <div class="text-two-1">
            <img src="../assets/text-one-1-image.png" alt="Feature 1" />
            <h6>Analytics</h6>
            <p>
              Analytics to track the number of views, likes and comment and also
              analyze the performance of your articles over a period of time
            </p>
          </div>
          <div class="text-two-2">
            <div class="text-two-2-wrapper">
              <img src="../assets/text-one-2-image.png" alt="Feature 2" />
              <h6>Social interactions</h6>
              <p>
                Users on the platform can interact with posts they like, comment
                and engage in discussions
              </p>
            </div>
          </div>
          <div class="text-two-3">
            <div class="text-two-3-wrapper">
              <img src="../assets/text-one-3-image.png" alt="Feature 2" />
              <h6>Content creation</h6>
              <p>
                Write nice and appealing content with our in-built markdown, a
                rich text editor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile">
      <img src="../assets/profile-image.png" alt="Profile Image" />
      <div class="profile-text">
        <p class="profile-p-1">
          "Chatter has become an integral part of my online experience. As a
          user of this incredible blogging platform, I have discovered a vibrant
          community of individuals who are passionate about sharing their ideas
          and engaging in thoughtful discussions.”
        </p>
        <p class="profile-p-2">
          <strong>Adebobola Muhydeen</strong>,
          <em>Software developer at apple</em>
        </p>
        <router-link to="/signup">
          <div class="profile-button">Join Chatter</div>
        </router-link>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="card-image">
          <div class="card-image-left">
            <img src="../assets/card-image-1.png" alt="Card Image 1" />
            <img src="../assets/card-image-2.png" alt="Card Image 2" />
          </div>
          <div class="card-image-right">
            <img src="../assets/card-image-3.png" alt="Card Image 3" />
          </div>
        </div>
        <div class="card-text">
          <h5>Write, read and connect with great minds on chatter</h5>
          <p>
            Share people your great ideas, and also read write-ups based on your
            interests. connect with people of same interests and goals
          </p>
          <div>
            <router-link to="/signup">
              <div class="profile-button">Get Started</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h3>CHATTER</h3>
      <div>
        <ul>
          <h5>Explore</h5>
          <li>Community</li>
          <li>Trending blogs</li>
          <li>Chatter for teams</li>
        </ul>
      </div>
      <div>
        <ul>
          <h5>Support</h5>
          <li>Support docs</li>
          <li>Join slack</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul>
          <h5>Official blog</h5>
          <li>Official blog</li>
          <li>Engineering blog</li>
        </ul>
      </div>
    </div>
  </body>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
});
</script>

<style>
body {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "DM Sans Variable", sans-serif;
}
.navbar {
  width: auto;
  height: 98px;
  background-color: #d0d0d0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chat {
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  color: #543ee0;
  font-family: "DM Sans Variable", sans-serif;
  margin-left: 72px;
}

.nav-items {
  width: 805px;
  height: 56px;
  top: 25px;
  left: 560px;
  gap: 174px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  margin-left: 274px;
  margin-right: 75px;
}

.log {
  width: 338px;
  height: 56px;
  margin-right: 0px;
  gap: 24px;
  display: flex;
}
.routes {
  width: 320px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  font-size: 15px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 24px;
}
.login {
  width: 157px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #543ee0;
  padding: 8px, 16px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup {
  width: 157px;
  height: 56px;
  border-radius: 8px;
  background-color: #543ee0;
  padding: 8px, 16px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.intro {
  width: 100%;
  height: 764px;
  top: 99px;
  background-image: url("../assets/intro-image3-edited.jpeg");
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.intro-message {
  width: 984px;
  height: 332px;
  top: 220px;
  left: 228px;
  padding: 0px, 0px, 74px, 0px;
  gap: 24px;
  font-size: 48px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  color: white;
}
.intro-message h1 {
  font-size: 48px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  color: #ffffff;
  line-height: 72px;
}
.intro-message h3 {
  width: 740px;
  height: 72px;
  font-size: 24px;
  font-weight: 500;
  font-family: "DM Sans Variable", sans-serif;
  color: white;
  line-height: 36px;
}
.button {
  width: 157px;
  height: 56px;
  border-radius: 8px;
  background-color: #543ee0;
  padding: 8px, 16px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 27px;
}
.about-chatter-container {
  width: 100%;
  height: 404px;
  top: 823px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 96px;
  margin-right: 0px;
}
.about-chatter {
  width: 1296px;
  height: 404px;
  top: 959px;
  left: 72px;
  gap: 84px;
  background-color: white;
  display: flex;
  justify-content: space-between;
}
.about-chatter-text {
  width: 686px;
  height: 268px;
  padding: 0px, 0px, 0px, 72px;
  gap: 24px;
  font-size: 24px;
  font-weight: 500;
  font-family: "DM Sans Variable", sans-serif;
  color: black;
  margin-top: 0px;
}
.about-chatter-text h5 {
  width: 335px;
  height: 72px;
  font-size: 38px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 72px;
  color: black;
  margin-top: 0px;
  margin-bottom: 34px;
}
.about-chatter-image img {
  width: 500px;
  height: 404px;
  object-fit: cover;
  display: flex;
  justify-content: flex-end;
}
.about-chatter-text p {
  width: 686px;
  height: 162px;
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans Variable", sans-serif;
  color: black;
  line-height: 27px;
  margin-top: 34px;
}

.join-chatter-container {
  width: 100%;
  height: 555px;
  top: 1459px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 96px;
  margin-right: 0px;
}
.join-chatter {
  width: 1040px;
  height: 555px;
  top: 1459px;
  left: 200px;
  gap: 54px;
  margin-top: 0px;
}
.text-one {
  width: 1040px;
  height: 177px;
  padding: 0px, 0px, 0px, 72px;
  gap: 24px;
  font-size: 24px;
  font-weight: 500;
  font-family: "DM Sans Variable", sans-serif;

  margin-top: 0px;
}
.text-one h5 {
  width: 1040px;
  height: 72px;
  font-size: 38px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 72px;
  color: black;
  margin-top: 0px;
  margin-bottom: 24px;
  text-align: center;
}
.text-one p {
  width: 1040px;
  height: 81px;
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans Variable", sans-serif;
  color: black;
  line-height: 27px;
  margin-top: 24px;
}
.text-two {
  width: 1014px;
  height: 324px;
  padding: 0px, 0px, 0px, 72px;
  gap: 48px;
  margin-top: 54px;
  display: flex;
  justify-content: space-between;
}
.text-two-1 {
  width: 306px;
  height: 324px;
  border-radius: 8px;
  border: solid 1px #d0d0d0;
  padding: 15px, 18px, 15px, 18px;
  gap: 12px;
}
.text-two-2 {
  width: 306px;
  height: 324px;
  border-radius: 8px;
  border: solid 1px #d0d0d0;
  padding: 15px, 18px, 15px, 18px;
  gap: 12px;
}
.text-two-3 {
  width: 306px;
  height: 324px;
  border-radius: 8px;
  border: solid 1px #d0d0d0;
  padding: 15px, 18px, 15px, 18px;
  gap: 12px;
}
.text-two-1 h6 {
  width: 106px;
  height: 36px;
  font-size: 24px;
  font-weight: 500;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 36px;
  color: black;
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;
  margin-left: 18px;
}
.text-two-1 p {
  width: 254px;
  height: 135px;
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans Variable", sans-serif;
  color: black;
  line-height: 27px;
  margin-top: 12px;
  margin-left: 18px;
}
.text-two-1 img {
  width: 92px;
  height: 88px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-left: 18px;
  margin-bottom: 12px;
}
.text-two-2-wrapper {
  width: 254px;
  height: 256px;
  top: 21px;
  left: 18px;
  gap: 12px;
  margin-top: 21px;
}
.text-two-2 img {
  width: 92px;
  height: 88px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-left: 18px;
  margin-bottom: 12px;
}
.text-two-2 h6 {
  width: 211px;
  height: 36px;
  font-size: 24px;
  font-weight: 500;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 36px;
  color: black;
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;
  margin-left: 18px;
}
.text-two-2 p {
  width: 254px;
  height: 135px;
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans Variable", sans-serif;
  color: black;
  line-height: 27px;
  margin-top: 12px;
  margin-left: 18px;
}
.text-two-3-wrapper {
  width: 254px;
  height: 256px;
  top: 21px;
  left: 18px;
  gap: 12px;
  margin-top: 21px;
}
.text-two-3 img {
  width: 92px;
  height: 88px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-left: 18px;
  margin-bottom: 12px;
}
.text-two-3 h6 {
  width: 211px;
  height: 36px;
  font-size: 24px;
  font-weight: 500;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 36px;
  color: black;
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;
  margin-left: 18px;
}
.text-two-3 p {
  width: 254px;
  height: 135px;
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans Variable", sans-serif;
  color: black;
  line-height: 27px;
  margin-top: 12px;
  margin-left: 18px;
}
.profile {
  width: 100%;
  height: 492px;
  top: 2121px;
  background-color: #ffedcc;
  margin-top: 107px;
  margin-bottom: 96px;
  display: flex;
}
.profile-text {
  width: 924px;
  height: 257px;
  top: 93px;
  left: 440px;
  gap: 24px;
  margin-top: 93px;
  margin-left: 52px;
}
.profile img {
  width: 300px;
  height: 300px;
  top: 52px;
  left: 53px;
  gap: 24px;
  margin-left: 73px;
  margin-top: 93px;
  margin-bottom: 79px;
  border-radius: 50%;
}
.profile-p-1 {
  width: 924px;
  height: 81px;
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans Variable", sans-serif;
  color: black;
  line-height: 27px;
  margin-top: 0px;
  margin-bottom: 48px;
  margin-left: 0px;
}
.profile-p-2 strong {
  width: 500px;
  height: 48px;
  font-size: 32px;
  font-weight: 500;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 48px;
  color: black;
  margin-top: 48px;
  margin-left: 0px;
}
.profile-button {
  width: 157px;
  height: 56px;
  border-radius: 8px;
  background-color: #543ee0;
  padding: 8px, 16px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 27px;
  margin-top: 38.5px;
  margin-left: 0px;
}
.card-container {
  width: 100%;
  height: 412px;
  top: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 96px;
  margin-right: 0px;
}
.card {
  width: 1127px;
  height: 412px;
  top: 270px;
  left: 156px;
  gap: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 96px;
  margin-bottom: 96px;
  margin-right: 0px;
}
.card-image {
  width: 352px;
  height: 412px;
  top: 270px;
  left: 156px;
  gap: 44px;
  display: flex;
  justify-content: space-between;
}
.card-image-left img {
  width: 154px;
  height: 158px;
  object-fit: cover;
}

.card-image-left {
  width: 154px;
  height: 412px;
  gap: 96px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.card-image-right img {
  width: 154px;
  height: 158px;
  object-fit: cover;
}
.card-image-right {
  width: 154px;
  height: 412px;
  gap: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-text {
  width: 655px;
  height: 310px;
  top: 270px;
  left: 156px;
  gap: 32px;
  margin-top: -100px;
}
.card-text h5 {
  width: 655px;
  height: 144px;
  font-size: 48px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 72px;
  color: black;
  margin-top: 0px;
  margin-bottom: 24px;
  text-align: left;
}
.card-text p {
  width: 594px;
  height: 54px;
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans Variable", sans-serif;
  color: black;
  line-height: 27px;
  margin-top: 24px;
  text-align: left;
}

.card-button {
  width: 157px;
  height: 58px;
  border-radius: 8px;
  background-color: #543ee0;
  padding: 8px, 16px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 27px;
  margin-top: 32px;
  margin-left: 0px;
}
.footer {
  width: 100%;
  height: 402px;
  background-color: rgb(255 237 204 / 70%);
  margin-top: 96px;

  top: 3217px;
  display: flex;
  flex-direction: row;
}
.footer h3 {
  width: 214px;
  height: 72px;
  top: 72px;
  left: 80px;
  font-size: 48px;
  font-weight: 700;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 72px;
  color: #543ee0;
  margin-top: 72px;
  margin-left: 80px;
  margin-bottom: 258px;
  margin-right: 218px;
}
.footer ul {
  width: 214px;
  height: 330px;
  top: 72px;
  left: 80px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  margin-left: 80px;
  margin-bottom: 72px;
  list-style-type: none;
}
.footer h5 {
  width: 214px;
  height: 36px;
  font-size: 24px;
  font-weight: 500;
  font-family: "DM Sans Variable", sans-serif;
  line-height: 36px;
  color: black;
  margin-top: 0px;
  margin-bottom: 10px;
}
.footer li {
  width: 150px;
  height: 27px;
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans Variable", sans-serif;
  color: black;
  line-height: 27px;
  margin-top: 0px;
  margin-bottom: 2px;
  top: 124px;
  left: 512px;
}
</style>
