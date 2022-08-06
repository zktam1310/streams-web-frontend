import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import
{ faUser,
  faPowerOff,
  faSackDollar,
  faHouse,
  faFaceMeh,
  faFaceDizzy,
  faFaceSmile,
  faArrowTurnDown} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser, faPowerOff, faSackDollar, faHouse, faFaceMeh, faFaceDizzy, faFaceSmile, faArrowTurnDown)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
