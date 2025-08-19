<script>
	let skills = [
		'HTML',
		'CSS',
		'JS',
		'Svelte',
		'SvelteKit',
		'React',
		'React Native',
		'Expo',
		'Node JS',
		'11Ty',
		'Cypress',
		'Jest',
		'MongoDB',
		'Redux',
		'Git',
		'Figma'
		// 'Powerpoint',
		// 'Word',
		// 'Excel'
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
