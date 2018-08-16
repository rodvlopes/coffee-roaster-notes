import Vue from 'vue'
import './styles/quasar.styl'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import Quasar, * as All from 'quasar'

Vue.use(Quasar, {
  components: All,
  directives: All,
  plugins: All
})

/***
How to import some components rather them All

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
