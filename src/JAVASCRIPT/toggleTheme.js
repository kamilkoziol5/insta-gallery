export default function toggleTheme() {
	const toggler = document.querySelector('.toggler');
	const icon = toggler.querySelector('span');

	toggler.addEventListener('click', () => {
		document.body.classList.toggle('active');

		if (document.body.classList.contains('active')) {
			icon.textContent = 'dark_mode';
		} else {
			icon.textContent = 'lightbulb';
		}
	});
}
