<template>
    <v-layout>
        <v-flex xs6>
          <div>
             <!--{{ youtubeId}}-->
              <youtube
                :video-id='youtubeId'
                :player-width="700"
                :player-height="500"
              >
              </youtube>
          </div>

        </v-flex>
    </v-layout>
</template>


<script>

export default {
    // props in - 從index.vue引進youtubeId資料   
    props: [
        'youtubeId'
    ]
}
</script>