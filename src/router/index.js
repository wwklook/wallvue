import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const BZ = () => import('@/views/BZ.vue')
const Home = () => import('@/views/Home.vue')

const routes = [
  {
    path: '/',
    redirect: '/category/0'
  },
  {
    path: '/category',
    redirect: '/category/0'
  },
  {
    path: '/category/:id',
    name: 'Home',
    component: Home
  }, {
    path: '/bz',
    name: 'BZ',
    component: BZ
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
