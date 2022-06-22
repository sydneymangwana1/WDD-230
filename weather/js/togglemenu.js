function toggleMenu() {
	document.getElementById("menu-primary").classList.toggle("open")
	document.getElementById("harmburger-button").classList.toggle("open")
}

const x = document.getElementById("harmburger-button")
x.onclick = toggleMenu;

