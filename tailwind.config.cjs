/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				corn_silk: '#FFF5E0',
				bittersweet: '#FF6969',
				venetian_red: '#C70039',
				regal_blue: '#141E46'
			}
		}
	},

	plugins: []
};

module.exports = config;
