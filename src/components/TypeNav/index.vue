<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 利用事件委托，mouseenter与mouseleave不冒泡，mouseover与mouseout冒泡 -->
      <div @mouseleave="leave" @mouseenter="enter">
        <h2 class="all">全部商品分类</h2>
        <template>
          <el-collapse-transition>
            <div class="sort" v-show="show">
              <!-- 事件委派 -->
              <div class="all-sort-list2" @click="goSearch">
                <!-- 三级分类数据展示 -->
                <div
                  class="item"
                  v-for="(c1, index) in categoryList"
                  :key="c1.categoryId"
                >
                  <h3
                    @mouseenter="changeIndex(index)"
                    :class="{ cur: currentIndex === index }"
                  >
                    <!-- 自定义属性 -->
                    <a
                      :data-categoryName="c1.categoryName"
                      :data-category1Id="c1.categoryId"
                      >{{ c1.categoryName }}</a
                    >
                  </h3>
                  <!-- 二三级分类展示 -->
                  <div class="item-list clearfix" :style="displayObject(index)">
                    <div
                      class="subitem"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dl class="fore">
                        <dt>
                          <a
                            :data-categoryName="c1.categoryName"
                            :data-category2Id="c2.categoryId"
                            >{{ c2.categoryName }}</a
                          >
                        </dt>
                        <dd>
                          <em
                            v-for="c3 in c2.categoryChild"
                            :key="c3.categoryId"
                          >
                            <a
                              :data-categoryName="c1.categoryName"
                              :data-category3Id="c3.categoryId"
                              >{{ c3.categoryName }}</a
                            >
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-transition>
        </template>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 引入lodash.js（实现函数的防抖与节流）(全部引入)
// import _ from "lodash";
// 按需引入
// import throttle from "lodash/throttle";
import { throttle } from "lodash";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
  mounted() {
    // console.log(this);
    // console.log(_);

    if (this.$route.path != "/home") {
      this.show = false;
    } else this.show = true;
  },
  methods: {
    /* changeIndex(index) {
      console.log(index);
      this.currentIndex = index;
    }, */
    // 实现节流
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leave() {
      if (this.$route.path != "/home") {
        this.show = false;
      }
      this.currentIndex = -1;
    },
    enter() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    displayObject(index) {
      return { display: this.currentIndex === index ? "block" : "none" };
    },
    goSearch(e) {
      // this.$router.push("/search");
      // this.$router.push({ name: "search", query: { id: 1 } });

      // 节点有一个dataset属性，可以获得节点的自定义属性与属性值 ！！注意，自定义属性会自动转换成全部小写的形式
      // console.log(e.target.dataset);
      let { categoryname, category1id, category2id, category3id } =
        e.target.dataset;
      // console.log(categoryname, category1id, category2id, category3id);
      if (categoryname) {
        // 一定要声明变量
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        }
        if (category2id) {
          query.category2Id = category2id;
        }
        if (category3id) {
          query.category3Id = category3id;
        }
        location.query = query;
        // 合并参数
        if (this.$route.params) {
          location.params = this.$route.params;
        }
        this.$router.push(location);
      }
    },
  },
  computed: {
    ...mapState("home", ["categoryList"]),
    /* categoryList() {
      // vuex模块化，注意加小仓库
      return this.$store.state.home.categoryList;
    }, */
  },
};
</script>

<style scoped lang='less'>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409eff;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
      }

      .all-sort-list2 {
        .cur {
          background-color: pink;
        }
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          /*  &:hover {
            .item-list {
              display: block;
            }
          } */
        }
      }
    }
  }
}
</style>