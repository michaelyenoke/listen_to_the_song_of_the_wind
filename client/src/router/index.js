import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue' 
import Login from '../views/Login.vue' 
import Songs from '../views/Songs.vue' 
import CreateSong from '../views/CreateSong.vue' 
import ViewSong from '../views/ViewSong.vue' 
import EditSong from '../views/EditSong.vue' 


Vue.use(VueRouter)

const routes = [
  //預設首頁
  {
    path: '*',
    redirect: 'root'
  },


  {
    path: '/',
    name: 'root',
    component: Home  // from "src/views/Home.vue"
    // component/HelloWorld.vue 先進入 Home.vue 匯出名稱為 component "Home"
    // "Home" 再進入 router/index.js 和 'root' 這個路由名稱合併在一起
  },

  {
    path: '/register',
    name: 'register',
    component: Register //views -> register
  },
  {
    path: '/login',
    name: 'login',
    component: Login // views
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs // views
  },
  {
    path: '/songs/create',
    name: 'songs-create',
    component: CreateSong  // views
  },
  {
    path: '/songs/:songId/edit',
    name: 'songs-edit',
    component: EditSong  // views
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: ViewSong // views
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router