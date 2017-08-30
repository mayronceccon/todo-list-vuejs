import VueResource from 'vue-resource'
import VueMask, {VueMaskDirective} from 'v-mask'

export default Vue => {
  Vue.directive('mask', VueMaskDirective)
  Vue.use(VueResource)
  Vue.use(VueMask)
}
