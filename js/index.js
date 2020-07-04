function initialize() {
	if (checkCookie('theme')) {
		theme = getCookie('theme');
		if (theme == 'dark') {
			toggleTheme();
		}
	} else {
		setCookie('theme', 'light', 1);
	}
	document.getElementById('repo-link').focus();
	document.getElementById('website-link').focus();
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

function toggleTrayActive(elementId) {
	var next = document.getElementById(elementId);
	var current = document.getElementsByClassName('tray-active');
	current[0].className = current[0].className.replace('tray-active', '');
	next.className += ' tray-active';
}

function showDescription(elem) {
	var name = elem.childNodes[3].innerHTML;
	var description = elem.childNodes[5].innerHTML;
	var repoLink = elem.childNodes[7].innerHTML;
	var websiteLink = elem.childNodes[9].innerHTML;
	console.log(name, description, repoLink, websiteLink);
	// console.log(elem.childNodes[3].innerHTML);
	document.getElementById('projects-description-section').style.display =
		'block';
	document.getElementById('project-name').innerHTML = name;
	document.getElementById('project-description-box').innerHTML = description;
	document.getElementById('repo-link').setAttribute('href', repoLink);
	document.getElementById('website-link').setAttribute('href', websiteLink);
}
