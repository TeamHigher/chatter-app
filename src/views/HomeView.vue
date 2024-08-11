<template>
  <body id="App">
    <header class="header">
      <div class="header__container row">
        <router-link to="/"><h1 class="logo">CHATTER</h1></router-link>
        <nav class="nav">
          <ul role="nav__list" class="nav__list nav__list-primary">
            <li class="nav__item">
              <router-link to="/home" class="nav__link">Home</router-link>
            </li>
            <li class="nav__item">
              <router-link to="AboutUs" class="nav__link">About Us</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/ContactUs" class="nav__link"
                >Contact Us</router-link
              >
            </li>
            <li class="nav__item">
              <router-link to="/" class="nav__link">Blogs</router-link>
            </li>
          </ul>

          <ul class="nav__list nav__list-secondary">
            <li class="nav__item">
              <router-link
                to="/login"
                class="nav__link nav__link--button first__item"
                >Log In</router-link
              >
            </li>
            <li class="nav__item">
              <router-link
                to="/signup"
                class="nav__link nav__link--button last__item"
                >Sign up</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section class="hero">
      <div class="hero-container">
        <h1 class="hero__title">
          Welcome to Chatter: A Haven for Text-Based Content
        </h1>
        <p class="hero__text">
          Unleash the Power of Words, Connect With Like-minded Readers and
          Writers
        </p>
        <a href=""><button class="btn">Get Started</button></a>
      </div>
    </section>
    <main>
      <section>
        <div class="about__Chatter--container row">
          <div class="about__chatter--text">
            <h5 class="about__chatter--title">About Chatter</h5>
            <p>
              Chatter is a multi-functional platform where authors and readers
              can have access to their own content. It aims to be a traditional
              bookworm's heaven, and a blog to get access to more text based
              content. Our mission is to foster an inclusive and vibrant
              community where diversity is celebrated. We encourage open-
              mindedness and respect for all individuals, regardless of their
              background or beliefs. By promoting dialogue and understanding we
              strive.
            </p>
          </div>
          <div class="about__chatter--img">
            <img
              src="../assets/about-chatter-image.png"
              alt="people sitting on stairs"
            />
          </div>
        </div>
      </section>
      <section>
        <div class="join__chatter--container">
          <div class="join__chatter--text">
            <h5 class="join__chatter--title">Why you should join chatter</h5>
            <p>
              Our goal is to make writers and readers see our platform as their
              next heaven for blogging, ensuring ease in interactions,
              connecting with like-minded peers, have access to favorite content
              based on interests and able to communicate your great ideas with
              people
            </p>
          </div>
          <div class="join__chatter--cards row">
            <div class="card">
              <img src="../assets/analytics.png" alt="" class="card__image" />
              <h6>Analytics</h6>
              <p>
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </p>
            </div>

            <div class="card">
              <img
                src="../assets/social-interaction.png"
                alt=""
                class="card__image"
              />
              <h6>Social interactions</h6>
              <p>
                Users on the platform can interact with posts they like, comment
                and engage in discussions
              </p>
            </div>
            <div class="card">
              <img
                src="../assets/content-creation.png"
                alt=""
                class="card__image"
              />
              <h6>Content creation</h6>
              <p>
                Write nice and appealing content with our in-built markdown, a
                rich text editor
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="testimonial">
          <div class="testimonial__container row">
            <div class="testimonial__image">
              <img
                src="../assets/profile-image.png"
                alt=""
                class="testimonial__img"
              />
            </div>
            <div class="testimonial__text">
              <p>
                "Chatter has become an integral part of my online experience. As
                a user of this incredible blogging platform, I have discovered a
                vibrant community of individuals who are passionate about
                sharing their ideas and engaging in thoughtful discussions.”
              </p>

              <div class="name-title">
                <strong>Adebobola Muhydeen, </strong
                ><em>Software developer at apple</em>
              </div>

              <router-link to="/signup"
                ><button class="testimonial__btn">
                  Join Chatter
                </button></router-link
              >
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="connect-container row">
          <div class="img-col-wrapper">
            <div class="connect-col-one">
              <img src="../assets/card-image-1.png" alt="" />
              <img src="../assets/card-image-2.png" alt="" />
            </div>
            <div class="connect-col-two">
              <div><img src="../assets/card-image-3.png" alt="" /></div>
            </div>
          </div>
          <div class="connect-col-three">
            <h5>Write, read and connect with great minds on chatter</h5>
            <p>
              Share people your great ideas, and also read write-ups based on
              your interests. connect with people of same interests and goals
            </p>
            <a href=""><button class="connect__btn">Get Started</button></a>
          </div>
        </div>
      </section>
      <div class="footer">
        <div class="footer-container">
          <router-link to="/"><h3>CHATTER</h3></router-link>
          <div class="footer-row row">
            <div class="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#">Community</a></li>
                <li><a href="#">Trending blogs</a></li>
                <li><a href="#">Chatter for teams</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Support docs</a></li>
                <li><a href="#">Join slack</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Official blog</h4>
              <ul>
                <li><a href="#">Official blog</a></li>
                <li><a href="#">Engineering blog</a></li>
              </ul>
            </div>
          </div>
          </div>
        <p>Copyright &copy; 2024 TeamHigher</p>
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
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: "DM Sans Variable", sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 400;
}
img {
  max-width: 100%;
}

section {
  margin-bottom: 4rem;
}
.row {
  display: flex;
  justify-content: space-between;
}

.header {
  background-color: #d0d0d0;
  padding: 25px 0;
}

.header__container {
  max-width: 1800px;
  width: 90%;
  margin: 0 auto;
}

.logo {
  color: #543ee0;
  display: inline;
  font-size: 45px;
}

