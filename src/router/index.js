import { createRouter, createWebHistory } from "vue-router";
import photo from "../assets/photo.png";

const routes = [
  {
    path: "/",
    component: () => import("../components/Home.vue"), // ✅ Lazy load
    props: () => ({ photo }), // ✅ Pass props dynamically
  },
  { path: "/skills", component: () => import("../components/Skills.vue") },

  {
    path: "/contact",
    component: () => import("../components/Contact.vue"), // ✅ Lazy load
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
