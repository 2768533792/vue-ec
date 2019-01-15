<template>
  <div class="home">
    <div class="content">
      <div class="search">
        <form action="">
          <input type="text" placeholder="搜索感兴趣的产品">
          <button class="btn-none"><i class="iconfont icon-sousuo"></i></button>
        </form>
      </div>
      <swiper :options="swiperOption" ref="mySwiper" class="banner">
        <swiper-slide><img src="~@/assets/images/ban01.jpg"></swiper-slide>
        <swiper-slide><img src="~@/assets/images/ban02.jpg"></swiper-slide>
        <swiper-slide><img src="~@/assets/images/ban03.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="menus-wrapper">
        <a href="" class="menu-item">
          <div class="icon-wrapper"><i class="icon-menu-1"></i></div>
          <div class="txt">签到有礼</div>
        </a>
        <a href="" class="menu-item">
          <div class="icon-wrapper"><i class="icon-menu-2"></i></div>
          <div class="txt">超值拼团</div>
        </a>
        <a href="" class="menu-item">
          <div class="icon-wrapper"><i class="icon-menu-3"></i></div>
          <div class="txt">全额返券</div>
        </a>
        <a href="" class="menu-item">
          <div class="icon-wrapper"><i class="icon-menu-4"></i></div>
          <div class="txt">新人礼包</div>
        </a>
        <a href="" class="menu-item">
          <div class="icon-wrapper"><i class="icon-menu-5"></i></div>
          <div class="txt">充100送5</div>
        </a>
        <a href="" class="menu-item">
          <div class="icon-wrapper"><i class="icon-menu-6"></i></div>
          <div class="txt">免费试用</div>
        </a>
        <a href="" class="menu-item">
          <div class="icon-wrapper"><i class="icon-menu-7"></i></div>
          <div class="txt">积分商城</div>
        </a>
        <a href="" class="menu-item">
          <div class="icon-wrapper"><i class="icon-menu-8"></i></div>
          <div class="txt">宝宝计划</div>
        </a>
      </div>
      <goods-floor :goods="mustbuy"></goods-floor>
      <seckill :seckill-goods="seckillGoods" v-if="seckillGoods[0]"></seckill>
      <swiper-goods :data="swiperGoods1" v-if="swiperGoods1.goods"></swiper-goods>
      <swiper-goods :data="swiperGoods2" v-if="swiperGoods2.goods"></swiper-goods>
      <swiper-goods :data="swiperGoods3" v-if="swiperGoods3.goods"></swiper-goods>
      <brands></brands>
      <one-pic :pic="adPic01"></one-pic>
      <goods-floor2 :goods="goodsList"></goods-floor2>
    </div>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import goodsFloor from '@/components/goodsFloor'
import seckill from '@/components/seckill'
import onePic from '@/components/onePic'
import swiperGoods from '@/components/swiperGoods'
import brands from '@/components/brands'
import goodsFloor2 from '@/components/goodsFloor2'

export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      mustbuy: [],
      seckillGoods: [],
      swiperGoods1: {
        href: '#1',
        img: require('@/assets/images/ad-pic1.jpg'),
        goods: []
      },
      swiperGoods2: {
        href: '#2',
        img: require('@/assets/images/ad-pic2.jpg'),
        goods: []
      },
      swiperGoods3: {
        href: '#3',
        img: require('@/assets/images/ad-pic3.jpg'),
        goods: []
      },
      adPic01: {
        href: '#4',
        img: require('@/assets/images/ad-pic3.jpg')
      },
      goodsList: []
    }
  },
  created () {
    this.showItems()
  },
  methods: {
    getItems () {
      return this.$ajax.get('http://localhost:3000/items')
    },
    async showItems () {
      console.log('async:')
      let res = await this.getItems()
      if (res.data) {
        const data = res.data
        this.mustbuy = data.slice(10, 14)
        this.seckillGoods[0] = data.slice(15, 18)
        this.seckillGoods[1] = data.slice(19, 22)
        this.seckillGoods[2] = data.slice(23, 26)
        this.swiperGoods1.goods = data.slice(1, 18)
        this.swiperGoods2.goods = data.slice(19, 36)
        this.swiperGoods3.goods = data.slice(37, 50)
        this.goodsList = data.slice(1, 7)
      }
    }
  },
  components: {
    goodsFloor,
    seckill,
    onePic,
    swiperGoods,
    brands,
    goodsFloor2
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/home';
</style>
