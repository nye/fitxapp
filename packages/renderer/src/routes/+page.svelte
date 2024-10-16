<script>
	import logo from '$lib/images/logo.svg';

	const onStartClick = () => {
		window.electronAPI.setRedIcon();
	}
</script>

<header>
	<img src={logo} alt="Fitxapp" />
</header>

<section>
	<button on:click={onStartClick}>Start!</button>
</section>

<style lang="scss">
	header{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem 1rem 1rem 1rem;

		img{
			width: 100px;
		}
	}
</style>
