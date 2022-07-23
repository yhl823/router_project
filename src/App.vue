<template>
  <div id="app">
    <div
      id="nav"
      v-if="isShow"
    >
      <!-- 声明式导航 -->
      <router-link to="/">首页</router-link> |
      <!-- to 相当于herf -->
      <router-link to="/about">关于</router-link>|
      <!-- 动态匹配路由，params是/方式传参 -->
      <router-link :to="{name:'user',params:{id:1}}">User1</router-link>|
      <router-link :to="{name:'user',params:{id:2}}">User2</router-link>|
      <!-- 动态匹配路由，query是？方式传参 -->
      <router-link :to="{name:'page',query:{id:1,title:'one'}}">page1</router-link>|
      <router-link :to="{name:'notes'}">笔记</router-link>|
      <router-link :to="{name:'login'}">登录</router-link>|
      <router-link :to="{name:'eaditor'}">编辑</router-link>|
      <router-link :to="{name:'post'}">Post</router-link>|
      <router-link :to="{name:'helloworld'}">欢迎您</router-link>
    </div>
    <router-view />
    <!-- 命名视图，不嵌套一般用于布局 -->
    <router-view name="main"></router-view>
    <router-view name="sideBar"></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  beforeUpdate () {
    const pathPage = ['/practice', '/calendar', '/personnelInfo']
    const path = this.$route.path
    // console.log(path)
    this.isShow = pathPage.indexOf(path) === -1
  }
}
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
