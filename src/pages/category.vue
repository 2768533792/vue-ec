<template>
  <div class="category">
    <header class="header">分类</header>
    <section class="container category-container" v-show="categoryData">
      <div class="left" ref="left">
        <ul>
          <li v-for="(item, index) in categoryData" :key="index" :class="{current:catIndex===index}" @click="levelOneFn(index)"><span class="left-item">{{item.cat_name}}</span></li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul>
          <li v-if="categoryData[catIndex].children" class="right-item right-item-hook" v-for="(item, index) in categoryData[catIndex].children" :key="index">
            <h1 class="title">{{item.cat_name}}</h1>
            <ul class="third-menu" v-if="item.children">
              <li v-for="(subItem, index) in item.children" :key="index" @click="toList(subItem.cat_id, subItem.cat_name)">
                <div class="cat-logo-wrapper"><img :src="subItem.cat_logo" :alt="subItem.cat_name"></div>
                <div class="category-tag-name">{{subItem.cat_name}}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <footer-menu></footer-menu>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
  data () {
    return {
      categoryData: [
        {
          children: []
        }
      ],
      catIndex: 0,
      catLogoDefault: require('@/assets/images/cat_logo_default.jpg')
    }
  },
  created () {
    this.$ajax.get('http://localhost:3000/category/').then((res) => {
      const data = res.data
      // 过滤出一级分类
      let levelOne = data.filter((item) => {
        return item.level === '1'
      })
      // 过滤出二级分类
      levelOne.forEach((e) => {
        let levelTwo = data.filter((item) => {
          return item.parent_id === e.cat_id
        })
        e.children = levelTwo
        levelTwo.forEach((f) => {
          let levelThree = data.filter((item) => {
            return item.parent_id === f.cat_id
          })
          levelThree.forEach((g) => {
            if (!g.cat_logo) {
              g.cat_logo = this.catLogoDefault
            }
          })
          f.children = levelThree
        })
      })
      this.categoryData = levelOne
      console.log(this.categoryData)
      this.$nextTick(() => {
        this.updated()
        this._initScroll()
      })
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    toList (catId, catName) {
      this.$router.push({
        // path: `/list/${catId}`
        path: 'list',
        query: {
          catId: catId,
          catName: catName
        }
      })
    },
    _initScroll () {
      this.lefts = new BScroll(this.$refs.left, {
        click: true
      })
      this.rights = new BScroll(this.$refs.right, {
        click: true
      })
    },
    // 2019-1-7新增
    levelOneFn (index) {
      this.catIndex = index
      this.$nextTick(() => {
        this.rights.refresh()
        this.updated()
        this.rights.scrollToElement(this.$refs.right, 300)
      })
    },
    updated () {
      // 滚动条图片未加载完成时高度计算问题
      let img = this.$refs.right.getElementsByTagName('img')
      let count = 0
      let length = img.length
      if (length) {
        let timer = setInterval(() => {
          if (count === length) {
            this.rights.refresh()
            clearInterval(timer)
          } else if (img[count].complete) {
            count++
          }
        }, 100)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.category-container {
  display: flex;
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 56px;
  padding-top: 0;
  overflow: hidden;
  background: #f5f5f5;
  .left {
    flex: 0 0 100px;
    width: 100px;
    background: #fff;
    padding-top: 10px;
    margin-right: 10px;
    & > ul {
      li {
        line-height: 40px;
        font-size: 14px;
        color: #666;
        text-align: center;
        padding: 10px 5px;
        border-left: 2px solid transparent;
        &.current {
          background: rgba(47,200,109,0.08);
          color: green;
          border-left-color: green;
        }
      }
    }
  }
  .right {
    flex: 1;
    .right-item {
      background: #fff;
      border-radius: 5px;
      margin-bottom: 10px;
      .title {
        margin: 0 auto;
        width: 94%;
        height: 40px;
        line-height: 40px;
        color: #999;
      }
      .third-menu {
        display: flex;
        flex-wrap: wrap;
        width: 94%;
        margin: 0 auto;
        flex-wrap: wrap;
        li {
          box-sizing: border-box;
          padding: 5px 1%;
          width: 33.3%;
          line-height: 24px;
          text-align: center;
          .cat-logo-wrapper {
            width: 100%;
            height: 50px;
            overflow: hidden;
            border-radius: 3px;
            margin-bottom: 5px;
            position: relative;
            background-color: #e2e2e2;
            img {
              width: 100%;
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
            }
          }
        }
      }
    }

  }
}
</style>
