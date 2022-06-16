<template>
  <!--根據components自動轉換格式-->
  <songs-page/> 
</template>


<script>
  import SongsPage from '@/components/SongsPage/index'

  export default {
    name: 'Songs',

    components: {
      SongsPage
    
    },
  }
</script>

<!--
<template>
    <id-page />
</template>


<script>
import IdPage from '../components/ViewSongPage/SongIdPage'
  export default {
    name:'songid',
    components: {
    IdPage
  },
}
</script>
-->