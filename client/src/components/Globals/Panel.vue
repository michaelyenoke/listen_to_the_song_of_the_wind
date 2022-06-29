<template>
  <v-card max-width="850" class="mx-auto">
    <!--上半部的bar-->
    <v-toolbar color="cyan" dark>
      <!-- props in title name -->
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>

    <!--add button-->
    <slot name="action"></slot>
    <!--add button-->

    <!-- three-line List -->
    <v-list three-line>
      <template>
        <div class="container">
          <v-layout>
            <slot> No slot content defined. </slot>
            <!--<slot name="form">No Content.</slot>-->
          </v-layout>
        </div>
      </template>
    </v-list>
    <!-- three-line List -->
  </v-card>
</template>






<script>
export default {
  props: ["title"],
};
</script>


<style lang="scss" scoped>
</style>