import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './QuasarBootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/***
Hot to import some components intead of All

import Quasar, {
  QLayout,
  QChip,
  QCarousel,
  QCarouselSlide,
  Notify,
  Ripple,
} from 'quasar'

Vue.use(Quasar, {
  components: {
    QLayout,
    QChip,
    QCarousel,
    QCarouselSlide,
  },
  directives: {
    Ripple
  },
  plugins: {
    Notify
  }
})
***/
