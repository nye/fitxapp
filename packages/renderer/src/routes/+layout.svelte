<script>
	import './styles.css';
</script>

<main class="app">
	<div class="titlebar"></div>
	<slot />
</main>

<style lang="scss">
	.app{
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.titlebar {
		poaition: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 28px;
		-webkit-user-select: none;
		-webkit-app-region: drag;
	}
</style>
