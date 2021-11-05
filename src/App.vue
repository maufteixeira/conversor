<template>
	<div id="calc" class="bg--gray">
    <Calc />
  </div>
</template>

<script>
  import Calc from './components/Calc.vue';

  export default {
    name: 'App',
    components:{
      Calc,
    },
  };
</script>

<style lang="scss" scoped>
  #calc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
  }
</style>
