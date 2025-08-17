import createLightbox from './createLighbox';

export default function openLighbox() {
	const photos = [...document.querySelectorAll('.photos-container .photo img')];
	const photosSrc = photos.map(img => img.src);

	photos.forEach((photo, index) => {
		photo.addEventListener('click', () => createLightbox(index, photosSrc));
	});
}
