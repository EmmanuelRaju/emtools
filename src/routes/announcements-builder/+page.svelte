<script lang="ts">
	import * as htmlToImage from 'html-to-image';
	let tableMarkup: HTMLElement;
	let printable: HTMLElement;
	let dayMarkup: HTMLDivElement;

	const generateImage = (node: HTMLElement) => {
		htmlToImage
			.toPng(node)
			.then(function (dataUrl) {
				var img = new Image();
				img.src = dataUrl;
				document.body.appendChild(img);
			})
			.catch(function (error) {
				console.error('Something went wrong!', error);
			});
	};
</script>

<main class="mx-auto w-[210mm]">
	<div bind:this={printable} class="bg-corn_silk text-bittersweet">
		<section class="text-center">
			<div>
				<h1 contenteditable="true" class="text-2xl">El Shaddai Prayer House</h1>
				<h3 contenteditable="true" class="text-base">R.K.Puram, Hyderabad, Telangana</h3>
			</div>
			<h2 contenteditable="true" class="mt-3 text-4xl">Weekly Announcements</h2>
		</section>
		<section class="mt-5" bind:this={tableMarkup}>
			<div class="grid grid-cols-12" bind:this={dayMarkup}>
				<div class="col-span-3 flex gap-5">
					<p contenteditable="true" class="text-5xl">07</p>
					<div class="flex flex-col gap-1">
						<p contenteditable="true" class="text-lg">Monday</p>
						<p contenteditable="true" class="text-lg">సోమవారం</p>
					</div>
				</div>
				<div class="col-span-9">
					<div class="grid grid-cols-12 gap-2 pb-2">
						<p contenteditable="true" class="col-span-4 whitespace-nowrap text-base leading-7">
							07:00 P.M - 08:00 P.M
						</p>
						<div class="col-span-8 flex flex-col gap-1">
							<p contenteditable="true" class="text-lg">Bible study</p>
							<p contenteditable="true" class="text-lg">బైబిల్ స్టడీ</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<button
	on:click={() => {
		let clone = dayMarkup.cloneNode(true);
		tableMarkup.appendChild(clone);
	}}>Add day</button
>
<button on:click={() => generateImage(printable)}>Generate Image</button>

<style lang="postcss">
	@page {
		size: A4;
	}
</style>
