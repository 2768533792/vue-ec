<template>
  <div class="detail-show">
    <img :src="img3">
    <img :src="img2">
    <img :src="img1">
  </div>
</template>

<script>
export default {
  data () {
    return {
      img1: require('@/assets/images/goods-pic1.jpg'),
      img2: require('@/assets/images/goods-pic2.jpg'),
      img3: require('@/assets/images/goods-pic3.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-show {
  img {
    max-width: 100%;
  }
}
</style>
