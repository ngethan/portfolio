/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				red: {
					100: "#F1838B",
					200: "#EE6E78",
					300: "#EC5A65",
					400: "#EA4552",
					500: "#E8313F",
					600: "#D02C38",
					700: "#323232",
					800: "#A2222C",
					900: "#8B1D25",
				},
				gray: {
					100: "#FFFFFF",
					200: "#CCCCCC",
					300: "#999999",
					400: "#7F7F7F",
					500: "#666666",
					600: "#4C4C4C",
					700: "#323232",
					800: "#151615",
					900: "#000000",
				},
			},
		},
	},
	plugins: [],
};
