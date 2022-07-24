<template>
  <el-dialog title="修改信息" :visible.sync='dialogFormVisible'>
  <el-form >
    <el-form-item
        v-for="(item,key,index) in currentUserInfo || {}"
        :key="index"
        :label=" key === 'address' ? '地址'
        : key === 'city' ? '市区'
        : key === 'date' ? '日期'
        : key === 'name' ? '姓名'
        : key === 'province' ? '省份':'ID'"
        :label-width="formLabelWidth">
        <el-input
          :readonly="key === 'id'"
          v-model="currentUserInfo[key]"
          autocomplete="off">
        </el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="closeEdit">取消</el-button>
    <el-button type="primary" @click="preservationEdit">确定</el-button>
  </div>
</el-dialog>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
      formLabelWidth: '120px'
      // editComplete: ''
    }
  },
  computed: {
    // 官方解释 在严格模式使用vuex时候,在属于vuex的state上使用v-model会抛出错误 需要用以下写法
    dialogFormVisible: {
      get () {
        return this.$store.state.dialogFormVisible
      },
      set () {
        this.$store.commit('DIALOG_FORM_VISIBLE')
      }
    },
    currentUserInfo: {
      get () {
        return this.$store.state.currentUserInfo
      }
    },
    editComplete () {
      return this.currentUserInfo
    }
    // ...mapState({
    //   currentUserInfo: 'currentUserInfo'
    // })
  },
  methods: {
    // 弹出框显示
    closeEdit () {
      this.$store.commit('DIALOG_FORM_VISIBLE')
    },
    /*
    * 保存
    * */
    preservationEdit () {
      this.$store.commit('DIALOG_FORM_VISIBLE', { editComplete: this.editComplete, edit: true })
    }
  }
  // watch: {
  //   currentUserInfo: {
  //     deep: true,
  //     handler (newValue) {
  //       this.editComplete = newValue
  //     }
  //   }
  // }
}
</script>

<style lang="scss" >

</style>
