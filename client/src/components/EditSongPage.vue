<template>
  <v-card max-width="750" class="mx-auto">
    <!-- CardPanel.vue -->

    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <panel title="Song Metadata">
          <v-layout>
            <v-flex xs12>
              <!--     start        -->
              <validation-provider
                v-slot="{ errors }"
                name="title"
                rules="required|max:100"
              >
                <v-text-field
                  v-model="song.title"
                  :counter="100"
                  :error-messages="errors"
                  label="Title"
                  required
                ></v-text-field>
              </validation-provider>
              <!--     end        -->

              <!--     start        -->
              <validation-provider
                v-slot="{ errors }"
                name="artist"
                rules="required|max:100"
              >
                <v-text-field
                  v-model="song.artist"
                  :counter="100"
                  :error-messages="errors"
                  label="Artist"
                  required
                ></v-text-field>
              </validation-provider>
              <!--     end        -->

              <!--     start        -->
              <validation-provider
                v-slot="{ errors }"
                name="genre"
                rules="required|max:100"
              >
                <v-text-field
                  v-model="song.genre"
                  :counter="100"
                  :error-messages="errors"
                  label="Genre"
                  required
                ></v-text-field>
              </validation-provider>
              <!--     end        -->

              <!--     start        -->
              <validation-provider
                v-slot="{ errors }"
                name="album"
                rules="required|max:100"
              >
                <v-text-field
                  v-model="song.album"
                  :counter="100"
                  :error-messages="errors"
                  label="Album"
                  required
                ></v-text-field>
              </validation-provider>
              <!--     end        -->

              <!--     start        -->
              <validation-provider
                v-slot="{ errors }"
                name="youtubeId"
                rules="required|max:100"
              >
                <v-text-field
                  v-model="song.youtubeId"
                  :counter="100"
                  :error-messages="errors"
                  label="YouTube Id"
                  required
                ></v-text-field>
              </validation-provider>
              <!--     end        -->

              <!--     start        -->
              <validation-provider
                v-slot="{ errors }"
                name="albumImageUrl"
                rules="required"
              >
                <v-text-field
                  v-model="song.albumImageUrl"
                  :counter="1000"
                  :error-messages="errors"
                  label="Album Image URL"
                  required
                ></v-text-field>
              </validation-provider>
              <!--     end        -->

              <!--     start        -->
              <validation-provider
                v-slot="{ errors }"
                name="tab"
                rules="required"
              >
                <v-col cols="24" md="12">
                  <v-text-field
                    v-model="song.tab"
                    :counter="1000"
                    :error-messages="errors"
                    label="Tab"
                    required
                    hint="@@"
                  ></v-text-field>
                </v-col>
              </validation-provider>
              <!--     end        -->

              <!--     start        -->
              <validation-provider
                v-slot="{ errors }"
                name="lyrics"
                rules="required"
              >
                <v-col cols="24" md="12">
                  <v-text-field
                    v-model="song.lyrics"
                    :counter="2000"
                    :error-messages="errors"
                    label="Lyrics"
                    required
                    hint="@@"
                  ></v-text-field>
                </v-col>
              </validation-provider>
              <!--     end        -->
            </v-flex>
          </v-layout>
        </panel>

        <v-btn class="mr-4" type="submit" :disabled="invalid"> save </v-btn>
      </form>
    </validation-observer>
  </v-card>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";


import SongsService from "@/services/SongsService";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
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

  // 直接將資料帶入欄位
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
    console.log(this.song)
  },
  
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
};
</script>

<!--
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
import AuthenticationService from "@/services/AuthenticationService";
//import CardPanel from "@/components/CardPanel.vue";

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
-->