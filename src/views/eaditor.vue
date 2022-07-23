<template>
  <div>
    <h2>我是编辑页面</h2>
    <textarea
      cols="30"
      v-model="ipt"
      rows="10"
    ></textarea>
    <button @click="handleipt">添加</button>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
      >{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ipt: '',
      list: []
    }
  },
  methods: {
    handleipt () {
      this.list.push({
        title: this.ipt
      })
      this.ipt = ''
    }
  },
  // 当路由发生变化时调用
  // beforeRouteUpdater (to, from, next) {
  //   next()
  // }

  // 导航离开该组件时调用
  beforeRouteLeave (to, from, next) {
    if (this.ipt) {
      alert('请确认离开')
      next(false)
    } else {
      next()
    }
  }
}
</script>

<style lang="scss" scoped></style>
