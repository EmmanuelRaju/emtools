<script>
	import Icon from './Icon.svelte';
</script>

<!-- Contact details -->
<ul id="contact">
	<li>
		<Icon kind="mail" />
		<p>eraj007@gmail.com</p>
	</li>
	<li>
		<Icon kind="phone" />
		<p>+91-7989234688</p>
	</li>
	<li>
		<Icon kind="pin" />
		<p>Hyderabad, India</p>
	</li>
	<li class="ml-2">
		<Icon kind="linkedIn" />
		<a href="https://linkedin.com/in/emmanuel-raju" target="_blank">
			linkedin.com/in/emmanuel-raju
		</a>
	</li>
</ul>

<style lang="postcss">
	ul {
		@apply grid grid-cols-1 gap-3 bg-secondary px-8 py-4 text-sm text-white sm:grid-cols-2;
	}

	ul li {
		@apply col-span-1 flex items-center gap-2;
	}
	/* a {
  @apply ml-1
} */
</style>
