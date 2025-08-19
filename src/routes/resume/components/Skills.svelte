<script>
	let skills = [
		'HTML',
		'CSS',
		'JS',
		'Svelte',
		'SvelteKit',
		'11Ty',
		'Cypress',
		'Jest',
		'React',
		'Django',
		'IoT',
		'Redux',
		'React-Native',
		'Git',
		'Powerpoint',
		'Word',
		'Excel'
	];
</script>

<!-- Skills section -->
<section id="skills">
	<h2 class="section-title">SKILLS</h2>
	<ul class="mt-2 flex flex-wrap">
		{#each skills as skill}
			<li class="mx-1 my-1 rounded-md bg-primary px-4 py-1 font-semibold text-white">{skill}</li>
		{/each}
	</ul>
</section>
