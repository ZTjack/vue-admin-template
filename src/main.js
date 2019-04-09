import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

// A modern alternative to CSS resets
import 'normalize.css/normalize.css'

// ElementUI
import Element from 'element-ui'
import './styles/element-variables.scss'

// global css
import '@/styles/base.scss'

// permission control
import './permission'

// rewrite errorHanlder collect all errors in state.logs
import './utils/errorLog' // error log

/* ---------Below can be choose to removew---------- */

// Internationalization
import i18n from './lang'
import './icons'
import Cookies from 'js-cookie'

// global filters
import * as filters from './filters'
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// TODO: know about mockJS
import { mockXHR } from '../mock' // simulation data

// mock api in github pages site build
if (process.env.NODE_ENV === 'production') { mockXHR() }

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

/* ---------Above can be choose to removew---------- */

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
