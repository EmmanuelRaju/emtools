<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Increment from './Increment.svelte';
	import { fly } from 'svelte/transition';

	export let id: string;

	let baseSalary: number = 50000;

	let increments: { value: number; baseSalary: number; perMonth: number }[] = [
		{ value: 0, baseSalary, perMonth: baseSalary }
	];

	let formEl: HTMLFormElement;

	let grandTotal: number;

	const numberFormatter = new Intl.NumberFormat('en-IN');

	const getGrandTotal = () => {
		const incrementTotalEls = formEl.querySelectorAll('input[name="increment_total"]');
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
			increments = [
				...increments,
				{
					value: 0,
					baseSalary: getBaseSalary(increments.length),
					perMonth: getBaseSalary(increments.length)
				}
			];
		} else {
			alert(`Don't get greedy!`);
		}
	};
	const removeIncrement = async () => {
		if (increments.length > 1) {
			increments = increments.slice(0, increments.length - 1);
			await changeHandler();
		} else {
			alert(`You deserve a raise, hold on!`);
		}
	};

	const getBaseSalary = (index: number) => {
		if (index === 0) {
			return baseSalary;
		}
		return increments[index - 1].perMonth;
	};

	const getEffectiveHike = () => {
		if (baseSalary && increments.length > 0) {
			let hikes = increments.map((item) => item.value);
			return hikes.reduce((prev, current) => {
				return prev * (1 + current / 100);
			});
		} else return 0;
	};

	let showActions: boolean = false;

	const changeHandler = async () => {
		increments.forEach((increment, i) => (increment.baseSalary = getBaseSalary(i)));
		increments = increments;
		await tick();
		grandTotal = getGrandTotal();
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	{id}
	class="relative {$$props.class || ''} h-max"
	transition:fly={{ x: -100 }}
	on:mouseenter={() => (showActions = true)}
	on:mouseleave={() => (showActions = false)}
>
	<form bind:this={formEl} on:input={changeHandler} class="text-gray-800">
		<div class="flex flex-col">
			<label for="base_salary" class="mb-0.5 text-sm text-gray-700">Base salary (per month)</label>
			<input
				type="number"
				name="base_salary"
				id="base_salary"
				bind:value={baseSalary}
				on:input={changeHandler}
				class="w-full rounded-xl bg-gray-100 p-2"
			/>
		</div>

		{#if increments.length > 0}
			<div class="mt-5 flex flex-col gap-5">
				{#each increments as increment, i (i)}
					<Increment
						index={i}
						bind:value={increment.value}
						bind:increments
						baseSalary={getBaseSalary(i)}
					/>
				{/each}
			</div>
		{/if}
	</form>
	<div class="mt-5 flex justify-between gap-3">
		<button
			on:click={addIncrement}
			class="flex flex-1 items-center justify-center rounded-lg bg-black px-4 py-2 text-xs font-medium text-white"
			>+ increment</button
		>
		<button
			on:click={removeIncrement}
			class="flex flex-1 items-center justify-center rounded-lg border bg-black px-4 py-2 text-xs font-medium text-white invert"
			>- increment</button
		>
	</div>

	<div class="mt-5 flex flex-col text-xl font-medium lg:flex-row lg:justify-between">
		{#key grandTotal}
			<div class="grid grid-cols-12 justify-between lg:flex lg:gap-1">
				<p class="col-span-6">Effective hike</p>
				<p class="col-span-1">:</p>
				<p class="col-span-5 text-right">{numberFormatter.format(getEffectiveHike())} %</p>
			</div>
		{/key}
		<div class="grid grid-cols-12 justify-between lg:flex lg:gap-1">
			<p class="col-span-6">Grand Total</p>
			<p class="col-span-1">:</p>
			<p class="col-span-5 text-right">{numberFormatter.format(grandTotal)}</p>
		</div>
	</div>
</div>
