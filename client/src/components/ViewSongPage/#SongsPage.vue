<template>
    <card-panel title="Youtube">
        <you-tube-part :youtubeId="youtubeId"/>
        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'song-edit', 
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>
    </card-panel>
</template>



<script>
import SongsService from "@/services/SongsService"
//import CardPanel from "@/components/CardPanel"
import YouTubePart from './YouTubePart'

export default {
  name: "SongsPage",
  data() {
    return {
      song: "",
      youtubeId:""
    };
  },
  async mounted() {
    //這部分和取網址songId的值無關

    // 這裡的 route -> main.js ->sync(store, router)
    // 這裡的 songId 來自於 SongsPage.vue 中的 VIEW -> click 透過 navigateTo 送到路由內做為參數
    const songId = await this.$store.state.route.params.songId;
    //console.log('ok1')
    //console.log(songId)
    //console.log('ok2')
    this.song = (await SongsService.show(songId)).data;
    //console.log(songId)
    //console.log('song',this.song)
    //console.log('ok3')
    this.youtubeId = await this.song.youtubeId
    console.log(this.youtubeId)
  },
  components: {
    CardPanel,
    YouTubePart

  },
};
</script>