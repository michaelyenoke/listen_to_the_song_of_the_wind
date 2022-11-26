<template>
  
  
  <v-container>
    <v-row class="text-center">
  

      <v-col class="mb-4">

        <h1>  🌳 </h1>
        <h1 class="display-2 font-weight-bold mb-3">
          Register Successfuly
        </h1>

        <p class="subheading font-weight-regular">
          火星成分股
        </p>
      </v-col>

      <v-col cols="12">
        <v-img
          :src="require('../assets/mars_landingpage.jpeg')"
          class="my-3"
          contain
          height="600"
        />
      </v-col>

      <v-col>
        
        <p>該頁將在 <span>{{count}}</span> 秒後自動跳轉 </p>

        <router-link to="/">點擊跳轉</router-link>  

      </v-col>

    </v-row>
  </v-container>


</template>

<script>
  export default {

  data () {
    return {
      count: 6
    }
  },

  methods: {

    // 倒數功能
    countDown() {
      
      // 執行一次，count減1
      
      this.count--  //count-- (減減)
      
      if (this.count === 0) {
        this.$router.push('/')
      }

      // 每秒執行一次
      setTimeout(() => {
        this.countDown()
      }, 1000)

    }
  },

  mounted() {

    this.countDown()

  }  

  }

</script>

<style lang="scss" scoped>
.text-center {
  padding: 120px;
  height: 330px;
}
</style>