<template>
  <div class="box">
    <h3>Page页面</h3>
    <button @click="goHome">首页</button>
    <p>
      <button @click="goBack">后退</button>
    </p>
    <router-link to="page/childone"
                 class="Nestedtag">嵌套路由</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    const { id, title } = this.$route.query
    console.log(id, title)
    // console.log(this.$router)
  },
  methods: {
    goHome () {
      // 编程式导航
      // this.$router.push('/home')
      // 也可以已对象方式  动态需要name
      this.$router.push({
        name: 'user',
        params: { id: 1 }
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.box{
  text-align: center;
}
.Nestedtag {
  /* 转行内块元素 */
  display: inline-block;
  color: #2c3e50;
  font-size: 18px;
  font-weight: 800;
}
</style>
