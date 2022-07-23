<template>
  <div>
    <input type="text"
           v-model="account">
    <input type="password"
           v-model="password">
    <button @click="handleClick">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    handleClick () {
      setTimeout(() => {
        const user = {
          user: this.account
        }
        localStorage.setItem('user', JSON.stringify(user))
        this.$router.push('notes')
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
