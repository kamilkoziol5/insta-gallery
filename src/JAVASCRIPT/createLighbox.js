import { animateLighbox, hideLightbox } from './animations';

export default function createLightbox(currentIndex, photosSrc, showThumbnails = false) {
	const lightbox = document.createElement('div');
	lightbox.classList.add('lightbox');

	const thumbnailsHTML = showThumbnails ? createThumnails(photosSrc, currentIndex) : '';

	lightbox.innerHTML = `
        <div class="lightbox-box">
            <div class="lightbox-img-cnt">
                <button class="lightbox-prev"><span class="material-symbols-outlined">arrow_back_ios</span></button>
                <button class="lightbox-next"><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                <img src="${photosSrc[currentIndex]}" class="lightbox-img" alt="">
            </div>
            ${thumbnailsHTML}
        </div>
        <button class="lightbox-close"><span class="material-symbols-outlined">close</span></button>
    `;

	document.body.appendChild(lightbox);
	document.body.style.overflow = 'hidden';
	animateLighbox();

	const imgEl = lightbox.querySelector('.lightbox-img');
	const closeBtn = lightbox.querySelector('.lightbox-close');
	const nextBtn = lightbox.querySelector('.lightbox-next');
	const prevBtn = lightbox.querySelector('.lightbox-prev');

	const thumbs = showThumbnails ? lightbox.querySelectorAll('.thumb') : [];

	function updateThumbnails() {
		if (!thumbs.length) return;
		thumbs.forEach((t, i) => {
			t.classList.toggle('active', i === currentIndex);
		});
	}

	closeBtn.addEventListener('click', () => {
		hideLightbox();
		setTimeout(() => {
			lightbox.remove();
			document.body.style.overflow = 'auto';
		}, 550);
	});

	nextBtn.addEventListener('click', () => {
		currentIndex = (currentIndex + 1) % photosSrc.length;
		imgEl.src = photosSrc[currentIndex];
		updateThumbnails();
	});

	prevBtn.addEventListener('click', () => {
		currentIndex = (currentIndex - 1 + photosSrc.length) % photosSrc.length;
		imgEl.src = photosSrc[currentIndex];
		updateThumbnails();
	});

	thumbs.forEach(thumb => {
		thumb.addEventListener('click', () => {
			currentIndex = parseInt(thumb.dataset.index);
			imgEl.src = photosSrc[currentIndex];
			updateThumbnails();
		});
	});
}

function createThumnails(photosSrc, currentIndex) {
	return `
	<div class="thumbs-container">
			${photosSrc
				.map((src, i) => `<img src="${src}" class="thumb ${i === currentIndex ? 'active' : ''}" data-index="${i}">`)
				.join('')}
	 </div>`;
}
