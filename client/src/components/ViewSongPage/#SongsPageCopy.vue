<template>
  <!-- CardPanel.vue -->
  <card-panel title="Songs">
    <!--add buttion-->

    <div slot="action">
      <v-btn
        @click="navigateTo({ name: 'songscreate' })"
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
      <v-btn
        dark
        class="cyan"
        @click="
          navigateTo({
            name: 'songid',
            params: {
              //restful api 網址的構成部分
              songId: song.id,
            },
          })
        "
      >
        View
      </v-btn>
    </div>

    <!--add buttion-->

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
import SongsService from "@/services/SongsService";
//import CardPanel from "@/components/CardPanel";

export default {
  name: "SongsPage",
  data() {
    return {
      song: null,
    };
  },
  async mounted() {
    //這部分和取網址songId的值無關

    // 這裡的 route -> main.js ->sync(store, router)
    // 這裡的 songId 來自於 SongsPage.vue 中的 "VIEW" button-> click 透過 navigateTo 送到路由內做為參數
    const songId = this.$store.state.route.params.songId;
    console.log("QQQQQQAAAAAQQQQQQQQ");
    console.log(songId);

    this.song = (await SongsService.show(songId)).data;
  },

  components: {
    CardPanel,
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style lang="scss" scoped></style>