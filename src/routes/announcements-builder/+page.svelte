<script lang="ts">
	import * as htmlToImage from 'html-to-image';
	import DayEntry from './DayEntry.svelte';
	import { dayEntries as _dayEntries } from './data';

	let tableMarkup: HTMLElement;
	let printable: HTMLElement;

	const downloadImage = (node: HTMLElement) => {
		htmlToImage
			.toPng(node)
			.then(function (dataUrl) {
				// let img = new Image();
				// img.src = dataUrl;
				// img.style.marginTop = '40px';
				// document.body.appendChild(img);
				let link = document.createElement('a');
				link.download = 'announcements';
				link.href = dataUrl;
				link.click();
				link.remove();
			})
			.catch(function (error) {
				console.error('Something went wrong!', error);
			});
	};

	let dayEntries = _dayEntries;
</script>

<main class="mx-auto mt-10 w-[210mm]">
	<div bind:this={printable} class="rounded-xl bg-corn_silk p-10">
		<section class=" text-center">
			<h2
				contenteditable="true"
				class="font-courgette text-5xl text-venetian_red"
				spellcheck="false"
			>
				El Shaddai invites
			</h2>
			<p contenteditable="true" class="mt-1 font-courgette text-lg text-venetian_red/90">
				@ R.K Puram, Hyderabad [15th - 20th April]
			</p>
		</section>
		<ul
			bind:this={tableMarkup}
			class="mt-5 flex flex-col gap-5 divide-y-2 divide-dotted divide-venetian_red/90 rounded-xl border-2 border-dotted border-venetian_red p-5 font-roboto font-medium"
		>
			{#each dayEntries as day, i (i)}
				<DayEntry data={day} />
			{/each}
		</ul>
	</div>
</main>

<div class="fixed right-10 top-10 flex flex-col gap-5">
	<button
		class="btn"
		on:click={() => {
			dayEntries = [...dayEntries, dayEntries[-1]];
		}}>+ Add day</button
	>
	<button class="btn" on:click={() => downloadImage(printable)}>Download</button>
</div>

<style lang="postcss">
	@page {
		size: A4;
	}

	.btn {
		@apply rounded-xl bg-regal_blue px-4 py-2 text-white;
	}
</style>