nav {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
}

.nav__list {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 1rem;
}
.nav__list-primary {
  margin: 0 auto;
}
.nav__item + .nav__item {
  margin-left: 1rem;
}
.nav__link {
  text-decoration: none;
  color: black;
}
.nav__link:hover {
  text-decoration: underline;
  text-underline-offset: 6px;
}

.nav__link--button {
  background: white;
  color: #136c72;
  padding: 0.5rem 1rem;
  border-radius: 100px;
}
.last__item {
  background: #543ee0;
  color: white;
  padding: 1.2rem 4rem;
  border-radius: 10px;
}
.first__item {
  background: #d0d0d0;
  color: black;
  border: solid 1px #543ee0;
  padding: 1.2rem 4rem;
  border-radius: 10px;
}

.hero {
  width: 100%;
  background-color: #074f57;
  background-image: url("../assets/intro-image3-edited.jpeg");
  background-size: cover;
  color: white;
  padding-top: 13rem;
  padding-bottom: 13rem;
  margin-top: 0;
}

.hero-container {
  max-width: 50%;
  margin: 0 auto;
}
.btn {
  width: 9.81rem;
  background-color: #543ee0;
  color: white;
  border-radius: 10px;
  font-size: 1.1rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  margin-top: 1.5rem;
}
.hero__title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 4.5rem;
}
.hero__text {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.3rem;
  margin-top: 1.5rem;
  color: white;
}

.about__Chatter--container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 8rem;
  margin: 0 auto;
}

.about__chatter--title {
  font-size: 2.38rem;
  font-weight: 700;
  margin-top: 0rem;
  margin-bottom: 2rem;
}
.about__chatter--text {
  width: 56%;
}
img {
  width: 100%;
}
.about__chatter--img {
  align-self: start;
  width: 40%;
}
.join__chatter--container {
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;
  margin-bottom: 0rem;
}
.join__chatter--text {
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.join__chatter--title {
  display: flex;
  justify-content: center;
  font-size: 2.38rem;
  margin-bottom: 24px;
}
p {
  margin-top: 24px;
}

.join__chatter--cards {
  width: 70%;
  display: flex;
  margin: 2rem auto;
  border: solid 1px #d0d0d0;
}
.card + .card {
  margin-left: 54px;
}

.card {
  max-width: 100%;
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 0px 16px rgba(0, 0, 0, 0.1),
    0px 0px 32px rgba(0, 0, 0, 0.1);
}

h6 {
  font-size: 24px;
  text-align: left;
  margin-top: 12px;
  font-weight: 500;
}

.card__image {
  width: 40%;
  margin-top: 0px;
}

.testimonial {
  width: 100%;
  background-color: #ffedcc;
}
.testimonial__container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 6rem 0;
}

.testimonial__img {
  width: 100%;
  border-radius: 50%;
}
.testimonial__image {
  width: 25%;
}

.testimonial__text {
  width: 50%;
  display: flex;
  flex-direction: column;

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
}
.testimonial__btn {
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

.connect-container {
  width: 80%;
  margin: 0 auto;
  padding-block: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.connect-col-one {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6rem;
}
.connect-col-two {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.img-col-wrapper {
  width: 100%;
  display: flex;
  gap: 2rem;
}

.connect-col-three {
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  width: 100%;
  h5 {
    font-size: 48px;
    font-weight: 700;
    line-height: 50px;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .connect__btn {
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
  background-color: rgb(255 237 204 / 70%);
  margin-top: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
}

.footer-container {
  width: 80%;
  display: flex;
  /* justify-content: space-between; */
  margin-top: 0px;
  margin: 0 auto;
}
.footer h3 {
  font-size: 48px;
  font-weight: 700;
  color: #543ee0;
  margin-top: 70px;
}
.footer-row {
  display: flex;
  /* flex-wrap: wrap; */
  margin: 0 auto;
}
.footer ul {
  list-style: none;
}
.footer-col {
  padding: 4.5rem;
}

.footer-col ul li a {
  font-size: 19px;
  font-weight: 400;
  line-height: 55px;
  margin-top: 0px;
  margin-bottom: 2px;
  display: block;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: #543ee0;
  padding-left: 8px;
}
.footer-col h4 {
  font-size: 25px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 20px;
  position: relative;
}

@media (max-width: 1100px) {
  .row,
  .footer-container {
    display: block;
  }
  .hero__title,
  .about__chatter--title,
  .join__chatter--title,
  .connect-col-three h5 {
    font-size: 2rem;
    line-height: 3.5rem;
  }
  .hero__text {
    font-size: 1.5rem;
    line-height: 2.3rem;
  }
  .btn {
    margin-top: 2rem;
  }

  .about__chatter--text,
  .about__chatter--img,
  .join__chatter--text,
  .join__chatter--cards,
  .testimonial__text,
  .connect-col-three,
  .footer-row,
  .footer-col {
    width: 100%;
  }

  .hero {
    background: url("../assets/intro-image3-edited.jpeg") no-repeat center
      center;
    background-size: cover;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .hero-container {
    max-width: 80%;
  }

  .about__chatter--img {
    margin-top: 2rem;
  }

  .join__chatter--cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .card + .card {
    margin-left: 0;
  }
  .testimonial__image {
    width: 50%;
    margin: 0 auto;
  }
  .testimonial__text {
    button {
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
  .connect-col-three {
    h5 {
      font-size: 32px;
      line-height: 40px;
      margin-top: 1rem;
    }
  }
  .img-col-wrapper {
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  }
  .footer-container {
    width: 100%;
  }
  .footer-col {
    padding: 0;
    text-align: center;
  }
  .footer h3 {
    margin-top: 0;
    text-align: center;
  }
}
</style>
