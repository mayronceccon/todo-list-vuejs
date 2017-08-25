import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueMask from 'v-mask'
import { VueMaskDirective } from 'v-mask'
import LocalStorage from './helpers/local-storage.js'

Vue.directive('mask', VueMaskDirective);
Vue.use(VueResource, VueMask, LocalStorage);

new Vue({
  el: '#app',
  render: h => h(App)
})
