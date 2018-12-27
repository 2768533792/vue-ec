<template>
  <div class="info">
    <header class="header">
      <a href="javascript:;" class="back" @click="back"><i class="iconfont icon-fanhui"></i></a>
      个人信息
      <span class="btn-edit" @click="edit" v-if="editStatus">完成</span><span class="btn-edit" @click="edit" v-else>编辑</span>
    </header>
    <section class="container info-container">
      <div class="info-list">
        <div class="info-item">
          <div>用户名</div>
          <div class="value">{{info.account}}</div>
        </div>
        <div class="info-item">
          <div>姓名</div>
          <div class="value-edit" v-if="editStatus"><input v-model="info.name"/></div>
          <div class="value" v-else>{{info.name}}</div>
        </div>
        <div class="info-item">
          <div>性别</div>
          <div class="value-edit" v-if="editStatus">
            <select name="sex" v-model="info.sex">
              <option value="0" :selected="{selected: info.sex==0}">保密</option>
              <option value="1" :selected="{selected: info.sex==1}">女</option>
              <option value="2" :selected="{selected: info.sex==2}">男</option>
            </select>
          </div>
          <div class="value" v-else>
            <span v-if="info.sex==0">保密</span>
            <span v-if="info.sex==1">女</span>
            <span v-if="info.sex==2">男</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        account: 'test123',
        name: '青溪',
        sex: 1
      },
      editStatus: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    edit () {
      this.editStatus = !this.editStatus
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  .header {
    position: relative;
    .back {
      position: absolute;
      left: 10px;
      color: #aaa;
    }
    .btn-edit {
      position: absolute;
      right: 10px;
      color: #999;
    }
  }
  .info-container {
    .info-list {
      .info-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2px;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        background: white;
        input {
          text-align: right;
          height: 36px;
          padding: 0 10px;
        }
        .value {
          color: #999;
        }
        .value-edit {
          color: #333;
        }
      }
    }
  }
}
</style>
