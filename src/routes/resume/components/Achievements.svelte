<script>
	let achievements = [
		'Graduated in distinction without a single backlog ever!',
		'Worked as an event coordinator at BHASWARA 2k14.',
		'Winner of an event conducted by ALFAMATICA 2k15.',
		'Runner in paper presentation conducted by BHASWARA 2k15.',
		'Winner of Technical Quiz 2015 (Mechanical department).',
		'Winner of paper presentation conducted by ELECTRIKA 2k16.',
		'Winner of PHOENIX event conducted by NEN 2016.',
		'Winner of MEMO FIESTA event conducted by ALFAMATICA 2k17'
	];
</script>

<!-- Academic achievements section -->
<section id="achievements">
	<h2 class="section-title">ACADEMIC ACHIEVEMENTS</h2>
	<ul class="list">
		{#each achievements as achievement}
			<li>{achievement}</li>
		{/each}
	</ul>
</section>
