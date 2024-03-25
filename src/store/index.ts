import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    async register({ commit }, details) {
      const { email, password } = details;
      try {
        if (router && router.push) {
          await createUserWithEmailAndPassword(auth, email, password);
          commit("setUser", auth.currentUser);
          router.push("/confirmation");
        } else {
          throw new Error("router or router.push method not found");
        }
      } catch (error: any) {
        switch (error.code) {
          case "auth/email-already-in-use":
            ("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          default:
            alert("An error occurred");
        }
      }
    },

    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        commit("setUser", auth.currentUser);
        router.push("/");
      } catch (error: any) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("An error occurred");
        }
      }
    },

    async signOut({ commit }) {
      if (router && router.push) {
        await signOut(auth);
        commit("clearUser");
        router.push("/login");
      } else {
        throw new Error("router or router.push method not found");
      }
    },
  },
});
