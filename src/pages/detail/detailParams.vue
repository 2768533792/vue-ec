<template>
  <div class="detail-params">
    <dl>
        <dt>商品名</dt>
        <dd>圣罗兰滋润口红</dd>
      </dl>
      <dl>
        <dt>产品型号</dt>
        <dd>52号星星色</dd>
      </dl>
      <dl>
        <dt>功效</dt>
        <dd>补水 保湿 滋润</dd>
      </dl>
      <dl>
        <dt>产地</dt>
        <dd>中国 上海</dd>
      </dl>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.detail-params {
  margin: 10px auto;
  width: 90%;
  background: #fff;
  dl {
    display: flex;
    line-height: 24px;
    color: #666;
    padding: 5px 10px;
    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
    dt {
      width: 26%;
      margin-right: 1%;
    }
    dd {
      color: #aaa;
    }
  }
}
</style>
