<template>
  <div class="layoutBox">
    <h2>笔记</h2>
    <h3>练习js</h3>
  </div>
</template>

<script>
export default {
  name: 'notes',
  data () {
    return {

    }
  },
  methods: {
    arrMap () {
      const arr = [{ name: 'Develop' }, { name: 'Test' }, { name: 'Product' }]
      const arr2 = arr.map((item, index, arr) => {
        if (index === 0) {
          arr[index] = '111'
        } else if (index === 1) {
          arr[index] = '222'
        } else {
          arr[index] = '333'
        }
        return item
      })
      console.log(arr, 'arr')
      console.log(arr2, 'arr2')
    }
  },
  mounted () {
    this.arrMap()
  }
}
</script>

<style lang="less" scoped>
.layoutBox {
  text-align: center;
}
</style>
