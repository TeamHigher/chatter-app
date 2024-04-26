<template>
  <body id="App">
    <header class="primary-header">
      <div class="header-container">
        <h1>CHATTER</h1>
        <nav class="primary-nav">
          <ul role="list" class="nav-list">
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="AboutUs">About Us</router-link></li>
            <li><router-link to="/ContactUs">Contact Us</router-link></li>
            <li><router-link to="/">Blogs</router-link></li>
          </ul>
        </nav>
        <span>
          <router-link to="/login">Log In</router-link>
          <router-link to="/signup">Sign up</router-link>
        </span>
      </div>
    </header>
    <main>
      <section class="hero">
        <div class="hero-container">
          <img src="../assets/intro-image3-edited.jpeg" alt="" />
          <div class="hero-text">
            <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
            <h3>
              Unleash the Power of Words, Connect With Like-minded Readers and
              Writers
            </h3>
            <a href=""><button>Get Started</button></a>
          </div>
        </div>
      </section>
      <section>
        <div class="aboutChatter-container">
          <div class="even-columns">
            <div class="column-1">
              <h5>About Chatter</h5>
              <p>
                Chatter is a multi-functional platform where authors and readers
                can have access to their own content. It aims to be a
                traditional bookworm's heaven, and a blog to get access to more
                text based content. Our mission is to foster an inclusive and
                vibrant community where diversity is celebrated. We encourage
                open- mindedness and respect for all individuals, regardless of
                their background or beliefs. By promoting dialogue and
                understanding we strive.
              </p>
            </div>
            <div class="column-2">
              <img src="../assets/about-chatter-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="wjc-container">
          <div class="wjc-text">
            <h5>Why you should join chatter</h5>
            <p>
              Our goal is to make writers and readers see our platform as their
              next heaven for blogging, ensuring ease in interactions,
              connecting with like-minded peers, have access to favorite content
              based on interests and able to communicate your great ideas with
              people
            </p>
          </div>
        </div>
        <div class="triple-cards">
          <div class="card">
            <img src="../assets/analytics.png" alt="" />
            <h6>Analytics</h6>
            <p>
              Analytics to track the number of views, likes and comment and also
              analyze the performance of your articles over a period of time
            </p>
          </div>
          <div class="card">
            <img src="../assets/social-interaction.png" alt="" />
            <h6>Social interactions</h6>
            <p>
              Users on the platform can interact with posts they like, comment
              and engage in discussions
            </p>
          </div>
          <div class="card">
            <img src="../assets/content-creation.png" alt="" />
            <h6>Content creation</h6>
            <p>
              Write nice and appealing content with our in-built markdown, a
              rich text editor
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="testimonial">
          <div class="testimonial-image">
            <img src="../assets/profile-image.png" alt="" />
          </div>
          <div class="testimonial-text">
            <p>
              "Chatter has become an integral part of my online experience. As a
              user of this incredible blogging platform, I have discovered a
              vibrant community of individuals who are passionate about sharing
              their ideas and engaging in thoughtful discussions.”
            </p>

            <div class="name-title">
              <strong>Adebobola Muhydeen, </strong
              ><em>Software developer at apple</em>
            </div>

            <router-link to="/signup"
              ><button>Join Chatter</button></router-link
            >
          </div>
        </div>
      </section>
      <section>
        <div class="connect-container">
          <div class="connect-column-one">
            <div><img src="../assets/card-image-1.png" alt="" /></div>
            <div></div>
            <div><img src="../assets/card-image-2.png" alt="" /></div>
          </div>
          <div class="connect-column-two">
            <div></div>
            <div><img src="../assets/card-image-3.png" alt="" /></div>
            <div></div>
          </div>
          <div class="connect-column-three">
            <h5>Write, read and connect with great minds on chatter</h5>
            <p>
              Share people your great ideas, and also read write-ups based on
              your interests. connect with people of same interests and goals
            </p>
            <a href=""><button>Get Started</button></a>
          </div>
        </div>
      </section>
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
    </main>
  </body>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "DM Sans Variable", sans-serif;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
}
section {
  margin-bottom: 6rem;
}

