<script lang="ts">
	export let item = {
		time: '07:00 P.M',
		desc: {
			en: 'Bible study',
			te: 'బైబిల్ స్టడీ'
		}
	};
</script>

<li class="grid grid-cols-12 gap-3 pb-2">
	<p contenteditable="true" class="col-span-3 text-base leading-7">{item.time}</p>
	<div class="col-span-9 flex flex-col gap-1">
		<p contenteditable="true" class="text-lg">{item.desc.en}</p>
		<p contenteditable="true" class="text-base">{item.desc.te}</p>
	</div>
</li>
