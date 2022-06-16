<template>
  <!--根據components自動轉換格式-->
  <view-song-page /> 
</template>


<script>
  import ViewSongPage from '../components/ViewSongPage/index'

  export default {
    name: 'song',

    components: {
      ViewSongPage
    
    },
  }
</script>

<!--
<template>
  <songs-page />
</template>


<script>
//import SongsService from '@/service/SongsService'
import SongsPage from '../components/ViewSongPage/SongsPage'

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
-->