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
      <div class="registration-form">
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
            <h1>Register as a Writer/Reader</h1>
          </div>
        </div>
        <div class="name">
          <div>
            <label for="firstName">First name</label>
            <input type="text" placeholder="John" v-model="firstName" name="firstName" />
          </div>
          <div>
            <label for="lastName">Last name</label>
            <input type="text" placeholder="Doe" v-model="lastName" name="lastName" />
          </div>
        </div>
        <div class="join-as">
          <label for="options">You are joining as?</label>
          <input list="options" name="options" v-model="options" />
          <datalist id="options">
            <option value="Reader" />
            <option value="Writer" />
          </datalist>
        </div>
        <div class="email">
          <label for="email">Email address</label>
          <input type="email" placeholder="Johndoe@gmail.com" v-model="email" name="email" />
        </div>
        <div class="password">
          <label for="password">Password</label>
          <input type="password" placeholder="********" v-model="password" name="password" />
        </div>
        <div class="confirm-password">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            v-model="confirmPassword"
            name="confirmPassword"
          />
        </div>
        <button @click.prevent="register" class="create-account">
          Create Account
        </button>
        <button @click.prevent="signInWithPopup" class="signup-with-google">
          <span><img src="../assets/google-logo.png" alt="" /></span>Signup with
          google
        </button>
        <button class="signup-with-linkedin">
          <span><img src="../assets/linkedin-logo.png" alt="" /></span>Signup with
          linkedin
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import store from "@/store";
import { User } from "firebase/auth";
import router from "@/router";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      options: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
    };
  },

  methods: {
    // Method to call the register action
    async signup() {
      const Store = useStore();
      try {
        await store.dispatch("signup", {
          email: this.email,
          password: this.password,
          options: this.options,
          firstName: this.firstName,
          lastName: this.lastName,
        });
      } catch (error:any) {
        console.error(error);
      }
    },

    async register() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user registered: ", user);
          // Redirect to another route after successful registration
          const router = useRouter();
          this.$router.push("/confirmation");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
    async sendVerificationEmail(email: string) {
      const auth = getAuth();
      const user: User | null = auth.currentUser;
      if (user) {
        try {
          await sendEmailVerification(user);
          // Verification email sent successfully
          router.push("/confirmation");
          // You can redirect the user to a success page or show a message
        } catch (error) {
          // Handle error
          console.error("Error sending verification email:", error);
        }
      } else {
        console.log("No user is signed in");
      }
    },
    async signInWithPopup() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // Signed-in user info.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
          alert("user logged in");
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.error(errorCode, errorMessage, email, credential);
        });
    },
  },
});
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "DM sans Variable", Sans-serif;
}

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
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin-top: 6px;
}
.registration-form {
  width: 520px;
  height: 924px;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  margin-top: 1rem;
}
.form-header {
  width: 440px;
  height: 114px;
  gap: 1rem;
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
.options-bar {
  width: 482px;
  height: 6px;
  background: white;
  display: flex;
}
.options-bar-left {
  width: 50%;
  height: 6px;
  background-color: #543ee0;
}
.options-bar-right {
  width: 50%;
  height: 6px;
  background-color: gray;
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
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
}
.name {
  width: 516px;
  height: 92px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 12px; */
  margin-top: 5px;
}
.name > * {
  width: 252px;
  height: 50px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  width: 218px;
  height: 50px;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #111111;
  margin-top:5px;
  margin-bottom: 0px;
}

 label {
  font-size: 18px;
  font-weight: 400;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
}

.join-as {
  width: 516px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  margin-top: 5px;
}
.join-as input {
  width: 482px;
  height: 50px;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
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

.email input {
  width: 482px;
  height: 50px;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #111111;
  margin-top: 10px;
  margin-bottom: 0px;
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


.password input {
  width: 482px;
  height: 50px;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  
  font-size: 16px;
  font-weight: 500;
  color: #111111;
  margin-top: 10px;
  margin-bottom: 0px;
}
.confirm-password {
  width: 516px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  margin-top: 5px;
}

.confirm-password input {
  width: 482px;
  height: 50px;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #111111;
  margin-top: 10px;
  margin-bottom: 0px;
}
.create-account {
  width: 482px;
  height: 50px;
  background: #543ee0;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 5px;
  margin-bottom: 0px;
  cursor: pointer;
}
.signup-with-google {
  width: 482px;
  height: 50px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #111111;
  margin-top: 5px;
  margin-bottom: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup-with-google img {
  width: 24px;
  height: 24px;
 justify-content: center;
  align-items: center;
  display: flex
}
.signup-with-linkedin {
  width: 482px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  color: #111111;
}
.signup-with-linkedin img {
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  display: flex;
 
}
</style>
