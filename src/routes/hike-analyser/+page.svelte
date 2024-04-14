<script lang="ts">
	import { fly } from 'svelte/transition';
	import IncrementPanel from './IncrementPanel.svelte';

	let incrementPanels = [crypto.randomUUID()];

	const addPanel = () => {
		incrementPanels = [...incrementPanels, crypto.randomUUID()];
	};
	const removePanel = () => {
		if (incrementPanels.length > 1) {
			incrementPanels = incrementPanels.slice(0, incrementPanels.length - 1);
		} else {
			alert(`You deserve a raise, don't stoop!`);
		}
	};

	let showActions: boolean = false;
</script>

<main class="p-10 font-roboto">
	<h1 class="text-center font-courgette text-5xl">Hike analyser</h1>

	<div class="fixed bottom-10 right-5 z-[1] flex flex-col items-center gap-3 text-center">
		<div class="h-[110px]">
			{#if showActions}
				<div transition:fly={{ y: 40 }} class="flex flex-col gap-5">
					<button
						on:click={addPanel}
						class="w-10 rounded-xl bg-black px-4 py-2 text-xl font-medium text-white">+</button
					>
					<button
						on:click={removePanel}
						class="w-10 rounded-xl bg-black px-4 py-2 text-xl font-medium text-white">-</button
					>
				</div>
			{/if}
		</div>
		<button
			on:click={() => (showActions = !showActions)}
			class="{showActions ? 'rotate-0' : 'rotate-180'} h-10 w-10 duration-300"
		>
			<img src="/icons/settings.svg" alt="settings" class="h-full w-full" />
		</button>
	</div>

	{#if incrementPanels.length > 0}
		<section class="mt-5 grid grid-cols-12 gap-5 p-5">
			{#each incrementPanels as panelId (panelId)}
				<IncrementPanel
					id={panelId}
					class="col-span-full rounded-xl border border-gray-100 bg-white p-5 shadow-lg md:col-span-6"
				/>
			{/each}
		</section>
	{/if}
</main>

<style lang="postcss">
	:global(html) {
		@apply bg-gray-100 accent-black;
	}
</style>
