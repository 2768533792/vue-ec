<template>
  <div class="detail">
    <header class="header"><a href="javascript:;" class="header-left back" @click="$router.back(-1)">&lt; 返回</a>商品详情</header>
    <section class="container">
      <div class="swiper-box">
        <swiper :options="swiperOption" class="swiper">
          <swiper-slide v-for="(item, index) in listImages" :key="index">
            <img :src="item">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="goods-info">
        <div class="goods-title">{{goods.title}}</div>
        <div class="goods-subtitle">{{goods.sub_title}}</div>
        <div class="flex" style="line-height: 24px;">
          <div>
            <span class="goods-price"><em class="cur">￥</em>{{goods.price}}</span>
            <span class="mkt-price">市场价：￥{{goods.mkt_price}}</span>
          </div>
          <a href="javascript:;" class="btn-fav" :class="{ 'has-fav' : fav }" @click="collect"><i class="iconfont icon-shoucang"></i> {{ fav ? '已收藏': '收藏'}}</a>
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
          <dd>{{brand}}</dd>
        </dl>
        <dl>
          <dt>分类：</dt>
          <dd>{{catName}}</dd>
        </dl>
        <dl>
          <dt>货号：</dt>
          <dd>{{goods.bn}}</dd>
        </dl>
        <dl>
          <dt>重量：</dt>
          <dd>{{goods.weight}}kg</dd>
        </dl>
      </div>
      <div class="goods-show">
        <ul class="tabs flex">
          <li class="li-tab" v-for="(item, index) in tabsParam" :key="index" @click="toggleTabs(index)" :class="{active: index == nowIndex}">{{item}}</li>
        </ul>
        <div class="divTab" v-show="nowIndex===0">
          <div class="detail-show">
            <img v-for="(item, index) in listImages" :key="index" :src="item">
          </div>
        </div>
        <div class="divTab" v-show="nowIndex===1">
          <detail-rates></detail-rates>
        </div>
        <div class="divTab" v-show="nowIndex===2">
          <div class="detail-params">
            <dl>
              <dt>商品名：</dt>
              <dd>{{goods.title}}</dd>
            </dl>
            <dl>
              <dt>品牌：</dt>
              <dd>{{brand}}</dd>
            </dl>
            <dl>
              <dt>分类：</dt>
              <dd>{{catName}}</dd>
            </dl>
            <dl>
              <dt>货号：</dt>
              <dd>{{goods.bn}}</dd>
            </dl>
            <dl>
              <dt>重量：</dt>
              <dd>{{goods.weight}}kg</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
    <footer class="goods-footer">
      <button class="btn-addcart" @click="addCart">加入购物车</button>
      <button class="btn-fastbuy" @click="fastBuy">立即购买</button>
    </footer>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="200">
      <div class="mask" v-show="maskShow"></div>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="200">
      <cart-modal v-show="cartModalShow" @close="closeCartModal"></cart-modal>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="200">
      <toast v-show="fastBuyShow" msg="正在进入结算..."></toast>
    </transition>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import detailRates from '@/pages/detail/detailRates'
import cartModal from '@/pages/detail/cartModal'
import toast from '@/components/toast'

export default {
  data () {
    return {
      itemId: '',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      tabsParam: ['商品信息', '商品评论', '商品参数'],
      nowIndex: 0,
      fav: 0,
      popShow: 0,
      colors: ['粉红色', '黑色', '灰色', '绿色', '紫色', '橙色'],
      sizes: ['s', 'm', 'l', 'xl', 'xxl'],
      specColor: '',
      specSize: '',
      quantity: 0,
      stock: 9,
      goods: {},
      brand: '',
      catName: '',
      listImages: [],
      cartModalShow: false,
      testShow: false,
      fastBuyShow: false,
      maskShow: false
      // itemDesc: '',
    }
  },
  created () {
    this.itemId = this.$route.query.itemId
    this.catName = this.$route.query.catName
    this.$ajax.get('http://localhost:3000/items', {
      params: {
        itemId: this.itemId
      }
    }).then((res) => {
      this.goods = res.data[0]
      var listImagesData = res.data[0].list_image
      this.listImages = listImagesData.split(',')
      this.getBrand(this.goods.brand_id)
      // this.getItemDesc(this.goods.item_id)
    })
  },
  methods: {
    getBrand (brandId) {
      this.$ajax.get('http://localhost:3000/brand', {
        params: {
          brandId: brandId
        }
      }).then((res) => {
        this.brand = res.data[0].brand_name
      })
    },
    getItemDesc (itemId) {
      this.$ajax.get('http://localhost:3000/itemDesc', {
        params: {
          itemId: itemId
        }
      }).then((res) => {
        this.itemDesc = res.data[0].wap_desc
      })
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
      this.maskShow = true
      this.cartModalShow = true
    },
    fastBuy: function () {
      this.maskShow = true
      this.fastBuyShow = true
    },
    closeCartModal: function () {
      this.cartModalShow = false
      this.maskShow = false
    },
    toCart () {
      this.$router.push({
        path: 'cart'
      })
    },
    closeModal () {
      this.cartModalShow = false
    }
  },
  components: {
    swiper,
    swiperSlide,
    detailRates,
    cartModal,
    toast
  }
}
</script>

<style lang="scss" scoped>
.detail {
  padding-bottom: 44px;
  .pic-wrapper {
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }
  .swiper-box {
    margin-bottom: 10px;
    img {
      width: 100%;
    }
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
    margin-bottom: 10px;
    color: #333;
    font-size: 18px;
  }
  .goods-subtitle {
    margin-bottom: 15px;
    color: #999;
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
  .mkt-price {
    text-decoration: line-through;
    color: #aaa;
    margin-left: 5px;
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
.detail-show {
  img {
    display: block;
    width: 100%;
  }
}
.detail-params {
  margin: 10px auto;
  width: 94%;
  background: #fff;
  dl {
    display: flex;
    line-height: 24px;
    color: #666;
    padding: 5px 10px;
    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
    dt {
      flex: 0 0 22%;
      width: 22%;
      margin-right: 1%;
    }
    dd {
      color: #aaa;
    }
  }
}
</style>
