<template>
  <div class="hello">
    <h1>Register</h1>
    <input
          type='email'
          text='email'
					v-model='email'
          placeholder='email' />
    <br>
    <input
          type='password'
          text='password'
					v-model='password'
          placeholder='password' />
    <br>
    <button
        @click='register'>
        Register
    </button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '123',
      password: 'abc'
    }
  },
//   watch:{
    //   email(value){
        //   console.log('email has changed',value)
    //   }
//   },
//   mounted (){
    //   setTimeout(() => {
        //   this.email = 'Try Again'
    //   },2000)
//   }
    methods: {
        register() {
            console.log('register button was clicked', this.email, this.password)
        }
    }

}
</script>