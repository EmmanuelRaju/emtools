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
			},
			fontFamily: {
				courgette: ['Courgette', 'cursive'],
				roboto: ['Roboto', 'sans-serif']
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 100 }
				}
			},
			animation: {
				fadeIn: 'fadeIn 0.2s ease-in-out both'
			}
		}
	},

	plugins: []
};

module.exports = config;
