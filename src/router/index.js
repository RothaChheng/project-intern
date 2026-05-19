import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Transfer from '../views/Transfer.vue'
import Transactions from '../views/Transactions.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
  path: '/transfer',
  component: Transfer
  },
  {
    path: '/transactions',
    component: Transactions
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router