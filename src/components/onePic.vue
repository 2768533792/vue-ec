<template>
  <div class="onepic">
    <a :href="pic.href"><img :src="pic.img" alt=""></a>
  </div>
</template>

<script>
export default {
  props: {
    pic: Object
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.onepic {
  img {
    width: 100%;
  }
}
</style>
