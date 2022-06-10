import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { isShow: true },
    },
    {
      name: "search",
      // path: "/search", //query传参，不写占位符
      // path: "/search/:value", //params传参，写占位符
      path: "/search/:value?", //params传参，写占位符,?表示params参数可传可不传
      component: Search,
      meta: { isShow: true },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    // 重定向：在项目跑起来时，访问/，立即跳转到home
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
export default router;
