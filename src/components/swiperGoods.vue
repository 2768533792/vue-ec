<template>
  <div class="swiper-goods">
    <div class="onepic">
      <a :href="data.href"><img :src="data.img" alt=""></a>
    </div>
    <div class="swiper-goods-bd">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in data.goods" :key="index">
          <div class="img"><img :src="item.image_default_id" alt=""></div>
          <div class="title">{{item.title}}</div>
          <div class="price">{{item.price}}</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-goods {
  background-color: white;
  .onepic {
    img {
        width: 100%;
    }
  }
  .swiper-goods-bd {
    padding: 15px;
    .swiper-slide {
      width: 130px;
      font-size: 12px;
      .img {
        width: 100%;
        height: 130px;
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
        color: red;
      }
    }
  }
}
</style>
