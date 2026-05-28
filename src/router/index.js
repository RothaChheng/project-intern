import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Transfer from '../views/Transfer.vue'
import Transactions from '../views/Transactions.vue'
import Profile from '../views/Profile.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

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
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true}
  },

  {
    path: '/transfer',
    component: Transfer,
    meta: { requiresAuth: true }
  },

  {
    path: '/transactions',
    component: Transactions,
    meta: { requiresAuth: true }
  },

  {
    path: '/profile',
    component: Profile,
    meta: { requiresAuth: true }
  },

  {
    path: '/forgot-password',
    component: ForgotPassword
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//Route Guard

router.beforeEach((to, from, next) => {

  const token = localStorage.getItem('token')

  // Protected route
  if (to.meta.requiresAuth && !token) {

    next('/login')

  }

  // Already logged in
  else if (
    (to.path === '/login' ||
     to.path === '/register')
    && token
  ) {

    next('/dashboard')

  }

  else {

    next()
  }
})

export default router
