import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Products',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    props: true ,
    component: () => import('../views/EditProduct.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/show/:id',
    name: 'Product',
    props: true , 
    component: () => import('../views/ProductDescription.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
