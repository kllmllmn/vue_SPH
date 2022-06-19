// home模块的小仓库
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";
const actions = {
  // 通过API里的接口函数调用，向服务器发请求，获取服务器的数据
  //   对象解构接收参数
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit("CATEGORYLIST", result.data);
    }
    console.log(result);
  },
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code === 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  async getFloorList({ commit }) {
    let result = await reqGetFloorList();
    if (result.code === 200) {
      commit("GETFLOORLIST", result.data);
    }
  },
};
const mutations = {
  CATEGORYLIST(state, value) {
    state.categoryList = value;
  },
  GETBANNERLIST(state, value) {
    state.bannerList = value;
  },
  GETFLOORLIST(state, value) {
    state.floorList = value;
  },
};
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const getters = {};

export default {
  // vuex模块化，要开启命名空间
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
};
