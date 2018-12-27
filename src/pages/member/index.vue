<template>
  <div class="member">
    <section class="container">
      <div class="member-top">
        <div class="avatar"><img :src="avatar" :alt="username" @click.stop="uploadHeadImg"></div>
        <input type="file" accept="image/*" class="dn" @change="handleFile" ref="fileInput">
        <div class="name">{{username}}</div>
      </div>
      <div class="member-list">
        <router-link to="/member/order" class="member-item">
          <div><i class="iconfont icon-dingdan"></i> 我的订单</div>
          <i class="iconfont icon-jiantou"></i>
        </router-link>
        <router-link to="/member/info" class="member-item">
          <div><i class="iconfont icon-xinxi"></i> 个人信息</div>
          <i class="iconfont icon-jiantou"></i>
        </router-link>
        <router-link to="/member/address" class="member-item">
          <div><i class="iconfont icon-shezhi"></i> 收货地址</div>
          <i class="iconfont icon-jiantou"></i>
        </router-link>
        <router-link to="/member/set" class="member-item">
          <div><i class="iconfont icon-shezhi"></i> 设置</div>
          <i class="iconfont icon-jiantou"></i>
        </router-link>
        <div class="member-item">
          <div><i class="iconfont icon-tuichu"></i> 退出</div>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatar: require('@/assets/images/avatar.jpg'),
      username: '青溪'
    }
  },
  methods: {
    uploadHeadImg () {
      this.$refs.fileInput.click()
    },
    handleFile () {
      alert('换头像吗？')
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
  .member-top {
    position: relative;
    margin-bottom: 10px;
    padding: 50px 0;
    background: green;
    text-align: center;
    color: white;
    .avatar {
      margin-bottom: 15px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid white;
      }
    }
    .name {
      color: white;
    }
    .login-out {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .member-list {
    .member-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2px;
      padding: 10px;
      line-height: 24px;
      background: white;
      > div {
        i {
          color: green;
        }
      }
      .icon-jiantou {
        color: #ccc;
      }
    }
  }
}
</style>
