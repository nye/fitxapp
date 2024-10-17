<script>
	import logo from '$lib/images/logo.svg';
	import {onMount} from 'svelte';

	const onStartClick = async () => {
		const response = await window.api.clockIn();

		console.log(response);

		if(response) {
			window.api.setRedIcon();
		}
	}

	onMount(() => {

	});
</script>

<header>
	<img src={logo} alt="Fitxapp" />
</header>

<section>
	<p>Hola Albert Sunyer</p>
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

	section{
		text-align: center;
	}
</style>
