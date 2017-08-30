import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'

Vue.use(plugins)

new Vue({
  el: '#app',
  render: h => h(App)
})
