<script>
	let credentials = [
		{
			text: 'The Complete 2020 Web Development Bootcamp',
			subtext: 'A full-stack course on web development by Dr. Angela Yu (Udemy)'
		},
		{
			text: 'React - The complete guide',
			subtext: 'A course on React which covers hooks, redux, Typescript etc by Academind (Udemy)'
		},
		{
			text: 'LinkedIn certifications',
			subtext:
				'Cleared LinkedIn assessments on HTML, CSS, JS, React, Front- End Development with an average rating of TOP 3%'
		},
		{
			text: 'Amongst TOP 1% out of 256942 participants in cssbattle.dev',
			subtext: ''
		},
		{
			text: 'SILVER badge in 10 Days of JS challenge of HackerRank',
			subtext: ''
		}
	];
</script>

<!-- Certificates/Credentials section -->
<section id="credentials">
	<h2 class="section-title">CERTIFICATES & CREDENTIALS</h2>
	<ul class="list">
		{#each credentials as credential}
			<li>
				<p>{credential.text}</p>
				{#if credential.subtext}
					<p class="text-xs italic">{credential.subtext}</p>
				{/if}
			</li>
		{/each}
	</ul>
</section>
