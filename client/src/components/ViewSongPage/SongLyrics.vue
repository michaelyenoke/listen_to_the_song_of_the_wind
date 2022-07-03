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
  props: ["song"],
};
</script>