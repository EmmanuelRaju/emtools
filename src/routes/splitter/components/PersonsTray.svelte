<script lang="ts">
	import type { IPerson } from '../models';

	export let persons: IPerson[];
</script>

<div>
	<h3>Persons</h3>
	<ul>
		{#each persons as person}
			<li>
				<p>{person.name}</p>
				{#if person.upiId}
					<p>{person.upiId}</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>
