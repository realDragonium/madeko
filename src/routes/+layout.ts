/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
		sections: [
			{ slug: '', title: 'Info' },
			{ slug: 'eifile-to-info', title: 'Lees' },
			{ slug: 'info-to-eifile', title: 'Maak' }
		]
	};
}
