<template>
  <songs-page />
</template>


<script>
//import SongsService from '@/service/SongsService'
import SongsPage from '../components/ViewSong/SongsPage'

export default {
  name:'Songs',
  components: {
    SongsPage
  },
  /*
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
  */    
}
</script>

<style lang="scss" scoped></style>