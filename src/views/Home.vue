<template>
  <div class="home">
    <div class="navigation">
      <button @click="handleJump">跳转到parctice</button>
    </div>
  </div>
</template>

<script>
import { getdepartment } from '@/api/home'
export default {
  name: 'Home',
  data () {
    return {
      msg: '首页相关信息',
      qqq: ['mes'],
      obj1: { a: '1', e: '0' },
      obj2: { b: '2' }
    }
  },
  created () {
    this.getdepartment()
    this.jsPractice()
  },
  methods: {
    // js练习
    jsPractice () {
      const objAggregate = Object.assign({}, this.obj1, this.obj2, this.qqq)
      // const objAggregate = { ...this.obj1 } // 与上效果一样
      // console.log(objAggregate)
    },
    // 跳转练习页
    handleJump () {
      console.log('跳转练习页')
      this.$router.push('practice')
    },
    async getdepartment () {
      const data = { id: 1 }
      const res = await getdepartment(data)
      // console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  display: flex;/*父元素设置flex属性*/
  justify-content: center;/*水平主轴居中*/
  align-items: center;/*垂直交叉轴居中*/
  height: 500px;
  background-color: rgb(196, 199, 203);
  .navigation{
    display: flex;
    justify-content: center;/*水平主轴居中*/
    align-items: center;/*垂直交叉轴居中*/
    width: 200px;
    height: 200px;
    background-color: rgb(242, 237, 237);
}
}
</style>
