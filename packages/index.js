import RKTree from './RkTree';

const plugin = {
  install: function(Vue) {
    Vue.component('rk-tree', RKTree);
  },
  components: RKTree
};

export default plugin;
