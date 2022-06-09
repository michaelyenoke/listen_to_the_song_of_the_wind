import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeViewRoute from '../views/HomeView.vue'
import RegisterViewRoute from '../views/RegisterView.vue' 
import LoginView from '../views/LoginView.vue' 
import SongsView from '../views/SongsView.vue' 
import CreateSongs from '../views/CreateSongsView.vue' 

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
  },
  {
    path: '/songs',
    name: 'songs',
    component: SongsView
  },
  {
    path: '/songs/create',
    name: 'songscreate',
    component: CreateSongs  // views
  },
  {
    path: '/songs/:songId',
    name: 'songs-song-id',
    component: ViewSongId  
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
