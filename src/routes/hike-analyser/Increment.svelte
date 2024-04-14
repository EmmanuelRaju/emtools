<script lang="ts">
	export let index: number,
		value: number,
		increments: { value: number; baseSalary: number; perMonth: number }[],
		baseSalary: number;

	const numberFormatter = new Intl.NumberFormat('en-IN');

	$: totalMonths = 12 / increments.length;
	$: perMonth = baseSalary * (1 + value / 100);
	$: incrementTotal = totalMonths * perMonth;

	$: if (perMonth) {
		increments[index].perMonth = perMonth;
	}
</script>

<div class="rounded-xl bg-neutral-50 p-5">
	<div class="">
		<label for="increment_range_{index + 1}" class="mb-3 text-sm text-gray-700"
			>Increment {index + 1}</label
		>
		<div class="flex flex-col gap-3 lg:flex-row">
			<input
				type="range"
				min="0"
				max="100"
				id="increment_range_{index + 1}"
				bind:value
				class="w-full"
			/>
			<input
				type="number"
				id="increment_range_value_{index + 1}"
				bind:value
				class="w-full rounded-xl bg-gray-100 p-2 text-center"
			/>
			<input type="hidden" name="increment_total" bind:value={incrementTotal} />
		</div>
	</div>

	<details class="group mt-5">
		<summary class="flex cursor-pointer list-none items-center justify-between py-2 font-medium">
			<span class="text-xs">Show summary</span>
			<span class="transition group-open:rotate-180">
				<!-- <img src="/icons/chevron.svg" alt="chevron" /> -->
				<svg
					fill="none"
					height="24"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					width="24"
					><path d="M6 9l6 6 6-6"></path>
				</svg>
			</span>
		</summary>
		<table class="w-full table-auto group-open:animate-fadeIn">
			<tr>
				<td>Total months</td>
				<td>{totalMonths}</td>
			</tr>
			<tr>
				<td>Per month</td>
				<td>{numberFormatter.format(perMonth)}</td>
			</tr>
			<tr>
				<td>Total</td>
				<td>{numberFormatter.format(incrementTotal)}</td>
			</tr>
		</table>
	</details>
</div>

<style lang="postcss">
	td {
		@apply border-2 border-gray-100 px-2 py-1;
	}

	tr :nth-child(1) {
		@apply text-sm;
	}
	tr :nth-child(2) {
		@apply text-right font-medium;
	}
</style>
