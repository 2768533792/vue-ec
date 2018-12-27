<template>
  <div class="address-edit">
    <header class="header">
      <a href="javascript:;" class="back" @click="back"><i class="iconfont icon-fanhui"></i></a>
      编辑
    </header>
    <section class="container">
      <form action="">
        <div class="form-item">
          <span>姓名：</span><input type="text" class="ipt-txt" placeholder="请输入你的姓名">
        </div>
        <div class="form-item">
          <span>手机：</span><input type="text" class="ipt-txt" placeholder="请输入你的手机号">
        </div>
        <div class="form-item">
          <span>地址：</span><input type="text" class="ipt-txt" placeholder="请输入你的地址">
        </div>
        <div class="form-item">
          <span>设为默认：</span>
          <div>
            <input id="set_default-0" class="ipt-radio" type="radio" v-model="set_default" value="0"><label for="set_default-0">否</label>
            <input id="set_default-1" class="ipt-radio" type="radio" v-model="set_default" value="1"><label for="set_default-1">是</label>
          </div>
        </div>
        <button type="submit">保存</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  props: ['addressId'],
  data () {
    return {
      set_default: '0'
    }
  },
  created () {
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.address-edit {
  form {
    .form-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3px;
      padding: 10px;
      height: 32px;
      line-height: 32px;
      background: white;
      input.ipt-txt {
        height: 100%;
        text-align: right;
        padding: 0 10px;
      }
      .ipt-radio {
        margin-left: 20px;
        margin-right: 5px;
      }
    }
    button[type=submit] {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 44px;
      line-height: 44px;
      text-align: center;
      border: 0;
      background: green;
      color: #fff;
    }
  }
}
</style>
