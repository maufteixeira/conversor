<template>
	<div class="panel bg--blue-00">
		<PanelContent />
	</div>
</template>

<script>
	import PanelContent from './PanelContent.vue';

	export default {
		name: 'Panel',
		components: { PanelContent },
	};
</script>

<style lang="scss" scoped>
	.panel {
		display: flex;
		width: 700px;
		height: 800px;
		padding: 20px 20px;
		border: 10px solid black;
		border-radius: 25px;
	}
</style>
