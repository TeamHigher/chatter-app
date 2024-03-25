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
    <div class="confirm-main">
      <div class="confirm-content">
        <div class="confirm-content-text">
          <div class="confirm-content-header">Enter confirmation code</div>
          <div class="confirm-content-sub">
            We emailed you a code. Please input the code here for account
            verification
          </div>
        </div>
        <form
          method="get"
          class="code-group"
          data-auto-submit="false"
          autocomplete="off"
        >
          <div class="container" id="inputs">
            <input type="text" class="input" inputmode="numeric" maxlength="1" />
            <input type="text" class="input" inputmode="numeric" maxlength="1" />
            <input type="text" class="input" inputmode="numeric" maxlength="1" />
            <input type="text" class="input" inputmode="numeric" maxlength="1" />
          </div>
          <div id="submit-button">
          <button>
            <router-link to="/"><p>Create account</p></router-link>
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default defineComponent({


  
  mounted() {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input, index) => {
      input.addEventListener("input", function (e) {
        const target = e.target as HTMLInputElement;
        const val = target.value;
        if (isNaN(parseInt(val))) {
          target.value = "";
          return;
        }
        if (val !== "") {
          const next = target.nextElementSibling as HTMLInputElement;
          if (next) {
            next.focus();
          }
        }
      });

      input.addEventListener("keyup", function (e) {
        const target = e.target as HTMLInputElement;
        const key = (e as KeyboardEvent).key.toLowerCase();

        if (key === "backspace" || key === "delete") {
          target.value = "";
          const prev = target.previousElementSibling as HTMLInputElement;
          if (prev) {
            prev.focus();
          }
          return;
        }
      });
    });
  },
  async verifyCode(code: string, email: string) {
      try {
        // Sign in user with email and password to get user's UID
        const userCredential = await signInWithEmailAndPassword(auth, email, code);
        const user = userCredential.user;

        // Create user account with UID
        // You can use user.uid to create the user account in your database
        console.log('User account created successfully:', user.uid);
      } catch (error) {
        console.error('Verification error:', error);
        // Handle verification error, such as displaying an error message to the user
      }
    }
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

.confirm-main {
  width: 554px;
  height: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 354px;
  left: 763px;
  gap: 48px;
  margin-left: 282px;
}

.confirm-content {
  width: 554px;
  height: 212px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: -105px;
}
.confirm-content-text {
  width: 554px;
  height: 84px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 24px;
  font-weight: 500;
  gap: 12px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.confirm-content-header {
  width: 368px;
  height: 48px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 32px;
  font-weight: 500;
  color: black;
  text-align: center;
  gap: 12px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.confirm-content-sub {
  width: 554px;
  height: 24px;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: black;
  gap: 12px;
}
.container {
  width: 496.49px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-top: 0px;
  margin-bottom: 48px;
}
input {
  width: 70.12px;
  height: 58px;
  padding: 10px 12px 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
  font-family: "DM sans Variable", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
}
button {
  width: 520px;
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
button p {
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
}
#submit-button {
  width: 520px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
