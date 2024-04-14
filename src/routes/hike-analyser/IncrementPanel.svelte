<script lang="ts">
	import { onMount } from 'svelte';
	import Increment from './Increment.svelte';

	export let id: string;

	let increments: number[] = [0];

	let baseSalary: number = 10000;

	let formEl: HTMLFormElement;

	let grandTotal: number;

	const numberFormatter = new Intl.NumberFormat('en-IN');

	const getGrandTotal = () => {
		const incrementTotalEls = formEl.querySelectorAll('input[name="increment_total"]');
		console.log('incrementTotalEls', incrementTotalEls);
		if (incrementTotalEls.length > 0) {
			const incrementValues = (Array.from(incrementTotalEls) as HTMLInputElement[]).map((item) =>
				Number(item.value)
			);
			return incrementValues.reduce((a, b) => a + b);
		} else return 0;
	};

	onMount(() => {
		grandTotal = getGrandTotal();
	});

	const addIncrement = () => {
		if (increments.length < 4) {
			increments = [...increments, 0];
		} else {
			alert(`Don't get greedy!`);
		}
	};
	const removeIncrement = () => {
		if (increments.length > 1) {
			increments = increments.slice(0, increments.length - 1);
		} else {
			alert(`You deserve a raise, don't stoop!`);
		}
	};
</script>

<div {id}>
	<form bind:this={formEl} on:input={() => (grandTotal = getGrandTotal())}>
		<label for="base_salary">Base salary (per month)</label>
		<input type="number" name="base_salary" id="base_salary" bind:value={baseSalary} />

		{#if increments.length > 0}
			{#each increments as increment, i (i)}
				<Increment index={i} bind:value={increment} bind:increments bind:baseSalary />
			{/each}
		{/if}
	</form>

	<div>
		<button on:click={addIncrement}>Add Increment</button>
		<button on:click={removeIncrement}>Remove Increment</button>
	</div>

	<p>Grand Total : {numberFormatter.format(grandTotal)}</p>
</div>
