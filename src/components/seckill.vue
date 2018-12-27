<template>
  <div class="seckill">
    <h4 class="seckill-hd">
      秒杀
    </h4>
    <div class="seckill-bd">
      <div class="nav-wrapper">
        <a href="javascript:;" @click="navSwitch(0)" :class="{active: navActive==0}">08点场</a>
        <a href="javascript:;" @click="navSwitch(1)" :class="{active: navActive==1}">14点场</a>
        <a href="javascript:;" @click="navSwitch(2)" :class="{active: navActive==2}">20点场</a>
      </div>
      <div class="content-wrapper">
        <div class="" v-show="navActive==0">
          <div class="time-wrapper"></div>
          <div class="goods-list">
            <a href="#" class="goods-item" v-for="(item, index) in seckillGoods[0]" :key="index">
              <div class="img-wrapper"><img :src="item.image_default_id" alt=""></div>
              <div class="title">{{item.title}}</div>
              <div class="price">
                <span class="new">￥{{item.price}}</span>
                <span class="old">￥{{item.mkt_price}}</span>
              </div>
            </a>
          </div>
        </div>
        <div class="" v-show="navActive==1">
          <div class="goods-list">
            <a href="#" class="goods-item" v-for="(item, index) in seckillGoods[1]" :key="index">
              <div class="img-wrapper"><img :src="item.image_default_id" alt=""></div>
              <div class="title">{{item.title}}</div>
              <div class="price">
                <span class="new">￥{{item.price}}</span>
                <span class="old">￥{{item.mkt_price}}</span>
              </div>
            </a>
          </div>
        </div>
        <div class="" v-show="navActive==2">
          <div class="goods-list">
            <a href="#" class="goods-item" v-for="(item, index) in seckillGoods[2]" :key="index">
              <div class="img-wrapper"><img :src="item.image_default_id" alt=""></div>
              <div class="title">{{item.title}}</div>
              <div class="price">
                <span class="new">￥{{item.price}}</span>
                <span class="old">￥{{item.mkt_price}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'seckillGoods': Array
  },
  data () {
    return {
      navActive: 0
    }
  },
  methods: {
    navSwitch (nowIndex) {
      this.navActive = nowIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.seckill {
  margin-bottom: 15px;
  background-color: white;
  .seckill-hd {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 17px;
  }
  .seckill-bd {
    .nav-wrapper {
      display: flex;
      justify-content: space-around;
      height: 32px;
      line-height: 32px;
      background-color: rgba(47, 200, 109, .1);
      a {
        color: #333;
        &.active {
          color: #2fc86d;
        }
      }
    }
    .content-wrapper {
      .goods-list {
        display: flex;
        justify-content: space-between;
        .goods-item {
          box-sizing: border-box;
          padding: 10px 1%;
          width: 33.3%;
          .img-wrapper {
            width: 100%;
            height: 110px;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .title {
            height: 30px;
            line-height: 30px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .price {
            .new {
              color: #ff0000;
              font-size: 15px;
            }
            .old {
              color: #999;
              font-size: 12px;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>
