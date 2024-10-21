<script>
	import logo from '$lib/images/logo.svg';

	export let shift;
</script>

<li>
	<span>{shift.clock_in} h.</span>

	{#if shift.clock_out}
		<span>--></span>
		<span>{shift.clock_out} h.</span>
	{:else}
		<img src={logo} class="clockIcon" alt="Fitxant..." />
	{/if}
</li>


<style lang="scss">
	li{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		font-size: 0.875rem;
		line-height: 1.25rem;
		margin-bottom: 5px;
		padding: .5rem .75rem;
		border-radius: 4px;

		span{
			flex: 1;

			&:first-child{
				font-feature-settings: 'tnum';
			}

			&:nth-child(2){
				color: rgb(75 85 99 / .4);
				text-align: center;
			}

			&:last-child{
				font-feature-settings: 'tnum';
				text-align: right;
			}
		}

		.clockIcon{
			width: 18px;
			color: rgb(75 85 99 / .4);
		}
	}
</style>
