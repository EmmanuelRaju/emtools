<script lang="ts">
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
</script>

<main>
	<h1>Hike analyser</h1>
	<section>
		<h3>Instructions</h3>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facilis sit, vero labore nisi,
			sint reprehenderit minima a, facere eius illo ipsam itaque quisquam. Consequuntur maxime
			suscipit expedita sunt necessitatibus?
		</p>
	</section>
	{#if incrementPanels.length > 0}
		<section class="flex gap-5">
			{#each incrementPanels as panelId (panelId)}
				<IncrementPanel id={panelId} />
			{/each}
		</section>
	{/if}

	<div>
		<button on:click={addPanel}>Add Panel</button>
		<button on:click={removePanel}>Remove Panel</button>
	</div>
</main>
