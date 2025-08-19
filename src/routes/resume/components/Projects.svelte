<script>
	const projects = [
		{
			name: 'Apex Subscriptions SDK - Headless account and order management system',
			description: [
				'This SDK enables businesses to quickly launch their daily subscription products like meals, dairy, etc. Spearheaded the idea and implemented the solution. It is being used by 10+ clients to date. Developed it using JavaScript, Figma design tokens, and SvelteKit.'
			]
		},
		{
			name: 'BRICKS UI components  - UI component library',
			description: [
				'This is a UI library built using Svelte and TailwindCSS. This library also comprises utilities that make building Admin dashboards a breeze. Components support theming with Figma design tokens.'
			]
		},
		{
			name: 'Apex CMS  - CMS admin for client content management',
			description: [
				'An in-house built CMS solution for managing clients website content and deployments. Supports building dynamic relations between different content types using entities and archetypes.'
			]
		},
		{
			name: 'Apex Commerce - Digitalising storefronts',
			description: [
				'This application is for aiding businesses to make a mark in the e-commerce market. Developed the admin functionality for this application, primarily using cutting-edge technologies like SvelteKit, Vite, Jest & Cypress.'
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
				'This is a web application for managing the education curriculum of differently abled kids. It has been built to support the English and Arabic languages.'
			]
		},
		{
			name: 'Storefronts - Mivi, Vibrant Living, Old School',
			description: [
				'These are live e-commerce storefronts of respective clients. Product catalogue updation, frontend enhancements, and client request implementations are my responsibilities.'
			]
		},
		{
			name: 'EtherWatch - Marketplace for satellite data',
			description: [
				'Built a web application with React as the frontend and Django backend, sourcing data from partner APIs. This application serves as a marketplace for satellite data, enabling monitoring of various aspects, including weather and asset conditions.'
			]
		},
		{
			name: 'eNetra - Smart energy management',
			description: [
				'Developed a full-stack application with Django as a backend and React frontend, implementing the Redux pattern'
			]
		},
		{
			name: 'eFortify - Covid Tracker application',
			description: [
				'Was the key resource in developing the solution as a whole, mainly contributing to developing a React-Native based mobile application'
			]
		}
		// {
		// 	name: 'Deep Tech Makers',
		// 	description: [
		// 		'Trained 200+ employees on IoT technology as part of company-wide innovation upskilling'
		// 	]
		// },
		// {
		// 	name: 'Vetturino - Blackbox for automobiles',
		// 	description: [
		// 		'Been part of the project since inception and contributed at various fronts such as project architecture, dashboard designing and product development'
		// 	]
		// }
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
