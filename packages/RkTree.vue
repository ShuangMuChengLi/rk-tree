<template>
  <ul>
    <rk-tree-item
      class="item"
      :model="treeData"
    />
  </ul>
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
  }

};
</script>

<style scoped>
  .item {
    cursor: pointer;
  }
</style>
