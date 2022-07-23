import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import User from '@/views/user.vue'
Vue.use(VueRouter)

// 解决点击左侧出现报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: Home,
      main: () => import('@/views/main'),
      sideBar: () => import('@/views/sideBar')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    // 路由之间传值
    // 第一种方式
    // props: true,
    // 第二种props函数方式
    props: (route) => ({
      id: route.params.id,
      title: route.query.title
    })
  },
  {
    // 笔记页面
    path: '/notes',
    name: 'notes',
    component: () => import('@/views/notes')
  }, {
    // 登录页面
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/page',
    name: 'page',
    // 按需加载 懒加载
    component: () => import('@/views/page'),
    // 路由起别名,没啥用
    alias: '/aaa',
    children: [{
      path: '/childone',
      component: () => import('@/views/childone')
    }]
  }, {
    path: '/eaditor',
    name: 'eaditor',
    component: () => import('@/views/eaditor')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('@/views/post')
  },
  {
    // demo_parctive页面
    path: '/practice',
    name: 'practice',
    component: () => import('@/components/practice'),
    children: [
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import('@/components/calendar')
      },
      {
        name: 'personnelInfo',
        path: '/personnelInfo',
        component: () => import('@/components/personnelInfo')
      }
    ]
  },
  // 日历

  {
    // 没有路由进这个
    path: '*',
    component: () => import('@/views/404')
  }
]

const router = new VueRouter({
  // 开启history/hash模式
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
