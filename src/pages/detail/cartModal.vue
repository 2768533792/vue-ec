<template>
  <div class="cart-modal modal-white-bg">
    <div class="msg">加入购物车成功！</div>
    <div class="btns">
      <a href="javascript:;" class="b-r" @click="toCart">进入购物车</a>
      <a href="javascript:;" @click="closeModal">继续购物</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contentShow: false
    }
  },
  methods: {
    toCart () {
      this.$router.push({
        path: 'cart'
      })
    },
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-modal {
  .msg {
    text-align: center;
    padding: 15px;
    color: #666;
  }
  .btns {
    display: flex;
    border-top: 1px solid #ddd;
    a {
      box-sizing: border-box;
      width: 50%;
      min-width: 100px;
      display: block;
      text-align: center;
      height: 28px;
      line-height: 28px;
      white-space: nowrap;
      padding: 0 10px;
    }
    .b-r {
      border-right: 1px solid #ddd;
    }
  }
}
</style>
