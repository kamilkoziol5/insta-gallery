import createLightbox from './createLighbox';

export default async function savedRelations() {
	try {
		const response = await fetch('DATA/photos.json');
		const countryPhotos = await response.json();
		const cards = document.querySelectorAll('.card');
		cards.forEach(card => {
			card.addEventListener('click', () => {
				const country = card.dataset.country;
				const photoSrc = countryPhotos[country];
				if (photoSrc) createLightbox(0, photoSrc, true);
			});
		});
	} catch (err) {
		console.error(err);
	}
}
