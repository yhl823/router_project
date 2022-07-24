import Vue from 'vue'
import Vuex from 'vuex'
import { getUser } from '@/api/personnelInfo'

Vue.use(Vuex)

// 存储数据
const state = {
  // 控制对话框显示 编辑
  dialogFormVisible: false,
  // 个人信息列表
  tableData: '',
  // 当前修改个人信息
  currentUserInfo: ''
}

// 同步修改state中数据
const mutations = {
  // 修改当前点击的人员信息
  DIALOG_FORM_VISIBLE (state, value) {
    state.dialogFormVisible = !state.dialogFormVisible
    if (value) {
      state.currentUserInfo = value.editComplete
      if (value.edit) {
        state.tableData = state.tableData.map((item, index) => {
          if (item.id === value.editComplete.id) {
            return value.editComplete
          } else {
            return item
          }
        })
      }
    }
  }
}

// 响应异步动作
const actions = {
  async getUser (context, value) {
    const params = '1'
    const res = await getUser(params)
    if (res) {
      context.state.tableData = res
    }
  }
}

// 格式化数据
const getters = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
