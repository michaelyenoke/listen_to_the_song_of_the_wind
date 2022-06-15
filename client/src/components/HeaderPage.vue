<!--直接送到App.vue-->
<template>
    <div>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center mr-4"></div>
      <v-toolbar-title class="mr-4" >
        <!--<span
          class="home"
          @click="navigateTo({name:'root'})"> 
          BLACKPINK
        </span>-->
        <router-link
          class="home"
          tag="span"
          :to="{
            name:'root'
          }">
          BLACKPINK
          </router-link>

      </v-toolbar-title>
      
      <!--TODO: Implement Me-->
      <v-toolbar-items>
         <v-btn 
         class="home"
         text 
         dark
         @click="navigateTo({name:'songs'})"
         >
          Browse
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items>
    

        

        <v-btn 
          class="home"
          v-if="!$store.state.isUserLoggedIn"
          text 
          dark
          @click="navigateTo({name:'login'})">  
          Log In
        </v-btn>
       
        <!--
        <router-link to="register"> 
        -->
        <!--須先確認有寫進 index.js 的路由(name)中-->
        <v-btn 
          v-if="!$store.state.isUserLoggedIn"
          text 
          dark
          @click="navigateTo({name:'register'})"
          >  
          Sign Up
        </v-btn>

        <v-btn 
        v-if="$store.state.isUserLoggedIn"
        text 
        dark
        @click="logout">
        Log Out
        </v-btn>
        <!--
        </router-link>
        -->
      </v-toolbar-items>
    </v-app-bar>
    <v-container fluid></v-container><!--Removes viewport maximum-width size breakpoints-->
    </div>

</template>

<script>
  export default {
    name: 'HeaderPage',
    methods:{
      navigateTo(router){
        this.$router.push(router)
      },
      logout () {
         this.$store.dispatch("setToken", null)
         this.$store.dispatch("setUser", null)
         // todo : redirect to homepage
         this.$router.push({
              name:'root'
        })
      }
    },
    data: () => ({
    })
  }
</script>

<style scoped>
.home {
  cursor:pointer;
}

.home:hover {
  color: #E9E;
}
</style>
<!--
<template>
  <v-app>
    //part01:navigation-drawer
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 聽風的歌 </v-list-item-title>
          <v-list-item-subtitle>
            Listen to the song of the wind
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    //part02:app-bar
    <v-app-bar
      app
      color="primary"
      dark
      src="https://cw1.tw/CW/images/article/C1438323247010.jpg"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>


      //part03
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title> 
            <span
                class="home"
                @click="navigateTo({name:'home'})">
                    Tempura - 聽天婦羅的歌
            </span> 
        </v-app-bar-title>
      
      <v-spacer></v-spacer>


        //Insert Part
        // v-if="!$store.state.inUserLoggedIn"   -> 如果不是true,後面"Log In"就會一直出現
        // -> only display when user is not log in
        
        <v-btn 
          v-if="!$store.state.isUserLoggedIn"  
          text 
          dark
          @click="navigateTo({name:'login'})">  
          Log In
        </v-btn>

        <v-btn 
          v-if="!$store.state.isUserLoggedIn"
          text 
          dark
          @click="navigateTo({name:'register'})">  
          Sign Up
        </v-btn>




        <v-btn 
          v-if="$store.state.isUserLoggedIn"
          text 
          dark
          @click="logout">
          Log Out
        </v-btn>





      <v-btn icon
        >//放大鏡圖示
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon
        >//心型圖示
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon
        >//三點選項圖示
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>




    </v-app-bar>

    //part04
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
    name: 'HeaderPage',
    methods:{
      navigateTo(router){
        this.$router.push(router)
      },
      logout () {
         this.$store.dispatch("setToken", null)
         this.$store.dispatch("setUser", null)
        // todo : redirect to homepage
         this.$router.push({name:'home'})
      }
    },
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-clipboard-list-outline", to: "/" },
      { title: "About", icon: "mdi-information", to: "/about" },
      { title: "Register", icon: "mdi-account-plus-outline", to: "/register" },
      { title: "Songs", icon: "mdi-music", to: "/songs" },
    ],
  }),
};
</script>

<style scoped>
.home {
  cursor:pointer;
}

.home:hover {
  color: #E9E;
}
</style>
-->