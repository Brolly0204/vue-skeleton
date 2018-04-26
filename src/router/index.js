import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import About from "@/components/About";
import User from "@/components/User";
import Skeleton from "@/skeleton/Skeleton";

Vue.use(Router);

const isDev = process.env.NODE_ENV === "development";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/user",
    name: "User",
    component: User
  }
];

isDev && routes.push({
  path: '/skeleton',
  name: 'Skeleton',
  component: Skeleton
})

export default new Router({
  routes
});

