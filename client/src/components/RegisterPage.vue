<template>
  <card-panel title="Register">

    <!--slot part-->
          <v-layout>
            <v-flex sm-12>
                <form name="tab-tracker-form" autocomplete="off">
                  <v-text-field 
                    label="Email" 
                    v-model="email"
                    :rules="[(v) => !!v || 'Email is required']"
                    required
                  ></v-text-field>
                  <br />
                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    autocomplete="new-password"
                    :rules="[(v) => !!v || 'Password is required']"
                  ></v-text-field>
                </form>
                <br />
                <div class="danger-alert" v-html="error" />
                <br />
                <v-btn dark class="cyan" @click="register"> Register </v-btn>
            </v-flex>
          </v-layout>
    <!--slot part-->

  
  </card-panel>
</template> 

<script>
import AuthenticationService from "@/service/AuthenticationService";
import CardPanel from "@/components/CardPanel.vue";

export default {
  name:'RegisterPage',
  data:() => ({
    email: "",
    password: "",
    error: null,
  }),
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        //查看 將 const response 改成 var response
        //console.log(response.data);
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  components: {
    CardPanel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: center;
  border: red;
}
.danger-alert {
  color: red;
}
</style>