
<!--這個頁面會直接被 App.vue 內給 import -->
<!-- SPA 的框架部分 -->

<template>


  <v-app>


    <!-- v-navigation-drawer:開始 -->
    <!-- blackpink 那個頁面沒有 drawer 的部分 -->
    <v-navigation-drawer v-model="drawer" app>
      
      <!-- drawer : 上半部 -->
      <v-list-item>
        <v-list-item-content>
        
          <v-list-item-title 
            class="home"
            @click="navigateTo({ name: 'root' })"
            > 
              聽風的歌 
          </v-list-item-title>
          
          <v-list-item-subtitle
            class="home"
            @click="navigateTo({ name: 'root' })"          
          >
              Listen to the song of the wind
          </v-list-item-subtitle>
        
        </v-list-item-content>
      </v-list-item>


      <v-divider></v-divider>

    
      <v-list dense nav>
        <v-list-item 
          v-for="item in items" 
          :key="item.title" 
          :to="item.to" link
        >
        
             <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>      
      </v-list>

    </v-navigation-drawer>
    <!-- v-navigation-drawer:結束 ---> 


    <!-- v-app-bar 開始 -->
    <v-app-bar
      app
      color="yellow"
      dark
      src="https://cw1.tw/CW/images/article/C1438323247010.jpg"
      prominent
    >

      <!-- v-app-bar 霧面色彩效果 -->
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <!-- v-app-bar drawer 功能 -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- v-app-bar:title -->
      <v-app-bar-title>
        <span 
          class="home" 
          @click="navigateTo({ name: 'root' })"
        >
          Code On Mars
        </span>
      </v-app-bar-title>

      <!-- v-app-bar: space -->
      <v-spacer></v-spacer>

      <!-- button:導航到Log In頁面(在未登入狀態時)-->
      <!-- vuex : 登入與登出狀態 -->
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        dark
        @click="navigateTo({ name: 'login' })"
      >
        Log In
      </v-btn>

      <!-- button:導航到 register 頁面-->
      <!-- vuex : 登入與登出狀態 -->
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        dark
        @click="navigateTo({ name: 'register' })"
      >
        Sign Up
      </v-btn>

      <!-- button : 在登入狀態下才會出現的登出鍵 -->
      <!-- vuex : 登入與登出狀態,會進入 components/store/index.js內查看 state 中的 isUserLoggedIn -->
      <v-btn 
        v-if="$store.state.isUserLoggedIn" 
        text 
        dark 
        @click="logout"
      >
        Log Out
      </v-btn>

      <!-- icon : 放大鏡 -->
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <!-- icon : 愛心 -->
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <!-- icon : 三點 -->
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>
    <!-- v-app-bar 結束-->


    <!--導入個別頁面的內容,移到 App.vue 內寫, 由App.vue去組成整個網頁, 而不是把內容在這邊先整合   
    <v-main>
      <router-view></router-view>
    </v-main>
    --> 


  </v-app>
</template>



<script>
export default {
  
  // 本頁面匯出名稱
  name: "HeaderPage",
  
  // js功能
  methods: {
    
    // 頁面導航
    navigateTo(router) {
      this.$router.push(router);
    },

    // logout button : 按下後將 token 和 user 設定為 null
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      // todo : redirect to homepage
      this.$router.push({ name: "root" });
    },

  },
  
  // data part
  data: () => ({
    // 
    drawer: null,
    // drawer 內的選單
    items: [
      { title: "Register", icon: "mdi-account-plus-outline", to: "/register" },
      { title: "Songs", icon: "mdi-music", to: "/songs" },
      
    ],
  }),

};
</script>



<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #e9e;
}
</style>