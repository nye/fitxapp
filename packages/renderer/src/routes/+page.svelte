<script>
	import logo from '$lib/images/logo.svg';
	import {onMount} from 'svelte';
	import Shift from '$lib/Shift.svelte';
	import Button from '$lib/Button.svelte';

	let interval;
	let loading = true;
	let shifts;
	let hores = '00:00';
	let fitxant = false;

	$: fitxant = shifts && shifts.some(shift => !shift.clock_out);

	const fetchShifts = async () => {
		loading = true;

		const data = await window.api.shifts();

		shifts = data;
		loading = false;
	}

	const start = async () => {
		loading = true;

		const response = await window.api.clockIn();

		if(response){
			fetchShifts();
		}

		loading = false;
	}

	const stop = async () => {
		loading = true;
		const response = await window.api.clockOut();

		if(response){
			fetchShifts();
		}

		loading = false;
	}

	onMount(() => {
		fetchShifts();
		interval = setInterval(fetchShifts, 600000);

		window.api.onUpdateHours((value) => {
			hores = value;
		})

		return () => clearInterval(interval);
	});
</script>

<header>
	<h1>Fitxapp</h1>
	<img src={logo} alt="Fitxapp" />
</header>

<section class:fitxant>
	<h3>Hola Albert Sunyer</h3>

	<div class="time">
		<p>Temps total treballat avui</p>
		<h2>{hores} hores</h2>
	</div>

	{#if shifts && shifts.length}
	<h3>Torns</h3>
	{/if}

	<div class="shifts">
		{#if shifts && shifts.length}
			<ol>
				{#each shifts as shift}
					<Shift {shift} />
				{/each}
			</ol>
		{/if}
	</div>

	<div class="actions">
		{#if fitxant}
			<Button on:click={() => stop()} label="Parar" loading={loading} icon="stop" />
		{:else}
			<Button on:click={() => start()} label="Fitxar" loading={loading} icon="play" />
		{/if}

		<a href="https://app.factorialhr.com/attendance/clock-in'" target="_blank" on:click|preventDefault={() => window.api.openExternalUrl('https://app.factorialhr.com/attendance/clock-in')}>Anar a Factorial</a>
	</div>
</section>

<style lang="scss">
	h1{
		font-size: 1.5rem;
		font-weight: 700;
	}

	h2{
		font-size: 1.875rem;
		font-weight: 700;
		line-height: 2.25rem;
	}

	h3{
		font-size: 1.125rem;
		font-weight: 500;
		line-height: 1.75rem;
		margin-bottom: .4rem;
	}

	header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: .2rem 1.3rem;

		img{
			width: 2.4rem;
		}
	}

	section{
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: .2rem 1.3rem;

		h3:first-child{
			margin-top: 0;
		}
	}

	.time{
		padding: .8rem 1rem .5rem 1rem;
		background: rgb(254 242 242 / 1);
		border: 1px solid rgba(229, 25, 67, .23);
		border-radius: 4px;

		p{
			color: rgb(75 85 99 / 1);
			font-size: 0.82rem;
			line-height: 1.25rem;
			margin: 0 0 .1rem 0;
		}

		h2{
			color: rgba(229, 25, 67, 1);
			margin: 0;
		}
	}

	.shifts{
		flex: 1;
		max-height: 130px;
		overflow: auto;

		ol{
			list-style: none;
			margin: 0;
			padding: 0;
		}
	}

	.actions{
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		padding: 1rem 0;
		margin-top: auto;

		a{
			font-size: 0.875rem;
			color: rgb(75 85 99 / 1);
			cursor: pointer;
		}
	}

	.fitxant{
		.clockIcon{
			animation: rotator 3s linear infinite;
		}
	}
</style>
