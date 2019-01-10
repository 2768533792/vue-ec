<template>
  <div class="transition">
    <button @click="show = !show">Toggle show</button>
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="200">
      <p v-if="show">今天学习Vue transition过渡和动画</p>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
