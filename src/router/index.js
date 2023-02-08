import { createRouter, createWebHistory } from "vue-router";
import ThisAbout from "../views/About";
import ThisHome from "../views/Home";
const routes = [
  {
    path: "/",
    name: "ThisHome",
    component: ThisHome,
  },
  {
    path: "/about",
    name: "ThisAbout",
    component: ThisAbout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
