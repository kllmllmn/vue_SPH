<template>
  <div>
    <!-- 接收query参数 -->
    <!-- 我是search，搜索的是{{ $route.query.value }} -->
    <!-- 接收params参数 -->
    我是search，搜索的是{{ $route.params.value }}
    <TypeNav></TypeNav>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
</style>