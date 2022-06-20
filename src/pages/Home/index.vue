<template>
  <div>
    我是home

    <TypeNav></TypeNav>

    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor
      v-for="(item, index) in floorList"
      :key="item.id"
      :floor="item"
    ></Floor>

    <Brand></Brand>
  </div>
</template>

<script>
//  TypeNav是全局组件
//  引入其他静态组件（子组件，不是路由组件）
import Brand from "./Brand";
import Floor from "./Floor";
import Like from "./Like";
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState("home", ["floorList"]),
  },
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style>
</style>