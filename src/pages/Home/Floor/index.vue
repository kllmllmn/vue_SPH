<template>
  <!--楼层-->
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{ floor.name }}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li
              class="active"
              v-for="(nav, index) in floor.navList"
              :key="index"
            >
              <a :href="nav.url" data-toggle="tab">{{ nav.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="keyword in floor.keywords" :key="keyword">
                  {{ keyword }}
                </li>
              </ul>
              <img :src="floor.imgUrl" />
            </div>
            <div class="floorBanner">
              <!-- element-ui实现轮播图 -->
              <template>
                <el-carousel :interval="4000" type="card" height="200px">
                  <el-carousel-item v-for="item in carouselList" :key="item.id">
                    <!-- <h3 class="medium">{{ 1 }}</h3> -->
                    <img :src="item.imgUrl" />
                  </el-carousel-item>
                </el-carousel>
              </template>

              <!-- <div class="swiper-container" id="floor1Swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="./images/home/floor-1-b01.png" />
                  </div>
                  
                </div>
                
                <div class="swiper-pagination"></div>

                
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div> -->
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div
                class="floor-conver-pit"
                v-for="(list, index) in leftRecommendList"
                :key="index"
              >
                <img :src="list" />
              </div>
              <!-- <div class="floor-conver-pit">
                <img src="./images/home/floor-1-3.png" />
              </div> -->
            </div>
            <div class="split center">
              <img :src="floor.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div
                class="floor-conver-pit"
                v-for="(list, index) in rightRecommendList"
                :key="index"
              >
                <img :src="list" />
              </div>
              <!-- <div class="floor-conver-pit">
                <img src="./images/home/floor-1-6.png" />
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Floor",
  data() {
    return {
      // carouselList: [],
    };
  },
  props: ["floor"],
  /* watch:{
    floor:{
      handler(){
        this.carouselList=this.floor.carouselList
      }
    }
  }, */
  computed: {
    carouselList() {
      return this.floor.carouselList;
    },
    leftRecommendList() {
      return this.floor.recommendList.slice(0, 2);
    },
    rightRecommendList() {
      return this.floor.recommendList.slice(2, 4);
    },
  },
};
</script>

<style scoped lang='less'>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;

            .el-carousel__item img {
              color: #475669;
              font-size: 14px;
              opacity: 0.75;
              line-height: 200px;
              margin: 0;
            }

            .el-carousel__item:nth-child(2n) {
              background-color: #99a9bf;
            }

            .el-carousel__item:nth-child(2n + 1) {
              background-color: #d3dce6;
            }
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>