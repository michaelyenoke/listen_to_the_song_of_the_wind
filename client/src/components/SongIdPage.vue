<template>
<p>hello</p>
</template>


<script>
import SongsService from '@/service/SongsService'

export default {
    name: "SongId",    
    data () {
        return {
            song: null
        }
    },
    async mounted() {
        const songId = this.$state.route.params.songId;
        console.log(songId)
    this.song = (await SongsService.show(songId)).data;
    }
}

</script>