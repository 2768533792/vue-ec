<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatar: require('@/assets/images/avatar.jpg'),
      username: '青溪'
    }
  }
}
</script>
