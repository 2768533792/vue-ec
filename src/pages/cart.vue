<template>
  <div class="cart">
    <header class="header">
      <router-link :to="{path: '/'}" class="header-left" ><i class="icon-back"></i></router-link>
      购物车
      <span class="btn-edit" @click="edit" v-if="editStatus">完成</span>
      <span class="btn-edit" @click="edit" v-else>编辑</span>
    </header>
    <section class="container container-cart">
      <div class="cart-list">
        <div class="cart-item" v-for="(item, index) in list" :key="index">
          <div class="checkbox"><input type="checkbox" v-model="item.check" @click="checkItem" /></div>
          <div class="imgbox"><img :src="item.img" alt="item.title"></div>
          <div class="infobox">
            <h4 class="clamp2">{{item.title}}</h4>
            <div class="infobox-bottom">
              <div class="price">{{item.price}}</div>
              <div class="show-num" v-if="editStatus">X {{item.num}}</div>
              <div class="control-num" v-else>
                <span class="btn sub" @click="sub(index)">-</span>
                <span class="num">{{item.num}}</span>
                <span class="btn add" @click="add(index)">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-footer">
        <div class="l">
          <span class="checkbox"><input type="checkbox" v-model="allCheck" @click="all" /> 全选</span>
          <span v-show="!editStatus">合计：{{totalPrice}}</span>
        </div>
        <div class="r">
          <a href="javascript:;" class="btn btn-del" v-if="editStatus" @click="del">删除</a>
          <a href="javascript:;" class="btn btn-settle" v-else>结算</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          img: require('@/assets/images/category-img.jpg'),
          title: '安多可多效活肌修护精华液-6号针剂安瓶 类肉毒素 回春瓶 能改善熟龄肌 紧致',
          price: 899.00,
          num: 1,
          check: false,
          stock: 9
        },
        {
          img: require('@/assets/images/goods-pic2.jpg'),
          title: '安多可温和洁面泡沫-125ml 适合油性Vigene「消减内脏脂肪」组合体验装及混合性皮肤 不紧绷',
          price: 499.00,
          num: 1,
          check: false,
          stock: 9
        },
        {
          img: require('@/assets/images/goods-pic3.jpg'),
          title: 'Vigene「消减内脏脂肪」组合体验装Vigene「消减内脏脂肪」组合体验装',
          price: 29.00,
          num: 1,
          check: false,
          stock: 9
        }
      ],
      totalPrice: 0,
      allCheck: false,
      editStatus: false
    }
  },
  methods: {
    sub (index) {
      let item = this.list[index]
      if (item.num <= 0) return
      item.num--
      this.$nextTick(() => {
        if (item.check) this.FnTotalPrice()
      })
    },
    add (index) {
      let item = this.list[index]
      if (item.num >= item.stock) return
      item.num++
      this.$nextTick(() => {
        if (item.check) this.FnTotalPrice()
      })
    },
    FnTotalPrice () {
      var checkedItem = this.list.filter(function (x) {
        return x.check
      })
      var p = checkedItem.map((item) => {
        return item.price * item.num
      })
      this.totalPrice = p.length ? p.reduce((a, b) => a + b) : 0
    },
    setCheckItem (setBoolean) {
      this.list.forEach(function (e) {
        e.check = setBoolean
      })
    },
    all () {
      this.$nextTick(() => {
        this.allCheck ? this.setCheckItem(true) : this.setCheckItem(false)
        if (!this.editStatus) this.FnTotalPrice()
      })
    },
    FnCheckItem (item) {
      return item.check
    },
    checkItem () {
      this.$nextTick(() => {
        this.allCheck = this.list.every(this.FnCheckItem)
        if (!this.editStatus) this.FnTotalPrice()
      })
    },
    edit () {
      this.editStatus = !this.editStatus
    },
    del () {
      this.$nextTick(() => {
        this.list = this.list.filter(function (x) {
          return !x.check
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  header {
    position: relative;
    .btn-edit {
      position: absolute;
      right: 10px;
      color: #999;
    }
  }
  .container-cart {
    background: #fff;
    .cart-list {
      padding: 10px;
      .cart-item {
        display: flex;
        margin-bottom: 20px;
        .checkbox {
          width: 10%;
          align-self: center;
        }
        .imgbox {
          width: 27%;
          margin-right: 3%;
          img {
            width: 100%;
          }
        }
        .infobox {
          width: 60%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h4 {
            width: 100%;
            line-height: 20px;
            height: 40px;
            margin-bottom: 8px;
            color: #666;
          }
          .infobox-bottom {
            display: flex;
            justify-content: space-between;
            line-height: 26px;
            .price {
              color: red;
              line-height: 26px;
            }
            .control-num {
              display: flex;
              height: 24px;
              line-height: 24px;
              border: 1px solid #ccc;
              .btn {
                width: 24px;
                height: 24px;
                line-height: 24px;
                color: #666;
                font-size: 14px;
                text-align: center;
              }
              .num {
                margin: 0 10px;
              }
            }
          }
        }
      }
    }
    .cart-footer {
      display: flex;
      position: fixed;
      justify-content: space-between;
      bottom: 0;
      width: 100%;
      height: 44px;
      line-height: 44px;
      background: #fff;
      .l {
        padding: 0 10px;
        .checkbox {
          margin-right: 10px;
        }
      }
      .btn {
        display: inline-block;
        padding: 0 30px;
      }
      .btn-settle {
        background: red;
        color: #fff;
      }
      .btn-del {
        background: #aaa;
        color: #fff;
      }
    }
  }
}
</style>
