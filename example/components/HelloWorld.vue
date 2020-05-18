<template>
  <div class="hello">
    <ul
      id="treeId"
      class="ztree"
    />
  </div>
</template>

<script>
import { rkTree ,$} from "../../rkTree/rkTree.umd";
import treeList from '../tree';
export default {
  name: 'HelloWorld',
  data(){
    return {
      setting:{
        data: {
          key: {
            name: "deviceName",
            children: "childList"
          }
        },
        check : {
          enable : true,
          chkStyle : "checkbox"
        },
      }
    }
  },
  methods:{
  },
  mounted() {
    rkTree
      .init($('#treeId'), this.setting, treeList.result)
      .expandAll(true);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../rkTree/zTreeStyle/zTreeStyle.css";
</style>
