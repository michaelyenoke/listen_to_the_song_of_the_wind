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
import SongsService from "@/service/SongsService";
import CardPanel from "@/components/CardPanel";

export default {
  name: "SongsPage",
  data() {
    return {
      songs: null,
    };
  },
  async mounted() {
    // do a request to the backend for all the songs
    // get request
    this.songs = (await SongsService.get()).data;
    //console.log('songs', this.songs)
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