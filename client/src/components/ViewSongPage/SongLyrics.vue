<template>
  <v-layout>

    <v-flex xs12>
      <div>
        {{ song.lyrics }}
      </div>
    </v-flex>
  
  </v-layout>
  
</template>

<script>
export default {
  // props in - 從index.vue引進song資料  
  props: ["song"],
};
</script>