<template>
  <div class="detail">
    <header class="header"><a href="javascript:;" class="back" @click="back">&lt; 返回</a>商品详情</header>
    <section class="container">
      <div class="swiper-box">
        <swiper :option="swiperOption" class="swiper">
          <swiper-slide v-for="(item, index) in goodsPic" :key="index">
            <img :src="item.src" :alt="item.title">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="goods-info">
        <div class="goods-title">艾格 ETAM 彩色数码印花无袖连衣裙</div>
        <div class="flex">
          <span class="goods-price"><em class="cur">￥</em>199.00</span>
          <a href="#" class="btn-fav" :class="{ 'has-fav' : fav }" @click="collect"><i class="iconfont icon-shoucang"></i> {{ fav ? '已收藏': '收藏'}}</a>
        </div>
      </div>
      <div class="checked-params flex">
        <span class="label">已选</span>
        <span class="content" @click="showSpec"><span>{{specColor || '颜色'}}</span><span>{{specSize || '尺寸'}}</span><span>{{quantity}}件</span> <i class="iconfont icon-jiantou"></i></span>
      </div>
      <transition name="fade">
        <div class="mask" v-show="popShow" @click="popClose"></div>
      </transition>
      <transition>
        <div class="spec-wrapper" v-show="popShow">
          <span class="pop-close" @click="popClose"><i class="iconfont icon-icon"></i></span>
          <div>请选择商品规格</div>
          <div class="spec-list">
            <div class="spec-item">
              <div class="spec-label">颜色</div>
              <div class="spec-content tag-group">
                <span class="spec-tag" :class="{ checked : color === specColor }" v-for="(color, index) in colors" @click="selectColor" :key="index">{{color}}</span>
              </div>
            </div>
            <div class="spec-item">
              <div class="spec-label">尺码</div>
              <div class="spec-content tag-group">
                <span class="spec-tag" :class="{ checked : size === specSize }" v-for="(size, index) in sizes" @click="selectSize" :key="index">{{size}}</span>
              </div>
            </div>
            <div class="spec-item">
              <div class="spec-label">数量</div>
              <div class="spec-content">
                <div class="quantity-wrapper">
                  <span class="reduce" :class="{ gray: quantity <= 0 }" @click="reduce">-</span>
                  <input class="num" type="num" v-model="quantity" @change="quantityInput">
                  <span class="increase" :class="{ gray: quantity >= stock }" @click="increase">+</span>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-confirm" @click="popClose">确定</div>
        </div>
      </transition>
      <div class="goods-desc flex">
        <dl>
          <dt>品牌：</dt>
          <dd>圣罗兰</dd>
        </dl>
        <dl>
          <dt>分类：</dt>
          <dd>面霜</dd>
        </dl>
        <dl>
          <dt>功效：</dt>
          <dd>补水 保湿 滋润</dd>
        </dl>
        <dl>
          <dt>产地：</dt>
          <dd>中国 上海</dd>
        </dl>
      </div>
      <div class="goods-show">
        <ul class="tabs flex">
          <li class="li-tab" v-for="(item, index) in tabsParam" :key="index" @click="toggleTabs(index)" :class="{active: index == nowIndex}">{{item}}</li>
        </ul>
        <div class="divTab" v-show="nowIndex===0">
          <detail-show></detail-show>
        </div>
        <div class="divTab" v-show="nowIndex===1">
          <detail-rates></detail-rates>
        </div>
        <div class="divTab" v-show="nowIndex===2">
          <detail-params></detail-params>
        </div>
      </div>
    </section>
    <footer class="goods-footer">
      <button class="btn-addcart" @click="addCart">加入购物车</button>
      <button class="btn-fastbuy" @click="fastBuy">立即购买</button>
    </footer>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// 引入子组件
import detailShow from '@/pages/detail/detailShow'
import detailRates from '@/pages/detail/detailRates'
import detailParams from '@/pages/detail/detailParams'

