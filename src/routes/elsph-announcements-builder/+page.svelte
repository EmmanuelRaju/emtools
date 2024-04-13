<script lang="ts">
	const weekdays = [
		{
			id: 'sunday',
			lang: {
				en: 'sunday',
				tel: 'sunday'
			}
		},
		{
			id: 'monday',
			lang: {
				en: 'monday',
				tel: 'monday'
			}
		},
		{
			id: 'tuesday',
			lang: {
				en: 'tuesday',
				tel: 'tuesday'
			}
		},
		{
			id: 'wednesday',
			lang: {
				en: 'wednesday',
				tel: 'wednesday'
			}
		},
		{
			id: 'thursday',
			lang: {
				en: 'thursday',
				tel: 'thursday'
			}
		},
		{
			id: 'friday',
			lang: {
				en: 'friday',
				tel: 'friday'
			}
		},
		{
			id: 'saturday',
			lang: {
				en: 'saturday',
				tel: 'saturday'
			}
		},
		{
			id: 'daily',
			lang: {
				en: 'daily',
				tel: 'daily'
			}
		}
	];
</script>

<form class="container mx-auto flex flex-col gap-8 p-10">
	{#each weekdays as weekday (weekday.id)}
		<div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
			<div>
				<h2 class="text-base font-semibold capitalize leading-7 text-gray-900">
					{weekday.id} schedule
				</h2>
			</div>

			<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
				<div class="sm:col-span-3">
					<label for="start-time" class="block text-sm font-medium leading-6 text-gray-900"
						>start time</label
					>
					<div class="mt-2">
						<input
							type="datetime-local"
							name="start-time"
							id="start-time"
							class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="end-time" class="block text-sm font-medium leading-6 text-gray-900"
						>end time</label
					>
					<div class="mt-2">
						<input
							type="datetime-local"
							name="end-time"
							id="end-time"
							class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="col-span-full">
					<label for="schedule-item" class="block text-sm font-medium leading-6 text-gray-900"
						>schedule item</label
					>
					<div class="mt-2">
						<input
							type="text"
							name="schedule-item"
							id="schedule-item"
							class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
			</div>
		</div>
	{/each}
</form>

<!-- <h1>el shaddai prayer house</h1>
<h2>announcements -</h2>
<div>
	<div>
		<p>18-03-2024</p>
		<p>monday</p>
		<p>somavaram</p>
	</div>
	<div>
		<p>07:00 pm</p>
	</div>
	<div>
		<p>sunday school teachers prayer (zoom)</p>
		<p>in telugu</p>
	</div>
</div> -->
