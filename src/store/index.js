import Vue from 'vue'
import Vuex from 'vuex'

import moduleMain from './module-main'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    moduleMain
  }
})

export default store
