<template>

    <!-- CardPanel.vue -->
    <card-panel title="Songs">
      <v-flex xs8 offset-xs2>
        <div v-for="song in songs" :key="song.title">
          {{ song.title }} <br/>
          {{ song.artist }} <br/>
          {{ song.album }} 
        </div>
      </v-flex>
    </card-panel>
    <!-- CardPanel.vue -->

</template>

<script>
import CardPanel from "@/components/CardPanel";

export default {
  components: {
    CardPanel,
  },
  data() {
    return {
      songs: [
        {
          title: "Float On 01",
          artist: "Modest Mouse",
          album: "Good News for People Who Love",
        },
        {
          title: "Float On 02",
          artist: "Modest Mouse",
          album: "Good News for People Who Love",
        },
        {
          title: "Float On 03",
          artist: "Modest Mouse",
          album: "Good News for People Who Love",
        },
        {
          title: "Float On 04",
          artist: "Modest Mouse",
          album: "Good News for People Who Love",
        },
        {
          title: "Float On 05",
          artist: "Modest Mouse",
          album: "Good News for People Who Love",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>