window.addEventListener('load', function() {
	var currentPage = document.getElementById("title").innerHTML;
	console.log("tag name is " + currentPage);

	var pages = [
		"home", "projects", "surfing", "climbing", "food"
	]
	
	var html = '<div id="content-menu"><ul>'

	pages.forEach(function(page) {	
		if (page == currentPage) {
			html += '<li><a href="' + page + '.html">> ' + page + '</a></li>'
		} else if (page == "home") {
			html += '<li><a href="index.html"> ' + page + '</a></li>'
		}
		 else {
			html += '<li><a href="' + page + '.html"> ' + page + '</a></li>'
		}
	});
	html += '</ul></div>';
	
	document.getElementById("menu-target").innerHTML = html;
});