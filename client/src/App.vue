<template>
  <v-app id="inspire">

      <!--part01-->
      <v-navigation-drawer v-model="drawer" app>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 聽風的歌  </v-list-item-title>
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

      <!--part02-->
      <v-app-bar
      app
      color=primary
      dark
      src="earth.jpeg"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
     
      <!--part03-->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>  風の歌を聴け </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon><!--放大鏡圖示-->
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon><!--心型圖示-->
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon><!--三點選項圖示-->
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      </v-app-bar>

      <!--part04-->
      <v-main>
        <router-view></router-view>
      </v-main>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-clipboard-list-outline", to: "/" },
      { title: "About", icon: "mdi-information", to: "/about" },
      { title: "Register", icon: "mdi-account-plus-outline", to: "/register" },
    ],
  }),
};
</script>