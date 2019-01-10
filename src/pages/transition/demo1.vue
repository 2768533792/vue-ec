<template>
  <div class="transition">
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
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
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
