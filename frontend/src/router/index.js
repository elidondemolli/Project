import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import EditPost from '../views/EditPost.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import SearchPost from '../views/SearchPost.vue'
import ContactUs from '../views/ContactUs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')){
        next();
      } else {
        next("/");
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')){
        next();
      } else {
        next("/");
      }
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/add-post',
    name: 'Add-post',
    component: AddPost,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')){
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: '/edit-post/:id',
    name: 'Edit-post',
    component: EditPost,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')){
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/search',
    name: 'SearchPost',
    component: SearchPost,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')){
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default router
