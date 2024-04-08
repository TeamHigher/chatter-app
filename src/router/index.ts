import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import ConfirmationView from "../views/ConfirmationView.vue";
import SignedInView from "../views/SignedInView.vue";
import FeedView from "../views/FeedView.vue";
import BookmarkView from "../views/BookmarkView.vue";
import TeamBlogsView from "../views/TeamBlogsView.vue";
import DraftsView from "../views/DraftsView.vue";
import AnalyticsView from "../views/AnalyticsView.vue";
import AccountView from "../views/AccountView.vue";
import NotificationView from "../views/NotificationView.vue";
import PostView from "../views/PostView.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignUpView,
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    component: ConfirmationView,
  },
  {
    path: "/signedIn",
    name: "SignedIn",
    component: SignedInView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/feed",
    name: "Feed",
    component: FeedView,
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    component: BookmarkView,
  },
  {
    path: "/teamblogs",
    name: "TeamBlogs",
    component: TeamBlogsView,
  },
  {
    path: "/drafts",
    name: "Drafts",
    component: DraftsView,
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: AnalyticsView,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountView,
  },
  {
    path: "/notification",
    name: "Notification",
    component: NotificationView,
  },
  {
    path: "/post",
    name: "Post",
    component: PostView,
  },
  {
    path: "/aboutus",
    name: "About",
    component: AboutUs,
  },
  {
    path: "/contactus",
    name: "Contact",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
