<template>
  <panel title="Songs" class="mt-5">
    <v-layout>
      <!--the add buttion-->
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        @click="navigateTo({ name: 'songs-create' })"
        class="green accent-2"
        fab
        light
        medium
        absolute
        right
        middle
      >
        <v-icon>add</v-icon>
      </v-btn>
      <!--the add buttion-->

      <!-- album information for loop -->
      <v-flex xs8 offset-xs2>
        <div v-for="song in songs" class="song" :key="song.id">
          <v-layout>
            <v-flex xs10>
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

              <v-btn
                dark
                class="cyan"
                @click="
                  navigateTo({
                    name: 'song',
                    params: {
                      songId: song.id,
                      //songId: 'test'
                      //這裡決定params出現什麼
                    },
                  })
                "
              >
                View
              </v-btn>
            </v-flex>

            <img class="album-image" v-bind:src="song.albumImageUrl" />

            <v-flex xs6> </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <!-- album information for loop -->
    </v-layout>
  </panel>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
  components: {},

  data() {
    // 從後端回傳 songs 的資料
    return {
      songs: "",
    };
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },

  // //將這部分放進去 watch 中 -> immediate 可以取代
  // async mounted() {
  //   // do a request to the backend for all the songs
  //   // get request
  // this.songs = (await SongsService.get()).data;
  //     //console.log('songs', this.songs)
  // },

  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.get(value)).data;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.song {
  padding: 20px;
  height: 300px;
  width: 500px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
  padding:0 20px 0 0;
}

.song-artist {
  font-size: 24px;
  padding:0 20px 0 0;  
}

.song-genre {
  font-size: 18px;
  padding:0 20px 0 0;  
}

.album-image {
  width: 50%;
  margin:0 0px 0 0px;
  margin: 0 auto;
}
</style>