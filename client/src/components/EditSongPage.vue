
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

        <v-btn 
          class="mr-4" 
          type="submit" 
          :disabled="invalid"
        > 
        Save 
        </v-btn>
        
    </card-panel>
</template>

<script>
import AuthenticationService from "@/service/AuthenticationService";
import CardPanel from "@/components/CardPanel.vue";

export default {

// 按鈕 save
 methods: {
    async submit() {
      // form validation
      await this.$refs.observer.validate();


      //console.log(songId)
      try {
        // update data by put

        console.log(this.song)
        console.log('hello1')
        const songId = this.$store.state.route.params.songId
        await SongsService.put(this.song,songId) // SongsService 有兩個參數,這裡要帶兩個

       


        // send to page of song id you want to edit        
        await this.$router.push({
          name: "song",
          params: {
            songId: this.$store.state.route.params.songId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  },

}
</script>
