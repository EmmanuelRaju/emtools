<script>
	import Icon from './Icon.svelte';
	// import html2pdf from 'html2pdf.js'
	import { onMount } from 'svelte';
	let element, downloadButton;
	// const download = () => {
	//   downloadButton.style.opacity = 0
	//   html2pdf().set({
	//     filename:'emmanuel-resume.pdf',
	//     enableLinks:true,
	//     pagebreak: { before: ['#projects','#education'] }
	//   }).from(element).save()
	//   setTimeout(()=>{
	//     downloadButton.style.opacity = 100
	//   },3000)
	// }

	onMount(() => {
		element = document.getElementById('app');
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- <div bind:this={downloadButton} on:click={download} class="fixed bottom-2 right-2 cursor-pointer rounded-full bg-accent text-white p-4 text-2xl">
  <Icon kind="download"/>
</div> -->
<a
	href="/resume/emmanuel-resume.pdf"
	download
	class="bg-accent fixed bottom-2 right-2 cursor-pointer rounded-full p-4 text-2xl text-white"
>
	<Icon kind="download" />
</a>
