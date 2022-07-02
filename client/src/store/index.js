import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  // 01
  strict: true,
  
  // 02
  // 來自 mutations 的狀態
  state: {
    token: null, 
    user: null,  
    isUserLoggedIn: false
  },
  
  // 03
  // 來自 actions
  mutations: {
    // 這個token來自action帶入的token(or null - logout) 的值  
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    // 這個user來自action帶入的token(or null - logout) 的值
    setUser (state, user) {
      state.user = user
    }
  },
  

  // 04
  actions: {
    setToken ({commit}, token) { // token 帶入 setToken
      commit('setToken', token)
    },
    setUser ({commit}, user) { // user  帶入 setUser
      commit('setUser', user)
    } 
  },
  

  // 05
  modules: {
  }

})

