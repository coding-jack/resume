// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Resume from './Resume'
import './assets/sass/resume.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

library.add(faGithub, faLinkedin, faMobile, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#resume',
  router,
  components: { Resume },
  template: '<Resume/>'
})
