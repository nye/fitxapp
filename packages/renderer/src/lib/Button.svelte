<script>
	export let label;
	export let icon;
	export let loading = false;
	export let disabled = false;
	export let width = 100;
	export let height = 35;
</script>


<button on:click disabled={disabled || loading} style="width: {width}px; height: {height}px">
	{#if loading}
		<div class="loading">
			<svg class="spinner" width="20px" height="20px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
				<circle class="path" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
			</svg>
		</div>
	{:else}
		{#if icon == 'play'}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
		{:else if icon == 'stop'}
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z"/></svg>
		{/if}

		{label}
	{/if}
</button>


<style lang="scss">
	button{
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.6rem 1rem;
		background: rgb(239 68 68 / 1);
		border-radius: 6px;
		font-size: 16px;
		color: #fff;
		box-shadow: 2px 2px 5px -2px rgb(75 85 99 / .6), inset 1px 1px 1px rgb(255 255 255 / .2);
		border: 1px solid rgb(207 42 42);

		svg:not(.spinner){
			width: 1rem;
			height: 1rem;
			margin-right: 0.5rem;
		}

		.spinner{
			margin-bottom: -4px;
		}

		.loading{
			width: 100%;
			text-align: center;
		}

		&:hover:not(:disabled){
			background: rgba(229, 25, 67, 1);
		}

		&:active{
			box-shadow: 0 0 3px -1px rgb(75 85 99 / .6), inset 1px 1px 1px rgb(255 255 255 / .2);
		}
	}
</style>
