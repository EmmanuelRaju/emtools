<script lang="ts">
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
	<div class="col-span-4 flex gap-5">
		{#if data.date}
			<p contenteditable="true" class=" text-5xl">{data.date}</p>
		{/if}
		<div class=" flex flex-col gap-1">
			<p contenteditable="true" class=" text-lg">{data.day.en}</p>
			<p contenteditable="true" class=" text-lg">{data.day.te}</p>
		</div>
	</div>
	<ul class="col-span-8 border-l-2 border-venetian_red/90 pl-5">
		{#each data.entries as entry, i (i)}
			<li class="grid grid-cols-12 gap-3 pb-2">
				<p contenteditable="true" class="col-span-3 text-base leading-7">{entry.time}</p>
				<div class="col-span-9 flex flex-col gap-1">
					<p contenteditable="true" class="text-lg">{entry.desc.en}</p>
					<p contenteditable="true" class="text-lg">{entry.desc.te}</p>
				</div>
			</li>
		{/each}
	</ul>
	<button on:click={() => markup.remove()} class="absolute right-0 top-0 hidden group-hover:block"
		>❌</button
	>
</li>
