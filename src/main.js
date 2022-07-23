import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import _ from 'lodash'

import { Loading } from 'vant'
import 'vant/lib/button/style'

import './assets/icon/iconfont.css'

import {
  Container, Aside, Main, Header, Button, Menu, Submenu, MenuItem,
  RadioGroup, MenuItemGroup, RadioButton, Calendar, Tabs, TabPane, Table,
  TableColumn, Popconfirm, Message, Dialog, Form, FormItem, Input, Select,
  Option
} from 'element-ui'

Vue.prototype._ = _

Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(RadioGroup)
Vue.use(MenuItemGroup)
Vue.use(RadioButton)
Vue.use(Calendar)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popconfirm)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)

Vue.prototype.$message = Message

Vue.prototype.$http = axios
Vue.use(Loading)
Vue.config.productionTip = false

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/notes') {
    // JSON.parse转换为key  value形式
    const user = JSON.parse(localStorage.getItem('user'))
    // const user = localStorage.getItem('user')
    if (user) {
      next()
    } else {
      next('login')
    }
  }
  next()
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
