<template>
    <v-layout>
        <v-flex xs6>
          <div>
             {{ youtubeId}}
              <youtube
                :video-id='youtubeId'
                :player-width="500"
                :player-height="200"
              >
              </youtube>
          </div>

        </v-flex>
    </v-layout>
</template>


<script>

export default {
    props: [
        'youtubeId'
    ]
}
</script>