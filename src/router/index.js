import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Block = () => import('@/views/Block.vue')
const BZ = () => import('@/views/BZ.vue')
const Wall = () => import('@/views/Wall.vue')

const routes = [
  {
    path: '/',
    redirect: '/wall/0'
  },
  {
    path: '/wall',
    component: Block,
    redirect: '/wall/0',
    children: [
      {
        path: ':id',
        name: 'Wall',
        component: Wall
      }, {
        path: 'bz',
        name: 'BZ',
        component: BZ
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
