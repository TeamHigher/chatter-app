import { createApp } from "vue";
import App from "./App.vue";
import "@fontsource-variable/dm-sans";
import router from "./router";
import store from "./store";



createApp(App).use(router).use(store).mount("#app");
