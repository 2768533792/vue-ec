<template>
  <div class="address">
    <header class="header">
      <a href="javascript:;" class="back" @click="back"><i class="iconfont icon-fanhui"></i></a>
      收货地址
      <router-link class="btn-add" :to="{name: 'addressEdit', params: {addressId: newEdit}}"><i class="iconfont icon-Group-"></i>添加</router-link>
    </header>
    <section class="container address-container">
      <div class="address-item" v-for="(item, index) in addressData" :key="index">
        <div class="top">
          <div>
            <span class="tag" v-show="item.isDefault">默认</span>
            <span>{{item.name}}</span>
            <span>{{item.phone}}</span>
          </div>
          <div class="op">
            <a href="javascript:;" class="btn btn-edit" @click.prevent="goEdit(item.id)"><i class="iconfont icon-bianji"></i></a>
            <a href="javascript:;" class="btn btn-del"><i class="iconfont icon-shanchu"></i></a>
          </div>
        </div>
        <div class="address-text">{{item.address}}</div>
      </div>
    </section>
  </div>
</template>

<script>
const NEW = -1 // 新建收货地址

export default {
  data () {
    return {
      addressData: [
        {
          id: 1,
          isDefault: true,
          name: '青溪',
          phone: '17521125067',
          address: '上海市长宁区协和路787号D南六楼琢本网络科技有限公司'
        },
        {
          id: 2,
          isDefault: false,
          name: '陈幼萱',
          phone: '13812193221',
          address: '无锡市惠山区'
        },
        {
          id: 3,
          isDefault: false,
          name: '陈歆颜',
          phone: '15690998789',
          address: '江西省九江市'
        }
      ],
      newEdit: NEW
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    goEdit (id) {
      this.$router.push({name: 'addressEdit', params: {addressId: id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.address {
  .header {
    position: relative;
    .back {
      position: absolute;
      left: 10px;
      color: #aaa;
    }
    .btn-add {
      position: absolute;
      right: 10px;
      color: #999;
    }
  }
  .address-container {
    .address-item {
      background: white;
      padding: 15px;
      margin: 10px;
      border-radius: 5px;
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        color: #999;
        .op {
          .btn:first-child {
            margin-right: 5px;
          }
        }
      }
      .tag {
        border: 1px solid green;
        border-radius: 2px;
        color: green;
        padding: 0 3px;
      }
      .address-text {
        line-height: 24px;
      }
    }
  }
}
</style>
