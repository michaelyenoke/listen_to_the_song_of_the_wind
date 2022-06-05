<template>

    <!-- CardPanel.vue -->
    <card-panel title="Songs">
      <v-flex xs8 offset-xs2>
        <div v-for="song in songs" :key="song.id">
          {{ song.id }}
          {{ song.artist }}
          {{ song.album }}
        </div>
      </v-flex>
    </card-panel>
    <!-- CardPanel.vue -->

</template>

<script>
import SongsService from "@/service/SongsService"
import CardPanel from "@/components/CardPanel";

export default {
  components: {
    CardPanel,
  },
  data() {
    return {
      songs: null
    }
  },
  async mounted () {
        // do a request to the backend for all the songs
        // get request
        this.songs = (await SongsService.get()).data
        //console.log('songs', this.songs)
    }  
}
</script>

<style lang="scss" scoped></style>