import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue' 
import Login from '../views/Login.vue' 
import Songs from '../views/Songs.vue' 
import CreateSong from '../views/CreateSong.vue' 
import ViewSong from '../views/ViewSong.vue' 
import EditSong from '../views/EditSong.vue' 
import Blogs from '../views/Blogs.vue' 

Vue.use(VueRouter)

const routes = [
  //預設首頁
  {
    path: '*',
    redirect: 'root'
  },

  // views/Home.vue
  {
    path: '/',
    name: 'root',
    component: Home  // from "src/views/Home.vue"
    // component/HelloWorld.vue 先進入 views/Home.vue 匯出名稱為 component "Home"
    // "Home" 再進入 router/index.js 和 'root' 這個路由名稱合併在一起
  },

  // views/Register.vue
  {
    path: '/register',
    name: 'register',
    component: Register //views -> Register.vue(檔案名稱)
  },

  // views/Login.vue
  {
    path: '/login',
    name: 'login',
    component: Login // views/Login.vue(檔案名稱)
  },

  //###################Song Part#####################//

  // views/Songs.vue
  {
    path: '/songs',
    name: 'songs',
    component: Songs // views/Songs.vue(檔案名稱)
  },

  // views/CreateSong.vue
  {
    path: '/songs/create',
    name: 'songs-create',
    component: CreateSong  // views/CreateSong.vue(檔案名稱)
  },

  // views/EditSong.vue
  {
    path: '/songs/:songId/edit',
    name: 'songs-edit',
    component: EditSong  // views/EditSong.vue(檔案名稱)
  },

  // views/ViewSong.vue
  {
    path: '/songs/:songId',
    name: 'song',
    component: ViewSong // views/ViewSong.vue(檔案名稱)
  },


  //###################Blog Part#####################//  
  
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },

  //##################Landing Page##################//
  {
    path: '/landing',
    name: 'landing',
    component: Landing
  },
  

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router