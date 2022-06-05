<template>
  <songs-page />
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
        this.songs = await SongsService.get()
    }  
}
</script>

<style lang="scss" scoped></style>