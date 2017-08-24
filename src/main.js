import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueMask from 'v-mask'
import { VueMaskDirective } from 'v-mask'

Vue.directive('mask', VueMaskDirective);
Vue.use(VueResource, VueMask);

new Vue({
  el: '#app',
  render: h => h(App)
})
