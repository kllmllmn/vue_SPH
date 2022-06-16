import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "./components/TypeNav";

import store from "./store";

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);

new Vue({
  render: (h) => h(App),
  // 注册路由，所有vm,vc都有$route,$router属性
  router,
  // 注册仓库，所有vm,vc都有$store属性
  store,
  mounted() {
    // console.log(this);
    // 通知Vuex向服务器发请求，获取数据，存储到仓库中
    // 使用vuex模块化，方法的参数会有所改变！！！！！！
    this.$store.dispatch("home/categoryList");
  },
}).$mount("#app");
