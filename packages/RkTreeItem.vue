<template>
  <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle"
    >
      {{ model.deviceName }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul
      v-if="isFolder"
      v-show="open"
    >
      <rk-tree-item
        v-for="(model, key) in model.childList"
        :key="key"
        class="item"
        :model="model"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'RkTreeItem',
  props: {
    model: Object
  },
  data () {
    return {
      open: true
    };
  },
  computed: {
    isFolder () {
      return this.model.childList && this.model.childList.length;
    }
  },
  methods: {
    toggle () {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
  .item {
    cursor: pointer;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
