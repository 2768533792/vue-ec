<template>
  <div class="brands">
    <h4 class="brands-hd">品牌馆</h4>
    <div class="brands-bd">
      <div class="list">
        <div class="item" v-for="(item, index) in brandsData" :key="index" :class="'item'+index">
          <div class="img-wrapper"><img :src="item.image_default_id" :alt="item.brand_name"></div>
          <p class="title">{{item.brand_name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      brandsData: [{
        image_default_id: require('@/assets/images/brand1.jpg')
      },
      {
        image_default_id: require('@/assets/images/brand2.jpg')
      },
      {
        image_default_id: require('@/assets/images/brand3.jpg')
      },
      {
        image_default_id: require('@/assets/images/brand4.jpg')
      },
      {
        image_default_id: require('@/assets/images/brand5.jpg')
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  // 组件 brand
  .brands {
    margin-bottom: 15px;
    background-color: white;
    .brands-hd {
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    .brands-bd {
      padding: 12px;
      .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
          border-radius: 5px;
          width: 114px;
          height: 114px;
          overflow: hidden;
          &.item0 {
            background-color: #e1f0e1;
            width: 189px;
            height: 120px;
            margin-bottom: 5px;
          }
          &.item1 {
            background-color: #f4ead5;
            width: 157px;
            height: 120px;
            margin-bottom: 5px;
          }
          &.item2 {
            background-color: #d6e2f0;
          }
          &.item3 {
            background-color: #e2eae5;
          }
          &.item4 {
            background-color: #e3e2ea;
          }
          .img-wrapper {
            width: 100%;
            img {
              max-width: 100%;
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
