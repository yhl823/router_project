<template>
  <el-container class="layout-container">
    <!-- 左侧菜单区域 -->
    <el-aside :width="isCollapse ? '70px' : '200px'">
      <div class="logo-container">
        <span>
          <img
            src="../assets/icon/long.png"
            alt=""
          >
        </span>
        <h1>First project</h1>
      </div>

      <el-menu
        background-color="rgba(48, 65, 86)"
        text-color="rgba(191, 203, 217)"
        active-text-color="rgba(255,255,255)"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/calendar">
          <i class="iconfont icon-rili1 iconStyle"></i>
          <span slot="title">日历</span>
        </el-menu-item>
        <el-menu-item
          index="3"
          disabled
        >
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="/personnelInfo">
          <i class="iconfont icon-tianjiayonghutianchong iconStyle"></i>
          <span slot="title">人员信息</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <!-- 顶部top菜单 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color='#e7eaee'
          text-color='#000033'
          @select="handleSelect"
        >
          <!-- 顶部折叠按钮 -->
          <i
            :class="isCollapse ? 'iconfont icon-rigthFold' :'iconfont icon-leftFold'"
            @click="handleFold"
          ></i>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">待办</template>
            <el-menu-item index="2-1">待办1</el-menu-item>
            <el-menu-item index="2-2">待办2</el-menu-item>
            <el-menu-item index="2-3">待办3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item
            index="3"
            disabled
          >消息中心</el-menu-item>
          <el-menu-item
            index="4"
            @click="handleHome"
          >
            首页
          </el-menu-item>
        </el-menu>

      </el-header>
      <!-- 主体内容 -->
      <el-main>
        <!-- tabs -->
        <el-tabs
          class="tabs"
          v-model='editableTabsValue'
          type="card"
          editable
        >
          <el-tab-pane
            class="tabsItem"
            :key="item.name"
            v-for="(item) in editableTabs"
            :label="item.title"
            :name="item.name"
          >
          </el-tab-pane>
          <router-view></router-view>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'practice',
  data () {
    return {
      activeIndex: '', // 高亮显示
      isCollapse: false,
      editableTabsValue: '',
      editableTabs: [],
      tabIndex: 2
    }
  },
  // 监听路由变化
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.editableTabsValue = to.name
    })
  },
  created () {
    this.routes.forEach((item) => {
      this.editableTabs.push({ title: item.name, name: item.name })
    })

    // this.setFor()
    // this.setArr()
    // this.objAssign()
    // this.arrFind()
    // this.fn(10).then((res) => { // promise
    //   console.log(res, 'promise测试')
    // })
  },
  watch: {
    editableTabsValue (newPath) {
      newPath && this.$router.push(newPath)
    },
    $route (newPath) {
      this.editableTabsValue = newPath.name
    }
  },
  computed: {
    // 获取当前路由的子路由
    routes () {
      const routes = this.$router.options.routes
      console.log(routes)
      const route = this.$route.matched
      // console.log(route)
      // const arr = []
      // routes.forEach(item => {
      //   route.forEach(item2 => {
      //     if (item.name === item2.name) {
      //       arr.push(...item.children)
      //     }
      //   })
      // })
      // console.log(arr)

      // important
      const temp = []
      const arr = route.map((item) => item.name)
      routes.forEach(item => arr.includes(item.name) && temp.push(...item.children))
      return temp
      // return arr
    }
  },
  methods: {
    /**
     * 返回home页面
     */
    handleHome () {
      this.$router.push('home')
    },
    // 顶部菜单
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    // 左侧菜单
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 顶部折叠按钮
    handleFold () {
      this.isCollapse = !this.isCollapse
    },
    /**
     * promise测试
     */
    fn (num) {
      // promise用来返回异步的结果  正确结果resolve() 错误结果 reject()
      // promise本身是同步的会在 主线程中执行，具体代码的执行顺序要看promise里面的是同步还是异步
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num + 2)
        }, 1000)
      })
    },
    setFor () {
      // set 每个属性都是唯一，所以可以用来去重 set是对象，自身有forEach
      const arr = [1, 5, 1, 2, 2]
      const arr2 = []
      const list = new Set(arr)
      list.forEach((item) => arr2.push(item))
      console.log(arr2)
    },
    setArr () {
      const arr = [{ a: '1' }, { b: '2' }, { b: '2' }, { c: '3' }, { a: '1' }]
      // 数组包对象，去重强制把数组内对象转为基本数据类型字符串，set去重
      // const list = new Set(arr.map(item => JSON.stringify(item)))
      // arr = []
      // list.forEach(item => {
      //   arr.push(JSON.parse(item))
      // })
      // console.log(arr)

      // 循环数组中对象的key，进行比较 去重判断obj中有没有数组中对象的key，没有就push，有就跳过
      const arr2 = []
      const obj = {}
      arr.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (!obj[key]) {
            obj[key] = true
            arr2.push(item)
          }
        })
      })
      console.log(arr2, '----------')
    },

    objAssign () {
      // 对象合并assign方法
      const obj = { a: '1', b: [{ c: 2 }], ppp: '888' }
      const obj2 = { ppp: '999' }
      console.log(Object.assign(obj, obj2))
    },
    arrFind () {
      // 数组find方法返回 数组中第一个的对象（find方法只会返回第一个值
      const array1 = [5, 12, { a: '1' }, 130, 44]
      const found = array1.find((element) => {
        if (element instanceof Object === true) {
          // typeof(element) === "object"
          return element
        }
      })
      console.log(found)
    }
  }
}
</script>

<style lang="less">
html,
body,
#app {
  height: 100% !important;
}
// element 布局
.layout-container {
  height: 100%;
}
.el-header {
  background-color: #e7eaee;
  color: #333;
}

.el-aside {
  background-color: rgba(48, 65, 86);
  color: #333;
  // text-align: center;
}

.el-main {
  background-color: #fff;
  color: #333;
}

// element 顶部菜单
.el-menu-demo {
  position: relative;
  display: flex; /*父元素设置flex属性*/
  justify-content: center; /*水平主轴居中*/
  align-items: center; /*垂直交叉轴居中*/
}
.icon-leftFold,
.icon-rigthFold {
  position: absolute;
  left: 0;
}
// element 左侧菜单
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.iconStyle {
  display: inline-block;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
}
.logo-container {
  display: flex; /*父元素设置flex属性*/
  justify-content: center; /*水平主轴居中*/
  align-items: center; /*垂直交叉轴居中*/
  margin: 20px 0;
  height: 45px;
  width: 200px;
  h1 {
    color: #fff;
    padding-left: 10px;
  }
  span {
    height: 100%;
    img {
      height: 100%;
    }
  }
}

// 右侧主体内容
.tabsItem {
  margin-bottom: 0px;
  // border: 1px solid #fff;
  // box-shadow: 0px -1px 0px 0px #333, /*上边阴影  红色*/ -1px 0px 0px 0px #333,
  //   /*左边阴影  绿色*/ 1px 0px 0px 0px #333,
  //   /*右边阴影  蓝色*/ 0px 1px 0px 0px #333; /*下边阴影  黄色*/
}
.el-tabs__header {
  margin: 0;
}
</style>>
