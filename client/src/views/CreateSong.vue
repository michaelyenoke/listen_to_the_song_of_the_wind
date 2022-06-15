<template>
  <!--根據components自動轉換格式-->
  <create-song-page />
</template>


<script>
import CreateSongPage from '../components/CreateSongPage'

  export default {
    name: 'songs-create',
    components: {
      CreateSongPage
    },
  }
</script>


<!--
<template>
 //根據components自動轉換格式
  <create-page />
</template>


<script>
import CreatePage from '../components/CreatePage.vue'

  export default {
    name: 'songscreate', // -> router/index
    components: {
      CreatePage
    }

  }
</script>
-->