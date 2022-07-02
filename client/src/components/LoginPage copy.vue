<template>
  <v-card max-width="450" class="mx-auto">
    <!--上半部的bar
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Login</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>-->

    <!-- three-line List 
    <v-list three-line>
      <template>
        <div class="container">
          <v-layout>-->
    <panel title="Login">
      <v-layout>
        <v-flex sm-12>
          <div title="Login">
            <form name="tab-tracker-form" autocomplete="off">
              <v-text-field
                label="Email"
                v-model="email"
                :rules="[(v) => !!v || 'Email is required']"
                required
              >
              </v-text-field>
              <br />
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
                autocomplete="new-password"
                :rules="[(v) => !!v || 'Password is required']"
              >
              </v-text-field>
            </form>
            <br />
            <div class="danger-alert" v-html="error" />
            <br />
            <v-btn dark class="cyan" @click="login"> Login </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </panel>
    <!--</v-layout>
        </div>        
      </template>
    </v-list>-->
  </v-card>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";


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
        // 僅僅需要 await! 基本語法觀念！
        await this.$store.dispatch("setToken", response.data.token);
        await this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  components: {
   
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger-alert {
  color: red;
}
</style>

<!--
<template>
  <card-panel title="Login">
    //slot part
    <v-layout>
      <v-flex sm-12>
        <div title="Login">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field
              label="Email"
              v-model="email"
              :rules="[(v) => !!v || 'Email is required']"
              required
            >
            </v-text-field>
            <br />
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
              :rules="[(v) => !!v || 'Password is required']"
            >
            </v-text-field>
          </form>
          <br />
          <div class="danger-alert" v-html="error" />
          <br />
          <v-btn dark class="cyan" @click="login"> Login </v-btn>
        </div>
      </v-flex>
    </v-layout>
    //slot part


  </card-panel>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
//import CardPanel from "@/components/CardPanel.vue";

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
        this.$store.dispatch("setToken", response.data.token); // response.data.token 這個值會透過store/index.js中的actions帶入到mutaions中
        this.$store.dispatch("setUser", response.data.user); // 同上
        this.$router.push({ name: "home" });
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

//Add "scoped" attribute to limit CSS to this component only
<style scoped>
.danger-alert {
  color: red;
}
</style>
-->