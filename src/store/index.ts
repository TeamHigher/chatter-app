import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    error: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    async register({ commit }, details) {
      try {
        const { email, password } = details;
        await createUserWithEmailAndPassword(auth, email, password);
        commit("setUser", auth.currentUser);
        router.push("/confirmation");
      } catch (error) {
        commit("setError", error);
      }
    },

    async login({ commit }, details) {
      try {
        const { email, password } = details;
        await signInWithEmailAndPassword(auth, email, password);
        commit("setUser", auth.currentUser);
        router.push("/");
      } catch (error) {
        commit("setError", error);
      }
    },

    async signOut({ commit }) {
      try {
        await signOut(auth);
        commit("clearUser");
        router.push("/login");
      } catch (error) {
        commit("setError", error);
      }
    },

    clearError({ commit }) {
      commit("clearError");
    },
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
  },
});

// Listen for authentication state changes and update the store accordingly
auth.onAuthStateChanged((user) => {
  if (user) {
    store.commit("setUser", user);
  } else {
    store.commit("clearUser");
  }
});

export default store;
