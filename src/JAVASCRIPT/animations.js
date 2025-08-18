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

export function startAnimation() {
	gsap.from('.container header .img', {
		x: -100,
		opacity: 0,
		scale: 0,
		duration: 0.4,
		ease: 'power2.inOut',
	});
	gsap.from('.container header .info-person-right-container .top-bar-person-name', {
		y: 100,
		opacity: 0,
		scale: 0,
		duration: 0.6,
		delay: 0.2,
		ease: 'power2.inOut',
	});
	gsap.from('.container header .info-person-right-container .info-row-bar-numbers', {
		y: -100,
		opacity: 0,
		scale: 0,
		duration: 0.6,
		delay: 0.55,
		ease: 'power2.inOut',
	});
	gsap.from('.container header .info-person-right-container .col-name h2', {
		y: 100,
		opacity: 0,
		scale: 0,
		duration: 0.6,
		delay: 0.75,
		ease: 'power2.inOut',
	});
	gsap.from('.container header .info-person-right-container .col-name p', {
		y: 100,
		opacity: 0,
		scale: 0,
		duration: 0.4,
		delay: 0.85,
		ease: 'power2.inOut',
	});
	gsap.from('.container header .info-person-right-container .col-name span', {
		y: 100,
		opacity: 0,
		scale: 0,
		duration: 0.4,
		delay: 0.95,
		ease: 'power2.inOut',
	});

	gsap.fromTo(
		'.story-container .card',
		{
			y: 100,
			opacity: 0,
			scale: 0,
		},
		{
			y: 0,
			opacity: 1,
			scale: 1,
			duration: 0.4,
			delay: 0.9,
			ease: 'power2.inOut',
			stagger: 0.2,
		}
	);

	gsap.from('.photos-container .photo', {
		opacity: 0,
		scale: 0,
		duration: 0.4,
		delay: 1,
		ease: 'power2.inOut',
	});
	gsap.from('.main-photos h2', {
		y: -100,
		opacity: 0,
		scale: 0,
		duration: 0.45,
		delay: 1.65,
		ease: 'power2.inOut',
	});
}
