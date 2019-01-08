<template>
  <div class="list">
    <header class="header"><a href="javascript:;" class="header-left back" @click="back">&lt; 返回</a>{{cat_name}}</header>
    <section class="container">
      <div class="scroll-wrapper" ref="listScroll" :style="scrollWrapperStyle">
        <ul class="list-ul">
          <li v-for="(goods, index) in goodsData" :key="index" @click="toGoods(goods.item_id)">
            <div class="list-item">
              <div class="goods-img"><img :src="goods.image_default_id" :alt="goods.title"></div>
              <div class="goods-info">
                <h3 class="goods-title">{{goods.title}}</h3>
                <div class="item-bottom">
                  <span class="goods-price">￥{{goods.price}}</span>
                  <!-- <span class="goods-rate-num">评价 {{goods.rates}}</span> -->
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      routeParams: null,
      cat_id: '',
      cat_name: '',
      goodsData: [],
      scrollWrapperStyle: {
        height: (window.screen.height - 50) + 'px'
      }
    }
  },
  created () {
    console.log(this.$route)
    this.cat_id = this.$route.query.catId
    this.cat_name = this.$route.query.catName
    this.$ajax.get('http://localhost:3000/items', {
      params: {
        catId: this.cat_id
      }
    }).then((res) => {
      this.goodsData = res.data
      console.log(this.goodsData)
      this.$nextTick(() => {
        this.updated()
        this.listScroll = new BScroll(this.$refs.listScroll, {
          click: true
        })
        console.log(this.listScroll)
      })
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    toGoods (id) {
      this.$router.push({
        path: 'detail',
        query: {
          itemId: id,
          catName: this.cat_name
        }
      })
    },
    updated () {
      // 滚动条图片未加载完成时高度计算问题
      let img = this.$refs.listScroll.getElementsByTagName('img')
      let count = 0
      let length = img.length
      if (length) {
        let timer = setInterval(() => {
          if (count === length) {
            this.listScroll.refresh()
            clearInterval(timer)
          } else if (img[count].complete) {
            count++
          }
        }, 100)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  .container {
    position: relative;
    .scroll-wrapper {
      height: 100%;
      position: absolute;
    }
  }
  .list-ul {
    li {
      background: #fff;
      margin-bottom: 5px;
      padding: 10px;
    }
  }
  .list-item {
    display: flex;
    .goods-img {
      flex: 0 0 110px;
      width: 110px;
      margin-right: 20px;
      img {
        width: 100%;
      }
    }
    .goods-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding: 10px 0;
      .goods-title {
        color: #333;
        font-size: 14px;
        margin-bottom: 6px;
        line-height: 22px;
      }
      .goods-tags {
        margin-bottom: 12px;
        .tag {
          font-size: 12px;
          border: 1px solid #ccc;
          padding: 0 3px;
        }
      }
      .item-bottom {
        display: flex;
        width: 100%;
      }
      .goods-price {
        color: red;
        font-size: 16px;
        width: 100%;
        text-align: right;
      }
      .goods-rate-num {
        flex: 0 0 80px;
        width: 80px;
        color: #aaa;
        font-size: 12px;
        text-align: right;
      }
    }
  }
}
</style>
