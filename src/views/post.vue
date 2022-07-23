<template>
  <div>
    <div v-if="padding">Padding.........</div>
    <div v-if="error">{{error}}</div>
    <div v-if="post">
      <h2>{{post.title}}</h2>
      <h2>{{post.body}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: '',
      error: '',
      padding: false
    }
  },
  // 侦听器
  watch: {
    // 当路由发生变化事 重新调接口获取数据
    $route: 'getPostData'
  },
  // 导航完成之后获取数据
  created () {
    // console.log(this.$http)
    this.getPostData()
  },
  methods: {
    // 调接口
    async getPostData () {
      try {
        // 先设置padding为ture让它显示
        this.padding = true
        const { data } = await this.$http.get('api/post')
        // 接口获取到数据在改为false不显示
        this.padding = false
        this.post = data
      } catch (error) {
        // console.log(error);
        this.error = error.tostring()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
