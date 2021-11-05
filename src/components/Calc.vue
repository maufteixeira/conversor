<template>
	<div class="calc">
		<Panel  />
	</div>
</template>

<script>
	import Panel from './Panel/Panel.vue';

	export default {
		name: 'Calc',
		components: {
			Panel,
		},
	};
</script>

<style lang="scss" scoped>
	.calc {
    display: flex;
    width: 700px;
    height: 800px;
		align-items: center;
		justify-content: center;
  }

</style>
