<template>
  <div class="register">
    <div class="register-image">
      <div class="register-image-text">
        <h1>CHATTER</h1>
        <p>
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
      </div>
    </div>
    <form action="">
      <div class="login-form">
        <div class="form-header">
          <div class="options">
            <div class="register-login">
              <router-link to="/signup"><h3>REGISTER</h3></router-link>
              <router-link to="/login"><h3>LOGIN</h3></router-link>
            </div>
            <div class="options-bar">
              <div class="options-bar-left"></div>
              <div class="options-bar-right"></div>
            </div>
          </div>
          <div class="header-text">
            <h1>Welcome back</h1>
          </div>
        </div>

        <div class="email">
          <p>Email address</p>
          <input type="email" placeholder="Johndoe@gmail.com" v-model="email" />
        </div>
        <div class="password">
          <p>Password</p>
          <input type="password" placeholder="********" v-model="password" />
        
        </div>
        <div v-if="message" class="message">{{ message }}</div>
        <button @click.prevent="signIn" class="create-account">Log in</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useStore } from "vuex";
import router from "@/router";
import { mapActions } from "vuex";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      message: "", // Error message
    };
  },
  methods: {
    // Map the login action from the Vuex store
    ...mapActions(["login"]),

    async signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.message = "user logged in"; // Success message
          router.push({ name: "SignedIn" });
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.message = errorMessage; // Error message
          if (errorCode === "auth/wrong-password") {
            this.message = "Wrong password";
          } else {
            this.message = errorMessage;
          }
        });
    },
  },
});
</script>

<style>
.register {
  width: 100%;
  height: 100%;
  top: -623px;
  left: -11424px;
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 100vh;
}
.register-image {
  width: 622px;
  height: 100%;
  background-image: url("../assets/signup-screen-image2.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-image-text {
  width: 550px;
  height: 168px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-image-text h1 {
  width: 214px;
  height: 72px;
  line-height: 72px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 24px;
  text-align: center;
}
.register-image-text p {
  width: 550px;
  height: 72px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin-top: 6px;
}

.login-form {
  width: 520px;
  height: 470px;
  top: 30px;
  left: 818px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  margin-top: 50px;
}
.login-form button {
  width: 482px;
  height: 56px;
  background: #543ee0;
  border-radius: 8px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 5px;
  margin-bottom: 0px;
  cursor: pointer;
  
}
.form-header {
  width: 440px;
  height: 114px;
  gap: 24px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
}
.options {
  width: 440px;
  height: 42px;
  gap: 12px;
  display: flex;
  flex-direction: column;
}
h3 {
  width: 74px;
  height: 24px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #111111;
  line-height: 24px;
  cursor: pointer;
  margin-top: 0px;
}
.register-login {
  width: 440px;
  height: 24px;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0px;
}
.register-login a {
  text-decoration: none;
}
.options-bar {
  width: 440px;
  height: 6px;
  display: flex;
  flex-direction: row;
}
.options-bar-left {
  width: 50%;
  height: 6px;
  background-color: gray;
}
.options-bar-right {
  width: 50%;
  height: 6px;
  background-color: #543ee0;
}
.header-text {
  width: 415px;
  height: 48px;
  margin-left: 20px;
  display: flex;
  justify-content: flex-end;
}
.header-text h1 {
  width: 415px;
  height: 48px;
  font-family: "DM sans Variable", Sans-serif;
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

input {
  width: 218px;
  height: 921px;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #111111;
  margin-top: 10px;
  margin-bottom: 0px;
}

.email {
  width: 516px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  margin-top: 5px;
}
.email p {
  width: 200px;
  height: 24px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
}
.email input {
  width: 482px;
  height: 56px;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #111111;
  margin-top: 10px;
  margin-bottom: 0px;
  text-align: left;
}
.password {
  width: 516px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  margin-top: 5px;
}

.password p {
  width: 200px;
  height: 24px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
}
.password input {
  width: 482px;
  height: 56px;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #111111;
  margin-top: 10px;
  margin-bottom: 0px;
  text-align: left;
}

.message {
  width: 516px;
  height: 56px;
  background: #ff0000;
  border-radius: 8px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
