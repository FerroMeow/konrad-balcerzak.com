/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			space: {
				header: '8rem',
			}
		}
	},

	plugins: []
};

module.exports = config;
