<script lang="ts">
	import DayItem from './DayItem.svelte';

	export let data = {
		date: '07',
		day: {
			en: 'Monday',
			te: 'సోమవారం'
		},
		entries: [
			{
				time: '07:00 P.M',
				desc: {
					en: 'Bible study',
					te: 'బైబిల్ స్టడీ'
				}
			}
		]
	};

	let markup: HTMLElement;
</script>

<li
	bind:this={markup}
	class="group relative grid grid-cols-12 gap-10 pt-5 text-venetian_red first:pt-0"
>
	<div class="col-span-3 flex gap-5">
		{#if data.date}
			<p contenteditable="true" class=" text-5xl">{data.date}</p>
		{/if}
		<div class="flex flex-col gap-1">
			<p contenteditable="true" class="text-lg">{data.day.en}</p>
			<p contenteditable="true" class="text-base text-regal_blue">{data.day.te}</p>
		</div>
	</div>
	<ul class="col-span-9 border-l-2 border-venetian_red/90 pl-5">
		{#each data.entries as entry, i (i)}
			<DayItem item={entry} />
		{/each}
	</ul>
	<div class="absolute right-0 top-0 mt-1 hidden gap-2 group-hover:flex">
		<button class="btn" on:click={() => markup.remove()}>- Day</button>
		<button
			class="btn"
			on:click={() => {
				data.entries = [
					...data.entries,
					{
						time: '07:00 P.M',
						desc: {
							en: 'Bible study',
							te: 'బైబిల్ స్టడీ'
						}
					}
				];
			}}>+ Item</button
		>
		<button
			class="btn"
			on:click={() => {
				data.entries.pop();
				data.entries = data.entries;
			}}>- Item</button
		>
	</div>
</li>

<style lang="postcss">
	.btn {
		@apply rounded-md border border-dashed border-venetian_red px-3 py-2 text-xs hover:bg-venetian_red hover:text-corn_silk;
	}
</style>
