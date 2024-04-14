<script lang="ts">
	export let index: number, value: number, increments: number[], baseSalary: number;

	const numberFormatter = new Intl.NumberFormat('en-IN');

	$: totalMonths = 12 / increments.length;
	$: perMonth = baseSalary * (1 + value / 100);
	$: incrementTotal = totalMonths * perMonth;
</script>

<div>
	<label for="increment_range_{index + 1}">Increment {index + 1}</label>
	<input type="range" min="0" max="100" id="increment_range_{index + 1}" bind:value />
	<input type="number" id="increment_range_value_{index + 1}" bind:value />
	<input type="hidden" name="increment_total" bind:value={incrementTotal} />
</div>

<details>
	<summary>Summary</summary>
	<table>
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
