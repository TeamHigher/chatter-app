import { createApp } from "vue";
import App from "./App.vue";
import "@fontsource-variable/dm-sans";
import router from "./router";
import store from "./store";
import 'simplemde/dist/simplemde.min.css';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';





VueMarkdownEditor.use(vuepressTheme);
VueMarkdownEditor.lang.use('en-US', enUS);

createApp(App).use(router).use(store).use(VueMarkdownEditor).mount("#app");


