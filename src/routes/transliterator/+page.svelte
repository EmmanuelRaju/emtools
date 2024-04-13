<script>
	import { onMount } from 'svelte';

	//   {
	//     "ENGLISH": "en",
	//     "AMHARIC": "am",
	//     "ARABIC": "ar",
	//     "BENGALI": "bn",
	//     "CHINESE": "zh",
	//     "GREEK": "el",
	//     "GUJARATI": "gu",
	//     "HINDI": "hi",
	//     "KANNADA": "kn",
	//     "MALAYALAM": "ml",
	//     "MARATHI": "mr",
	//     "NEPALI": "ne",
	//     "ORIYA": "or",
	//     "PERSIAN": "fa",
	//     "PUNJABI": "pa",
	//     "RUSSIAN": "ru",
	//     "SANSKRIT": "sa",
	//     "SERBIAN": "sr",
	//     "SINHALESE": "si",
	//     "TAMIL": "ta",
	//     "TELUGU": "te",
	//     "TIGRINYA": "ti",
	//     "URDU": "ur"
	// }

	onMount(() => {
		console.log('called');

		google.load('elements', '1', {
			packages: 'transliteration'
		});

		var options = {
			sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH,
			destinationLanguage: [google.elements.transliteration.LanguageCode.TELUGU],
			shortcutKey: 'ctrl+g',
			transliterationEnabled: true
		};

		// Create an instance on TransliterationControl with the required
		// options.
		var control = new google.elements.transliteration.TransliterationControl(options);

		// Enable transliteration in the textbox with id
		// 'transliterateTextarea'.
		control.makeTransliteratable(['transliterateTextarea']);
	});
</script>

<main class="flex flex-col items-center justify-center p-10">
	<h1>TRANSLITERATOR</h1>
	<p>Type in english to get telugu script</p>
	<br />
	<textarea class="border" id="transliterateTextarea" style="width: 600px; height: 200px"
	></textarea>
</main>
