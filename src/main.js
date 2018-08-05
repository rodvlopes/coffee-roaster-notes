import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import './styles/quasar.styl'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import Quasar, * as All from 'quasar'

Vue.use(Quasar, {
  components: All,
  directives: All,
  plugins: All
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
