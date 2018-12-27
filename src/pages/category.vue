<template>
  <div class="category">
    <header class="header">分类</header>
    <section class="container category-container">
      <div class="left" ref="left">
        <ul>
          <li v-for="(item, index) in left" :key="index" :class="{current:currentIndex===index}" @click="selectMenu(index, $event)"><span class="left-item">{{item}}</span></li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul>
          <li class="right-item right-item-hook" v-for="(item, index) in right" :key="index">
            <h1 class="title">{{item.name}}</h1>
            <ul class="third-menu">
              <li v-for="(subitem, index) in item.content" :key="index">
                <router-link :to="{ name: 'list', params: { listId: subitem.id}}">
                  <img :src="subitem.url" :alt="subitem.text">
                  <div class="category-tag-name">{{subitem.text}}</div>
                </router-link>
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
      left: ['女装', '男装', '女包'],
      right: [
        {
          name: '女装',
          content: [
            {
              id: '01',
              url: require('@/assets/images/category-img.jpg'),
              text: '连衣裙'
            },
            {
              id: '02',
              url: require('@/assets/images/category-img.jpg'),
              text: '外套'
            },
            {
              id: '03',
              url: require('@/assets/images/category-img.jpg'),
              text: '羽绒服'
            },
            {
              id: '04',
              url: require('@/assets/images/category-img.jpg'),
              text: '羊绒衫'
            }
          ]
        },
        {
          name: '男装',
          content: [
            {
              id: '05',
              url: require('@/assets/images/category-img.jpg'),
              text: '衬衫'
            },
            {
              id: '06',
              url: require('@/assets/images/category-img.jpg'),
              text: '裤装'
            },
            {
              id: '07',
              url: require('@/assets/images/category-img.jpg'),
              text: '针织衫'
            },
            {
              id: '08',
              url: require('@/assets/images/category-img.jpg'),
              text: '棉衣'
            },
            {
              id: '09',
              url: require('@/assets/images/category-img.jpg'),
              text: '西服'
            }
          ]
        },
        {
          name: '女包',
          content: [
            {
              id: '10',
              url: require('@/assets/images/category-img.jpg'),
              text: '双肩包'
            },
            {
              id: '11',
              url: require('@/assets/images/category-img.jpg'),
              text: '单肩包'
            },
            {
              id: '12',
              url: require('@/assets/images/category-img.jpg'),
              text: '手提包'
            },
            {
              id: '13',
              url: require('@/assets/images/category-img.jpg'),
              text: '小钱包'
            }
          ]
        }
      ],
      listHeight: [],
      scrollY: 0 // 实时获取当前Y轴高度
      // clickEvent: false
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
      this._getHeight()
    })
  },
  computed: {
    // 计算属性
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        // 当height2不存在的时候，或者落在height和height2之间的时候，直接返回当前索引
        // >=height,是因为一开始this.scrollY=0,height=0
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          return i
        }
      }
      // 如果this.listHeight没有的话，就返回0
      return 0
    }
  },
  methods: {
    selectMenu (index, event) {
      if (!event._constructed) {
        return
      }
      let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
      let el = rightItems[index]
      this.rights.scrollToElement(el, 300)
    },
    _initScroll () {
      this.lefts = new BScroll(this.$refs.left, {
        click: true
      })
      this.rights = new BScroll(this.$refs.right, {
        click: true,
        probeType: 3 // 探针的效果，实时获取滚动高度
      })
      // secondMenuScroll对象监听事件，实时获取位置pos.y
      this.rights.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _getHeight () {
      let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectItem (index, event) {
      // this.clickEvent = true
      // 在better-scroll的派发事件的event和普通浏览器的点击事件event有个属性区别_constructed,浏览器原生点击事件没有_constructed所以当浏览器监听到该属性的时候return掉
      if (!event._constructed) {
        return false
      } else {
        let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
        let el = rightItems[index]
        this.rights.scrollToElement(el, 300)
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
  bottom: 46px;
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
        // justify-content: center;
        width: 94%;
        margin: 0 auto;
        flex-wrap: wrap;
        li {
          box-sizing: border-box;
          padding: 5px 1%;
          width: 33.3%;
          > a {
            display: block;
            width: 100%;
            line-height: 24px;
            text-align: center;
          }
        }
      }
    }

  }
}
</style>
