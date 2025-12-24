import { createRouter, createWebHistory } from 'vue-router'
import Home from "/src/views/Home.vue"
import About from "/src/views/About.vue"
import Create from "/src/views/Create.vue"
import Sysinfo from "/src/views/Sysinfo.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/create',
      name: '新建文章',
      component: Create
    },
    {
      path:'/sysinfo',
      name:'系统信息',
      component:Sysinfo
    }

  ],
})

export default router