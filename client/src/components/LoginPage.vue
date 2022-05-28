<template>
  <v-card max-width="450" class="mx-auto">
    <!--上半部的bar-->
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Log In</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!--  List 的部分 -->
    <v-list three-line>
      <template>
        <div class="container">
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
              <v-btn dark class="cyan" @click="login"> Login </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </template>
    </v-list>
  </v-card>
</template>


<script>
import AuthenticationService from "@/service/AuthenticationService";

export default {
  name: "LoginPage",
  data: () => ({
    email: "",
    password: "",
    error: null,
  }),

  // methods -> 函式
  // computed -> 用起來像函式,結果是一個值
  methods: {
    //computed get set? v-model? -> password & email
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        // 查看 const response 改成 var
        // console.log(response.data)

        // vuex - import store/index.js -> dispatch 觸發 action
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger-alert {
  color: red;
}
</style>