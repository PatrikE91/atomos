module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx,html,css}", // Covers all relevant files in the src folder
	  ],
	theme: {
		extend: {
			screens: {
				mobile: "410px",
				// => @media (min-width: 480px) { ... }

				tablet: "640px",
				// => @media (min-width: 640px) { ... }

				laptop: "1024px",
				// => @media (min-width: 1024px) { ... }

				desktop: "1280px",
				// => @media (min-width: 1280px) { ... }
			},
			content: {
				//icons
				'login': 'url("./assets/icons/login.svg")',
				'lens': 'url("./assets/icons/lens.svg")',
				'menu': 'url("./assets/icons/menu.svg")',
				'cross': 'url("./assets/icons/cross.svg")',
				'arrow_right': 'url("./assets/icons/arrow_right.svg")',
				'arrow_right_black': 'url("./assets/icons/arrow_right_black.svg")',
				'arrow_down': 'url("./assets/icons/arrow_down.svg")',
				'pause': 'url("./assets/icons/pause.svg")',
				'sound_wave': 'url("./assets/icons/sound_wave.svg")',
				'quote': 'url("./assets/icons/quote.png")',
				
				// FIRST BLOCK
				'author_1': 'url("./assets/images/firstBlock/author_1.png")',
				'author_2': 'url("./assets/images/firstBlock/author_2.png")',
				'author_3': 'url("./assets/images/firstBlock/author_3.png")',
				'author_4': 'url("./assets/images/firstBlock/author_4.png")',
				'author_5': 'url("./assets/images/secondBlock/author_5.png")',
				'author_6': 'url("./assets/images/secondBlock/author_6.png")',
				'author_7': 'url("./assets/images/secondBlock/author_7.png")',

			},
			backgroundImage: {
				'doctors': 'url("./assets/images/firstBlock/doctors.jpg")',
				'river': 'url("./assets/images/firstBlock/river.png")',
				'people': 'url("./assets/images/firstBlock/people.jpg")',
				'ukraine': 'url("./assets/images/firstBlock/ukraine.png")',
				'woman': 'url("./assets/images/secondBlock/woman.jpg")',
				'tree': 'url("./assets/images/secondBlock/tree.png")',
				'meeting': 'url("./assets/images/secondBlock/meeting.jpg")',
				'box': 'url("./assets/images/secondBlock/box.jpg")',
				'womanB&W': 'url("./assets/images/secondBlock/womanB&W.jpg")',
			},
			backgroundPosition:{
				'50': '50%',
				'50_70': '50% 70%',
			},
		},
	},
	plugins: [],
};
