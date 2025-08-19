<script>
	import './components/styles.pcss';
	import Achievements from './components/Achievements.svelte';
	import Contact from './components/Contact.svelte';
	import Credentials from './components/Credentials.svelte';
	import Download from './components/Download.svelte';
	import Education from './components/Education.svelte';
	import Experience from './components/Experience.svelte';
	import Header from './components/Header.svelte';
	import Projects from './components/Projects.svelte';
	import Skills from './components/Skills.svelte';
	import AboutMe from './components/AboutMe.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
	<title>Emmanuel's Resume</title>
</svelte:head>
<main id="resume-container" class="flex flex-col justify-center bg-white">
	<Header />
	<Contact />
	<div class="px-8 pb-10 pt-6">
		<AboutMe />
		<Skills />
		<Experience />
		<Projects />
		<Education />
		<Achievements />
		<Credentials />
	</div>
</main>

<Download />
