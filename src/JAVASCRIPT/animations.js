import gsap from 'gsap';

export function animateLighbox() {
	gsap.from('.lightbox .lightbox-box', {
		opacity: 0,
		scale: 0,
		duration: 0.5,
		ease: 'power1.inOut',
	});

	gsap.fromTo(
		'.lightbox .lightbox-next',
		{ opacity: 0, x: 100 },
		{ opacity: 1, x: 0, duration: 0.25, delay: 0.35, ease: 'power1.inOut' }
	);

	gsap.fromTo(
		'.lightbox .lightbox-prev',
		{ opacity: 0, x: -100 },
		{ opacity: 1, x: 0, duration: 0.25, delay: 0.35, ease: 'power1.inOut' }
	);
}

export function hideLightbox() {
	gsap.to('.lightbox .lightbox-box', {
		opacity: 0,
		scale: 0,
		duration: 0.55,
		ease: 'back.inOut',
	});
}
