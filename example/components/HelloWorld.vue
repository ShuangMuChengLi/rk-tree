<template>
  <div class="hello">
    <rk-tree @itemClick="itemClick"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    itemClick(item){
      console.log(item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