export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      goodsPic: [
        {
          title: '图1',
          src: require('@/assets/images/goods-pic1.jpg')
        },
        {
          title: '图2',
          src: require('@/assets/images/goods-pic2.jpg')
        },
        {
          title: '图3',
          src: require('@/assets/images/goods-pic3.jpg')
        }
      ],
      tabsParam: ['商品信息', '商品评论', '商品参数'],
      nowIndex: 0,
      fav: 0,
      popShow: 0,
      colors: ['粉红色', '黑色', '灰色', '绿色', '紫色', '橙色'],
      sizes: ['s', 'm', 'l', 'xl', 'xxl'],
      specColor: '',
      specSize: '',
      quantity: 0,
      stock: 9
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    toggleTabs: function (index) {
      this.nowIndex = index
    },
    collect: function () {
      this.fav = !this.fav
    },
    showSpec: function () {
      document.body.setAttribute('class', 'body_overflow')
      this.popShow = 1
    },
    popClose: function () {
      document.body.removeAttribute('class')
      this.popShow = 0
    },
    selectColor: function (e) {
      this.specColor = e.target.innerText
    },
    selectSize: function (e) {
      this.specSize = e.target.innerText
    },
    reduce: function () {
      if (this.quantity > 0) this.quantity--
    },
    increase: function () {
      if (this.quantity < this.stock) this.quantity++
    },
    quantityInput: function (e) {
      var val = e.target.value
      if (val > this.stock) {
        alert('数量不能大于库存')
        this.quantity = this.stock
      } else if (val < 0) {
        alert('数量不能小于0')
        this.quantity = 0
      } else {
        this.quantity = val
      }
    },
    addCart: function () {
      alert('加入购物车成功')
    },
    fastBuy: function () {
      alert('正在进入结算页面…')
    }
  },
  components: {
    swiper,
    swiperSlide,
    detailShow,
    detailRates,
    detailParams
  }
}
</script>

<style lang="scss" scoped>
.detail {
  padding-bottom: 44px;
  .swiper-box {
    margin-bottom: 15px;
  }
  .goods-info {
    margin-bottom: 15px;
    padding: 0 12px;
    .flex {
      justify-content: space-between;
    }
  }
  .btn-fav {
    .iconfont {
      color: #ccc;
    }
    &.has-fav {
      .iconfont {
        color: red;
      }
    }
  }
  .goods-title {
    margin-bottom: 15px;
    color: #333;
    font-size: 18px;
  }
  .goods-price {
    color: red;
    font-size: 24px;
    .cur {
      color: #666;
      font-size: 14px;
      font-style: normal;
    }
  }
  .checked-params {
    padding: 12px;
    justify-content: space-between;
    background: #fff;
    .label {
      color: #999;
    }
    .iconfont {
      color: #aaa;
    }
    .content {
      > span {
        margin-right: 5px;
      }
    }
  }
  .goods-desc {
    padding: 12px;
    flex-wrap: wrap;
    dl {
      display: flex;
      width: 48%;
      margin-bottom: 5px;
      padding-right: 2%;
      font-size: 14px;
      dt {
        color: #666;
      }
      dd {
        color: #999;
      }
    }
  }
  .goods-show {
    .tabs {
      li {
        width: 33.3%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-top: 1px solid #ddd;
        color: #666;
        &.active {
          color: #2fc86d;
          border-top-color: #2fc86d;
        }
      }
    }
  }
  .goods-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    button {
      width: 50%;
      height: 44px;
      border: 0;
      background: #fff;
      color: #666;
      font-size: 16px;
      &.btn-fastbuy {
        background: #2fc86d;
        color: #fff;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.spec-list {
  margin-top: 20px;
  .spec-item {
    margin-bottom: 20px;
    .spec-label {
      // margin-right: 10px;
      margin-bottom: 10px;
      color: #999;
    }
    .spec-content {
      span {
        display: inline-block;
      }
    }
    .spec-tag {
      border: 1px solid #aaa;
      color: #666;
      padding: 5px 10px;
      margin-right: 5px;
      margin-bottom: 5px;
      &.checked {
        color: red;
        border-color: red;
      }
    }
  }
}
.btn-confirm {
  position: fixed;
  bottom: 0;
  margin: 0 -10px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #fff;
  border-top: 1px solid #2fc86d;
  color: #2fc86d;
}
.quantity-wrapper {
  display: inline-block;
  border: 1px solid #ddd;
  > span {
    padding: 5px;
  }
  .num {
    border: 0;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 5px;
    max-width: 40px;
    min-width: 30px;
    text-align: center;
  }
  .gray {
    color: #aaa;
  }
}
</style>
