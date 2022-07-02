
<!--拉單式網站架構 網站的主要框架 這個就是SPA那個單一網頁-->

<template>
  <v-app>
    <!-- SPA 的框架部分 -->
    <header-page />


    <!-- SPA 的內容部分 -->
    <!--導入個別頁面內容,兩個都寫會和HeaderPage.vue內的寫入重複 -->
    <!--個別頁面 從components進入到views, 然後透過router/index.js建立路由-->
    <!-- 透過 <v-main> 和 <router-view> 標籤, 加上路由的變化引導頁面的變化 -->
    <v-main>
      <router-view></router-view>
    </v-main>
  
   


  </v-app>
</template>

<script>
import HeaderPage from "./components/Globals/HeaderPage";

export default {
  name: "App",
  components: {
    HeaderPage,
  },

  data: () => ({
    //
  }),
};
</script>

<!--globaly vue sytle-->
<style>
/*<!--影響這一頁的spa的style-->*/
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -450px;
}
</style>