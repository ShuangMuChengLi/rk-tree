import RKTree from './RkTree';
import 'element-ui/lib/theme-chalk/index.css';
const plugin = {
  install: function(Vue) {
    Vue.component('rk-tree', RKTree);
  },
  components: RKTree
};

export default plugin;
