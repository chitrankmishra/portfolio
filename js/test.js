function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function test() {
	window.alert('Chal Raha hai...');
}

function toggleTheme() {
	var theme = document.getElementsByClassName('theme')[0];
	var themeButton = document.getElementById('theme-button');

	if (theme.getAttribute('href') == 'css/light.css') {
		themeButton.innerHTML = '	<i class="fas fa-moon tray-icon"></i>';
		theme.setAttribute('href', 'css/dark.css');
		setCookie('theme', 'dark', 1);
	} else {
		themeButton.innerHTML = '	<i class="fas fa-sun tray-icon"></i>';
		theme.setAttribute('href', 'css/light.css');
		setCookie('theme', 'light', 1);
	}
}
