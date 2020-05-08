import Vue from 'vue'
import App from './App.vue'
import RkTree from '../lib/RkTree.umd'
Vue.config.productionTip = false
console.log(RkTree)
Vue.use(RkTree)
new Vue({
  render: h => h(App),
}).$mount('#app')
