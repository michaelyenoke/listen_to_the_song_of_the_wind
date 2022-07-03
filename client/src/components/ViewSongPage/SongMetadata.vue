<template>
  <v-layout>

    <!-- album metadata -->  
    <v-flex xs6>
      
      <div class="song-id">
        {{ song.id }}
      </div>

      <div class="song-title">
        {{ song.title }}
      </div>

      <div class="song-artist">
        {{ song.artist }}
      </div>

      <div class="song-genre">
        {{ song.genre }}
      </div>

      <!-- EDIT button -->   
      <v-btn
        dark
        class="cyan"
        @click="
            navigateTo({
            // route = name + params  
                name: 'songs-edit',
                params: {
                    songId: song.id,
                    },
            })"
        >
        Edit
      </v-btn>

    </v-flex>

<!-- router 另外一種寫法,不用透過 method:
        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'song-edit', 
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>
-->



    <!-- album img -->
    <v-flex xs6>
      <img class="album-image" v-bind:src="song.albumImageUrl" />
      <br />
      {{ song.album }}
    </v-flex>


  </v-layout>
</template>

<script>
export default {
  // props in - 從index.vue引進song資料    
  props: ["song"],
  // button "EDIT" router
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  }
};
</script>