<template>
  <div class="detail-rates">
    <div class="rate-item" v-for="(item, index) in rates" :key="index">
      <div class="rate-item-hd">
        <span class="rate-user">{{item.user}}</span>
        <span class="rate-time">{{item.time}}</span>
      </div>
      <div class="rate-item-bd">
        {{item.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rates: [
        {
          user: '青溪',
          time: '2018-11-01 16:45:00',
          content: '好评哦！'
        },
        {
          user: '萱宝宝',
          time: '2018-11-01 16:45:00',
          content: '差评！'
        },
        {
          user: '颜宝宝',
          time: '2018-11-01 16:45:00',
          content: '还不错！'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-rates {
  margin: 20px auto;
  width: 92%;
  .rate-item {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    .rate-item-hd {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 12px;
      .rate-user {
        color: #999;
      }
      .rate-time {
        color: #aaa;
      }
    }
    .rate-item-bd {
      color: #666;
    }
  }
}
</style>
