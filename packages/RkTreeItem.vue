<template>
  <div class="list">
    <div
      :class="{bold: isFolder}"
    >
      <i :class="{'triangle-right':isFolder, active: open}"  @click="itemClick"></i>
      <input type="checkbox" v-model="isChecked" @change="check" />
      <span @click="itemClick">{{ model.deviceName }}</span>

    </div>
    <div
      v-if="isFolder"
      v-show="open"
    >
      <rk-tree-item
        v-for="(model, key) in model.childList"
        :key="key"
        class="item"
        :model="model"
        @itemClick="childClick"
        :allChecked="childAllChecked"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RkTreeItem',
  components:{
  },
  props: {
    model: Object,
    allChecked: Boolean
  },
  data () {
    return {
      open: false,
      isChecked: false,
      childAllChecked: false
    };
  },
  watch:{
    allChecked:{
      handler(){
        this.isChecked = this.allChecked
        this.childAllChecked = this.isChecked;
      },
      immediate: true
    }
  },
  computed: {
    isFolder () {
      return this.model.childList && this.model.childList.length;
    }
  },
  methods: {
    itemClick () {
      if(this.isFolder){
        this.open = !this.open;
      }else {
        this.$emit('itemClick', this.model);
      }
    },
    childClick(item){
      this.$emit('itemClick', item);
    },
    check(){
      this.childAllChecked = this.isChecked;
    }
  }
};
</script>

<style scoped lang="less">
  .item {
    cursor: pointer;
  }
  .list {
    padding-left: 18px;
  }
  .triangle-right {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-left: 4 * 1.73px solid #c0c4cc;
    border-bottom: 4px solid transparent;
    &.active{
      transform: rotate(90deg);
    }
  }
</style>
