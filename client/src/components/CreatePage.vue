<template>
  <v-card max-width="750" class="max-auto">
    <!-- CardPanel.vue -->
    <div class="cont">
      <v-layout>
        <card-panel title="Song Metadata">
          <v-flex xl-12 offset-xl-12>
            <!--create data-->
            <v-text-field label="Title" v-model="song.title"></v-text-field>
            <!--create data-->
            <v-text-field label="Artist" v-model="song.artist"></v-text-field>
            <!--create data-->
            <v-text-field label="Genre" v-model="song.genre"></v-text-field>
            <!--create data-->
            <v-text-field label="Album" v-model="song.album"></v-text-field>
            <!--create data-->
            <v-text-field
              label="Album Image Url"
              v-model="song.albumImageUrl"
            ></v-text-field>
          </v-flex>
        </card-panel>

        <card-panel title="Song Structure">
          <v-flex xl-8 offset-xl-8>
            <!--create data-->
            <v-col cols="12" md="6">
              <v-textarea
                name="input-7-1"
                label="Tab"
                value="Please type here."
                v-model="song.tab"
                hint="Hint text"
              ></v-textarea>
            </v-col>
            <!--create data-->
            <v-col cols="12" md="6">
              <v-textarea
                name="Lyrics"
                label="Default style"
                value="Please type here."
                v-model="song.lyrics"
                hint="Hint text"
              ></v-textarea>
            </v-col>
          </v-flex>
        </card-panel>
      </v-layout>
    </div>
    <v-btn dark class="cyan" @click="create"> Create </v-btn>
  </v-card>
</template>

<script>
import CardPanel from "@/components/CardPanel";
import SongsService from "@/service/SongsService";

export default {
  name: "CreatePage",    
  
  components: {
    CardPanel,
  },
  data() {
    return {
      song: {
        title: "",
        artist: "",
        genre: "",
        album: "",
        albumImageUrl: "",
        youtubeId: "",
        lyrics: "",
        tab: "",
      },
    };
  },
  methods: {
    async create() {
      try {
        await SongsService.post(this.song);
        //console.log('NBA')
        //console.log(this.song)
        this.$router.push({
          name: "songs",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>