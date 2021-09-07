import { createStore } from 'vuex'

export default createStore({
  state: {
    result: 0 
  },
  mutations: {
    setResult(state, {newResult}) {
      state.result = newResult
    }, 
    clear(state) {
      state.result = 0
    }
  },
  actions: {
    setResult({commit}, payload) {
      commit('setResult', payload)
    }, 
    clear({commit}) {
      commit('clear')
    }
  }
})
