
<!--看全部歌曲和搜尋的頁面-->

<template>
  <v-flex>

    <v-card max-width="1000" class="mx-auto">
      <song-search />
    </v-card>

    <v-card max-width="1000" class="mx-auto">
      <song-panel />
    </v-card>

  </v-flex>
</template>

<script>
import SongPanel from "@/components/SongsPage/SongPanel";
import SongSearch from "@/components/SongsPage/SongSearch";

export default {
  components: {
    SongPanel,
    SongSearch,
  },
};
</script>