.primary-header {
  background-color: #d0d0d0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  padding: 25px 0;
}

span {
  display: flex;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 88px;

  a:nth-child(2) {
    color: white;
    width: 9.81rem;
    height: 3.5rem;
    background-color: #543ee0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid purple;
  }

  a:nth-child(1) {
    color: black;
    width: 9.81rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #543ee0;
  }

  a {
    text-decoration: none;
  }
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-family: "DM Sans Variable", sans-serif;

  h1 {
    color: #543ee0;
    display: inline;
    font-size: 45px;
    font-family: "DM Sans Variable", sans-serif;
    margin-left: 88px;
  }
}

.nav-list {
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: black;
    list-style-type: none;
  }
  li {
    list-style-type: none;
  }
  a:hover {
    color: #543ee0;
    text-decoration: underline;
  }
}

.hero-container img {
  width: 100%;
  height: 47.75rem;
  margin-top: 6.8rem;
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-align: left;

  h1 {
    font-size: 3rem;
    font-family: "DM Sans Variable", sans-serif;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 4.5rem;
  }

  h3 {
    font-size: 1.5rem;
    font-family: "DM Sans Variable", sans-serif;
    font-weight: 500;
    line-height: 2.3rem;
    margin-top: 1.5rem;
    color: white;
    display: inline;
  }
  a > button {
    width: 9.81rem;
    height: 3.5rem;
    background-color: #543ee0;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    margin-top: 1.5rem;
  }
}

.aboutChatter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
}
.even-columns {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  margin-right: 200px;
}
.column-1 {
  width: 42.9rem;

  h5 {
    font-size: 2.38rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-top: 0rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
  }
}

.column-2 {
  width: 31.25rem;

  img {
    width: 100%;
    height: 100%;
  }
}
.wjc-text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h5 {
    display: flex;
    justify-content: center;
    font-size: 2.38rem;
    margin-bottom: 24px;
  }
  p {
    width: 65%;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin-top: 24px;
  }
}

.triple-cards {
  display: flex;
  justify-content: center;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 2rem;
  gap: 54px;
}
.card {
  width: 290px;
  height: 324px;
  border-radius: 8px;
  gap: 12px;
  padding: 15px 18px 15px 18px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 0px 16px rgba(0, 0, 0, 0.1),
    0px 0px 32px rgba(0, 0, 0, 0.1);

  h6 {
    font-size: 24px;
    text-align: left;
    margin-top: 12px;
    margin-bottom: 12px;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    text-align: left;
    margin-top: 12px;
    line-height: 27px;
    font-weight: 400;
  }
}

.testimonial {
  width: 100%;
  height: 492px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffedcc;
  gap: 8rem;
}
.testimonial-image {
  width: 500px;
  img {
    width: 100%;
    border-radius: 50%;
    margin-left: 4.56rem;
    margin-top: 2rem;
  }
}

.testimonial-text {
  display: flex;
  flex-direction: column;

  p {
    width: 70%;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 3rem;
  }
  .name-title {
    display: inline;
  }
  strong {
    font-size: 32px;
    font-weight: 500;
    line-height: 48px;
  }
  em {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
  }
  button {
    width: 9.81rem;
    height: 3.5rem;
    background-color: #543ee0;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    margin-top: 2rem;
  }
}

.connect-container {
  width: 100%;
  display: flex;
  height: 412px;
  margin-left: 0px;
}
.connect-column-one {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-right: 44px;
  margin-left: 120px;
  img {
   width: 100%;
   height: 100%;
  }
}
.connect-column-two {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  margin-right: 150px;
  img {
   width: 100%;
    height: 100%;
  }
}
.connect-column-three {
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  width: 40%;
  h5 {
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  p{
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin-top: px;
  }
  button {
    width: 9.81rem;
    height: 3.5rem;
    background-color: #543ee0;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 2rem;
  }
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
