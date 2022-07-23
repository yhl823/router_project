<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-loading
      v-if="loading"
      size="24px"
      type="spinner"
      default="YYY"
      vertical
    ><template>
      获取定位中
      </template>
      <template>{{ timeText }}</template>
    </van-loading>
    </div>
</template>

<script>
export default {
  data () {
    return {
      time: 0,
      loading: true,
      timeText: ''
    }
  },
  mounted () {
    this.loading = true
    this.timer = setInterval(() => {
      // this.time++
      this.timeText = `${this.time++}`
    }, 1000)
  }
}
</script>
