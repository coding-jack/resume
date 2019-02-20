// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Resume from './Resume'
import './assets/sass/resume.scss'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { faTerminal, faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

Vue.use(BootstrapVue)
// Vue.use(require('vue-moment'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#resume',
  router,
  components: { Resume },
  template: '<Resume/>'
})
