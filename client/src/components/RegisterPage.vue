
<template>
  <card-panel title="Register">


    <!--slot part-->
    <v-layout>
      <v-flex sm-12>
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>

          <br />

          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
            :rules="passwordRules"
            error-count="5"
            required
          ></v-text-field>
        </form>

        <br />
        <div class="danger-alert" v-html="error" />
        <br />

        <v-btn 
          dark class="cyan" 
          @click="register"
        > 
        Register
        </v-btn>
        
      </v-flex>
    </v-layout>
    <!--slot part-->

  </card-panel>
</template> 



<script>
import AuthenticationService from "@/services/AuthenticationService";
import CardPanel from "@/components/Globals/Panel.vue";

export default {
  //name: "RegisterPage",
  data () {
    return {
      email: '',
      password: '',
      error: null,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'Email must be valid'
      ],
      passwordRules:[
        v => !!v || 'Password is required',
        v => (v && v.length >= 5) || 'Password must have 5+ characters',
        v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
        v => /(?=.*\d)/.test(v) || 'Must have one number',
        //v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
      ]

    }
  },
  // API
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.user)
        await this.$router.push({ name: "landing" });
        await this.delay(5);  //等待五秒
        await this.$router.push({ name: "root" });    //註冊成功會轉到root -> 這裡要改成註冊成功頁面 -> 再轉到首頁    
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    CardPanel,
  },
};
</script>



<style scoped>
/*Add "scoped" attribute to limit CSS to this component only*/
.container {
  text-align: center;
  border: red;
}
.danger-alert {
  color: red;
}
</style>
