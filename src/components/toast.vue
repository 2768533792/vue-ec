<template>
  <div class="toast modal-white-bg">{{msg}}{{n}}s</div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data () {
    return {
      n: 10
    }
  },
  created () {
    let int = setInterval(() => {
      this.n--
    }, 1000)
    setTimeout(() => {
      clearInterval(int)
    }, this.n * 1000)
  }
}
</script>

<style lang="scss" scoped>
.toast {
  padding: 15px;
}
</style>
