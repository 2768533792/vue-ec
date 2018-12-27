<template>
  <div class="order">
    <header class="header">
      <a href="javascript:;" class="back" @click="back"><i class="iconfont icon-fanhui"></i></a>
      我的订单
    </header>
    <section class="container order-container">
      <div class="order-nav" ref="navscroll">
        <ul>
          <li :class="{active: orderType==0}" @click="getOrder(0)">全部</li>
          <li :class="{active: orderType==1}" @click="getOrder(1)">待付款</li>
          <li :class="{active: orderType==2}" @click="getOrder(2)">待发货</li>
          <li :class="{active: orderType==3}" @click="getOrder(3)">待收货</li>
          <li :class="{active: orderType==4}" @click="getOrder(4)">待评价</li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="order-content" ref="contentscroll">
        <div>
          <div v-if="noOrder(orderType)" class="no-data">暂无数据</div>
          <ul v-else>
            <li v-for="(item, index) in order" :key="index" v-show="needShow(item.type)" class="order-item">
              <div class="img"><img :src="item.image" :alt="item.title"></div>
              <div class="info">
                <h4>{{item.title}}</h4>
                <p class="price">
                  {{item.price}}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      order: [],
      orderType: 0
    }
  },
  created () {
    this.$nextTick(() => {
      if (!this.navScroll) {
        this.navScroll = new BScroll(this.$refs.navscroll, {
          startX: 0,
          scrollX: true,
          scrollY: false,
          click: true
        })
      }
      if (!this.contentScroll) {
        this.contentScroll = new BScroll(this.$refs.contentscroll, {
          click: true
        })
      } else {
        this.contentScroll.refresh()
      }
    })
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    getOrder (index) {
      this.orderType = index
      this.$nextTick(() => {
        this.contentScroll.refresh()
        this.contentScroll.scrollTo(0, 0)
      })
    },
    needShow (type) {
      if (this.orderType === 0) {
        return true
      } else {
        return type === this.orderType
      }
    },
    noOrder (orderType) {
      if (this.orderType === 0) return false
      return this.order.every(function (e) {
        return e.type !== orderType
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.line {
  margin-top: 40px;
  height: 10px;
  background: #f5f5f5;
}
.order {
  .header {
    position: fixed;
    top: 0;
    z-index: 9;
    width: 100%;
    .back {
      position: absolute;
      left: 10px;
      color: #aaa;
    }
  }
  .order-container {
    position: relative;
    top: 40px;
    .order-nav {
      position: fixed;
      top: 40px;
      z-index: 9;
      width: 100%;
      height: 41px;
      line-height: 40px;
      overflow: hidden;
      background: white;
      ul {
        display: flex;
        width: 600px;
        li {
          width: 120px;
          font-size: 16px;
          text-align: center;
          &.active {
            color: green;
          }
        }
      }
    }
    .order-content {
      width: 100%;
      height: 500px;
      overflow: hidden;
      ul {
        padding: 0 12px;
        li {
          display: flex;
          box-sizing: border-box;
          margin-bottom: 10px;
          padding: 10px;
          width: 100%;
          line-height: 24px;
          background: white;
          font-size: 14px;
          .img {
            flex: 0 0 100px;
            width: 100px;
            margin-right: 10px;
            img {
              width: 100%;
            }
          }
          .info {
          }
          .price {
            color: red;
          }
        }
      }
    }
    .no-data {
      padding: 50px;
      text-align: center;
      color: #aaa;
    }
  }
}
</style>
