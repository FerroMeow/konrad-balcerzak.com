/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			space: {
				header: '6rem',
			}
		}
	},

	plugins: []
};

module.exports = config;
