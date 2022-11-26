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
          height="200"
        />
      </v-col>




    </v-row>
  </v-container>


</template>

<script>
  export default {

    data: () => ({
 
    }),
  }
</script>

<style lang="scss" scoped>
.text-center {
  padding: 120px;
  height: 330px;
}
</style>