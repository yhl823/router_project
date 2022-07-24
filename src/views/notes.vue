<template>
  <div class="layoutBox">
    <h2>笔记</h2>
    <h3>练习js</h3>
  </div>
</template>

<script>
const arr1 = [{ name: 'Develop' }, { name: 'Test' }, { name: 'Product' }]
export default {
  name: 'notes',
  data () {
    return {}
  },
  methods: {
    arrMap (arr, oldValue, newValue) {
      return arr.map((item) => {
        if (item.name === oldValue) {
          return { name: newValue }
        }
        return item
      })
    }
  },
  mounted () {
    // console.log(this.arrMap(arr1, 'Develop', 'Dev'))
    // console.log(arr1)
  }
}
</script>

<style lang="less" scoped>
.layoutBox {
  text-align: center;
}
</style>
