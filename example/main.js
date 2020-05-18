import Vue from 'vue'
import App from './App.vue'
// import RKTree from '../test/index';
// import RkTree from '../lib/RkTree.umd'
import RkTree from '../packages'
Vue.config.productionTip = false
Vue.use(RkTree)
new Vue({
  render: h => h(App),
}).$mount('#app')
