<template>
  <div class="footer-wrapper">
    <footer class="footer-menu">
      <router-link :to="{name: 'home'}" class="menu-item">
        <i class="menu-icon1"></i>
        <div class="txt">首页</div>
      </router-link>
      <router-link :to="{name: 'category'}" class="menu-item">
        <i class="menu-icon2"></i>
        <div class="txt">分类</div>
      </router-link>
      <div class="menu-item">
      </div>
      <router-link :to="{name: 'cart'}" class="menu-item">
        <i class="menu-icon3"></i>
        <div class="txt">购物车</div>
      </router-link>
      <router-link :to="{name: 'member'}" class="menu-item">
        <i class="menu-icon4"></i>
        <div class="txt">我的</div>
      </router-link>
    </footer>
    <router-link :to="{name: 'category'}" class="middle">
      <i class="menu-icon-middle"></i>
      <div class="txt">发现</div>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 50px;
  padding-top: 6px;
  background-color: #f0f5f8;
  .footer-menu {
    border-top: 1px solid #dfe3e6;
    display: flex;
    justify-content: space-around;
    background-color: white;
    height: 50px;
    .menu-item {
      text-align: center;
      padding-top: 8px;
      i {
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        height: 28px;
      }
      .menu-icon1 {
        width: 20px;
        height: 22px;
        background-image: url(~@/assets/images/menu-icon1.png)
      }
      .menu-icon2 {
        width: 22px;
        height: 22px;
        background-image: url(~@/assets/images/menu-icon2.png)
      }
      .menu-icon3 {
        width: 23px;
        height: 22px;
        background-image: url(~@/assets/images/menu-icon3.png)
      }
      .menu-icon4 {
        width: 18px;
        height: 22px;
        background-image: url(~@/assets/images/menu-icon4.png)
      }
      .txt {
        color: #999;
        font-size: 10px;
      }
      &.router-link-exact-active {
        .menu-icon1 {
          background-image: url(~@/assets/images/menu-icon1-on.png)
        }
        .menu-icon2 {
          background-image: url(~@/assets/images/menu-icon2-on.png)
        }
        .menu-icon3 {
          background-image: url(~@/assets/images/menu-icon3-on.png)
        }
        .menu-icon4 {
          background-image: url(~@/assets/images/menu-icon4-on.png)
        }
        .txt {
          color: #333;
        }
      }
    }
  }
  .middle {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: url(~@/assets/images/menu-icon-bg.png) top center no-repeat;
    background-size: contain;
    width: 58px;
    height: 58px;
    z-index: 3;
    text-align: center;
    padding-top: 12px;
    .menu-icon-middle {
      display: inline-block;
      width: 28px;
      height: 29px;
      background-image: url(~@/assets/images/menu-icon-middle.png);
      background-size: contain;
      margin-bottom: 9px;
    }
    .txt {
      color: #999;
      font-size: 10px;
    }
  }
}
</style>
