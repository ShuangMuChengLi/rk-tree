<template>
  <div class="tree-wrapper">
    <rk-tree-item
      class="item"
      :model="treeData"
      @itemClick="childClick"
    />
  </div>
</template>

<script>
import RkTreeItem from './RkTreeItem';
import treeData from './tree';
export default {
  name: 'RkTree',
  components: { RkTreeItem },
  data () {
    return {
      treeData: treeData.result
    };
  },
  methods:{
    childClick(item){
      this.$emit('itemClick', item);
    }
  }
};
</script>

<style scoped>
  .item {
    cursor: pointer;
  }
  .tree-wrapper{
    padding: 0;
  }
</style>
