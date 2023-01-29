<template>
  <panel title="Songs">
    <v-btn
      slot="action"
      :to="{
        name: 'songs-create'
      }"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div 
      v-for="song in songs"
      class="song"
      :key="song.id">

      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>

          <v-btn
            dark
            class="cyan"
            :to="{
              name: 'song', 
              params: {
                songId: song.id
              }
            }">
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>


<script>
import SongsService from '@/services/SongsService'

export default {
  data() {
    return {
      songs: [],
      //search: this.$route.query.search
    }
  },
  methods: {
    async fetchSongs(search) {
      try {
        this.songs = (await SongsService.index(search)).data
      } catch (error) {
        console.error(error)
      }
    }
  },
  computed: {
    search: {
      get() {
        return this.$route.query.search
      },
      set(value) {
        this.fetchSongs(value)
        console.log(value)
      }
    }
  },
  mounted(){
    this.fetchSongs(this.search)
  }
}
</script>





<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 18px;
}

.song-artist {
  font-size: 18px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>