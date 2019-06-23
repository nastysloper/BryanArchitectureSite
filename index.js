function toggleMenu() {
	var menuIcon = document.getElementById("menuIcon")
	var menu = document.getElementById("menu")
	if (menu.style.display == "block") {
		menu.style.display = "none"
	} else {
		menu.style.display = "block"
	}
}