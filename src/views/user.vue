<template>
  <div>
    用户页面{{$route.params.id}}
    <p>
      <!-- props传递 可以直接使用 -->
      我是传过来的值{{id}}---{{title}}
    </p>
  </div>
</template>

<script>
export default {
  // watch监听路由变化
  // watch: {
  //   $route (to, from) {
  //     console.log(to)
  //     console.log(from)
  //   }
  // }
  // 钩子函数beforeRouteUpdate也可以监听路由变化
  beforeRouteUpdate (to, from, next) {
    console.log(to.params.id)
    console.log(from.params.id)
    next()
  },
  // 路由传值props传递
  props: ['id', 'title']
}
</script>

<style lang="less" scoped>
</style>
