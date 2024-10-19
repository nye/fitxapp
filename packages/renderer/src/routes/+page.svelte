<script>
	import logo from '$lib/images/logo.svg';
	import {onMount} from 'svelte';

	let interval1;
	let interval2;

	let shifts;
	let minuts = 0;
	let minuts_past = 0;
	let hores = '00:00';
	let fitxant = false;

	$: fitxant = shifts && shifts.some(shift => !shift.clock_out);
	$: minuts_past = shifts && shifts.reduce((acc, shift) => acc + shift.minutes, 0);
	$: hores = minuts && Math.floor(minuts / 60) + ':' + (minuts % 60).toString().padStart(2, '0');

	$: if(fitxant) {
		window.api.setRedIcon();
	}else{
		window.api.setWhiteIcon();
	}

	const calcMinuts = () => {
		if(fitxant){
			let s = shifts[shifts.length - 1];
			let date = new Date(s.date + ' ' + s.clock_in);
			let now = new Date();

			// Put date on the same timezone as now
			date.setHours(now.getHours());
			minuts = Math.floor((now - date) / 60000) + minuts_past;
		}else{
			minuts = minuts_past;
		}
	}

	const fetchShifts = async () => {
		const data = await window.api.shifts();

		shifts = data;
	}

	const start = async () => {
		const response = await window.api.clockIn();

		if(response){
			fetchShifts();
		}
	}

	const stop = async () => {
		const response = await window.api.clockOut();

		if(response){
			fetchShifts();
		}
	}

	onMount(() => {
		fetchShifts();

		interval1 = setInterval(() => {
			calcMinuts();
		}, 1000);

		interval2 = setInterval(() => {
			fetchShifts();
		}, 600000);

		return () => {
			clearInterval(interval1);
			clearInterval(interval2);
		}
	});
</script>

<header>
	<h1>FitxApp</h1>
	<img src={logo} class="clockIcon" alt="Fitxapp" />
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
					<li>
						<span>{shift.clock_in} h.</span>

						{#if shift.clock_out}
							<span>--></span>
							<span>{shift.clock_out} h.</span>
						{:else}
							<img src={logo} class="clockIcon" alt="Fitxant..." />
						{/if}
					</li>
				{/each}
			</ol>
		{/if}
	</div>

	<div class="actions">
		{#if fitxant}
			<button on:click={() => stop()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z"/></svg> Parar</button>
		{:else}
			<button on:click={() => start()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play mr-2 h-4 w-4" data-id="20"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg> Fitxar</button>
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

	button{
		display: flex;
		align-items: center;
		padding: 0.6rem 1rem;
		background: rgb(239 68 68 / 1);
		border: none;
		border-radius: 6px;
		font-size: 16px;
		color: #fff;

		svg{
			width: 1rem;
			height: 1rem;
			margin-right: 0.5rem;
		}

		&:hover{
			background: rgba(229, 25, 67, 1);
		}
	}

	.fitxant{
		.clockIcon{
			animation: rotator 3s linear infinite;
		}
	}
</style>
