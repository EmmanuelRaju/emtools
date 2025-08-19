<script>
	const projects = [
		{
			name: 'Apex Commerce - Digitalising storefronts',
			description: [
				'This application is for aiding businesses to make a mark in the e-commerce market. Developing the admin functionality for this application, primarily using cutting edge technologies like SvelteKit, Vite, Jest & Cypress.'
			]
		},
		{
			name: 'Ellipsis - Headless Cart SDK',
			description: [
				'This SDK is for adding cart functionality for e-commerce storefronts. My primary contributions include improvement of existing features, increasing code test coverage to 90+% and maintenance.'
			]
		},
		{
			name: 'Saut - Curriculum management of differently abled children',
			description: [
				'This is a web application for managing education curriculum of differently abled kids. It has been build to support English and Arabic languages.'
			]
		},
		{
			name: 'Storefronts - Mivi, Vibrant Living, Old School',
			description: [
				'These are live e-commerce storefronts of respective clients. Product catalog updation, frontend enhancements, client request implmentations are my responsibilities '
			]
		},
		{
			name: 'EtherWatch - Marketplace for satellite data',
			description: [
				'Building a web application with React as frontend and Django backend sourcing in data from partner APIs. This application will serve as a market place for satellite data for monitoring various aspects such as weather and asset conditions.'
			]
		},
		{
			name: 'eNetra - Smart energy management',
			description: [
				'Developed full stack application with Django as backend and React frontend implementing Redux pattern'
			]
		},
		{
			name: 'eFortify - Covid Tracker application',
			description: [
				'Was the key resource in developing the solution as a whole, majorly contributing in developing React-Native based mobile application'
			]
		},
		{
			name: 'Deep Tech Makers',
			description: [
				'Trained 200+ employees on IoT technology as part of company wide innovation upskilling'
			]
		},
		{
			name: 'Vetturino - Blackbox for automobiles',
			description: [
				'Been part of the project since inception and contributed at various fronts such as project architecture, dashboard designing and product development'
			]
		}
	];
</script>

<!-- Projects section -->
<section id="projects">
	<h2 class="section-title">PROJECTS</h2>
	{#each projects as project}
		<div>
			<h4 class="list-title">{project.name}</h4>
			<ul class="list">
				{#each project.description as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>
