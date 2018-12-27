<template>
  <div class="list">
    <header class="header"><a href="javascript:;" class="back" @click="back">&lt; 返回</a>列表</header>
    <section class="container">
      <ul class="list-ul">
        <li v-for="(good, index) in goods" :key="index" @click="selectGood(good.id)">
          <div class="list-item">
            <div class="goods-img"><img :src="good.image" :alt="good.title"></div>
            <div class="goods-info">
              <h3 class="goods-title">{{good.title}}</h3>
              <div class="goods-tags">
                <span class="tag" v-for="(tag, index) in good.tags" :key="index">{{tag}}</span>
              </div>
              <div class="item-bottom">
                <span class="goods-price">￥{{good.price}}</span>
                <span class="goods-rate-num">评价 {{good.rates}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import router from '@/router'

export default {
  data () {
    return {
      goods: [
        {
          id: '01',
          title: 'ONLY秋装新品纯棉宽松钉珠装饰针织连衣裙女',
          image: require('@/assets/images/goods-pic1.jpg'),
          tags: ['免邮', '满减', '双11'],
          price: '299.00',
          rates: 65
        },
        {
          id: '02',
          title: '夏季新品欧美风圆领无袖雪纺连衣裙',
          image: require('@/assets/images/goods-pic2.jpg'),
          tags: ['免邮', '满减'],
          price: '199.00',
          rates: 99
        },
        {
          id: '03',
          title: 'etam艾格时尚修身连衣裙',
          image: require('@/assets/images/goods-pic3.jpg'),
          tags: ['免邮', '满减'],
          price: '499.00',
          rates: 4
        },
        {
          id: '04',
          title: '艾格 ETAM 彩色数码印花无袖连衣裙',
          image: require('@/assets/images/goods-pic4.jpg'),
          tags: ['免邮', '满减'],
          price: '399.00',
          rates: 12
        }
      ]
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    selectGood (id) {
      router.push({
        path: 'detail',
        query: {detailId: id}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
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
      width: 100%;
      .goods-title {
        color: #333;
        font-size: 14px;
        margin-bottom: 6px;
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
