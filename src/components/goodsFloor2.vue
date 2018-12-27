<template>
  <div class="goods-floor">
    <div class="goods-floor-bd">
      <div class="list">
        <div class="item" v-for="(item, index) in goods" :key="index">
          <div class="img-wrapper"><img :src="item.image_default_id" :alt="item.title"></div>
          <div class="bottom">
            <p class="title">{{item.title}}</p>
            <p class="price">￥{{item.price}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'goods': Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  // 组件 goodsFloor
  .goods-floor {
    margin-bottom: 15px;
    background-color: white;
    .goods-floor-hd {
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    .goods-floor-bd {
      .list {
        display: flex;
        flex-wrap: wrap;
        .item {
          box-sizing: border-box;
          padding: 0 2% 10px;
          width: 33%;
          .img-wrapper {
            color: #ccc;
            height: 110px;
            width: 100%;
            overflow: hidden;
            border-radius: 5px;
            img {
              width: 100%;
            }
          }
          .bottom {
            padding-top: 5px;
            .title {
              font-size: 15px;
              line-height: 30px;
              height: 30px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            .price {
              color: #ff0000;
            }
          }
        }
      }
    }
  }
</style>
