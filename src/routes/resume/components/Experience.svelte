<script>
	let experiences = [
		{
			role: 'Web Developer',
			company: 'ABLE',
			timeline: '01/2022 - Present',
			location: 'Hyderabad, India',
			achievements: [
				'Appreciated for picking up new skills in a very short time',
				'Promoted to take up LEAD responsibilities in just 6 months after joining',
				'Contributing to 7 ongoing projects'
			]
		},
		{
			role: 'Software Engineer (IoT)',
			company: `Maker's Lab, Tech Mahindra`,
			timeline: '07/2018 - 01/2022',
			location: 'Pune, India',
			achievements: [
				'4 Awardees of BRAVO, 2 Special appreciation awards',
				'Represented Lab at various premier forums',
				`Been recognized as the future leader of Maker's Lab`
			]
		},
		{
			role: 'SME (Customer service)',
			company: 'Amazon',
			timeline: '08/2017 - 06/2018',
			location: 'Hyderabad, India',
			achievements: [
				'Awardee of Most valuable player (MVP)',
				`Secured position in top 100 CSA's at Amazon`,
				'Promoted to role of SME in just 4 months on floor'
			]
		}
	];
</script>

<!-- Work experience section -->
<section id="experience">
	<h2 class="section-title">WORK EXPERIENCE</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:gap-y-5">
		{#each experiences as experience, i}
			<div class:col-span-full={i == 0}>
				<h3 class="title">{experience.role}</h3>
				<h3 class="sub-title">{experience.company}</h3>
				<div class="timeline">
					<p>{experience.timeline}</p>
					<p>{experience.location}</p>
				</div>
				<div>
					{#if experience.achievements.length > 0}
						<h4 class="list-heading">Achievements/Tasks</h4>
						<ul class="list">
							{#each experience.achievements as achievement}
								<li>{achievement}</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
