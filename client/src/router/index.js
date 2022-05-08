import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeViewRoute from '../views/HomeView.vue'
import RegisterViewRoute from '../views/RegisterView.vue' 
import LoginView from '../views/LoginView.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeViewRoute  
  },
  // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/register',
    name: 'register',
    component: RegisterViewRoute
  },
  {
    path:'/login',
    name:'login',
    component:LoginView
  }
]

const router = new VueRouter({
  routes
})

export default router
