// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/mytunes-store'
import Vuetify from 'vuetify'
// import('path/to/node_modules/vuetify/dist/vuetify.min.css')
 
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
