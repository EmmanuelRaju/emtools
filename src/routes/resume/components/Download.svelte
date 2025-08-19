<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from './Icon.svelte';
	import { onMount } from 'svelte';

	let element: HTMLElement, downloadButton: HTMLButtonElement;
	const download = () => {
		if (!browser) {
			return;
		}
		downloadButton.style.opacity = '0';
		//@ts-expect-error lib loaded in app.html
		html2pdf()
			.set({
				filename: 'emmanuel-resume.pdf',
				enableLinks: true,
				pagebreak: { before: ['#education'] },
				image: { type: 'jpeg', quality: 1 },
				html2canvas: { scale: 2 }
			})
			.from(element)
			.save();
		setTimeout(() => {
			downloadButton.style.opacity = '100';
		}, 3000);
	};

	onMount(() => {
		element = document.getElementById('resume-container') as HTMLElement;
	});
</script>

<button
	bind:this={downloadButton}
	on:click={download}
	class="fixed bottom-2 right-2 cursor-pointer rounded-full bg-accent p-4 text-2xl text-white"
>
	<Icon kind="download" />
</button>
<!-- <a
	href="/resume/emmanuel-resume.pdf"
	download
	class="fixed bottom-2 right-2 cursor-pointer rounded-full bg-accent p-4 text-2xl text-white"
>
	<Icon kind="download" />
</a> -->
