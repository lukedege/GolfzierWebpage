
document.write('<meta charset="UTF-8">');
document.write('<meta name="keywords" content="Golfzier, Unity, C#">');
document.write('<meta name="author" content="Michael Marchesan, Luca Di Gennaro">');

// Title and favicon
document.write('<title>Golfzier</title>');
document.head.appendChild(Object.assign(document.createElement("link"), { rel: "icon", href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⛳</text></svg>" }))

// Setup latex stuff
//document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>');

/* ---- MATHJAX3 CONFIG ---- */
MathJax = {
	tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
	svg: { fontCache: 'global' }
};

document.write('<script id="MathJax-script" src="scripts/MathJax3-svg.min.js"></script>');

// Imports colors for our theme, and different highlightjs themes
const dark_theme = window.location.search.indexOf('?dark') === 0;

if (dark_theme)
{
	document.write('<link rel="stylesheet" href="./styles/highlight/vs2015.min.css" type="text/css" />');
	document.write('<link rel="stylesheet" href="./styles/dark.css" type="text/css" />');
}
else
{
	document.write('<link rel="stylesheet" href="./styles/highlight/vs.min.css" type="text/css" />');
	document.write('<link rel="stylesheet" href="./styles/light.css" type="text/css" />');
};

// Base stylesheet
document.write('<link rel="stylesheet" href="./styles/base.css" type="text/css" />');

// Setup highlightjs
document.write('<script src="scripts/highlight/highlight.min.js"></script>');
document.write('<script>hljs.highlightAll();</script>');

const theme_str = dark_theme ? "?dark" : "";

function spawn_tab(label, address)
{
	let tmp = document.createElement("a");
	let destination = address + ".html" + theme_str;
	tmp.setAttribute("href", destination);
	tmp.innerHTML = label;
	tmp.classList.add("tablink");
	tmp.style.width = "22%";
	//TODO if destination == current location, add "current" too
	return tmp;
}

window.onload = () =>
{
	let tabs = document.getElementById("tabs");
	tabs.appendChild(spawn_tab("🏠&#xFE0E; Home"   , "index" ));
	tabs.appendChild(spawn_tab("🎮&#xFE0E; Applet" , "applet"));
	tabs.appendChild(spawn_tab("🎓&#xFE0E; Teoria" , "theory"));
	tabs.appendChild(spawn_tab("📖&#xFE0E; Manuale", "manual"));

	let theme_tab = document.createElement("a");
	theme_tab.setAttribute("href", dark_theme ? "?" : "?dark");
	theme_tab.innerHTML = "⬤&#xFE0E; Cambia Sfondo";
	theme_tab.classList.add("tablink");
	theme_tab.style.width = "12%";

	tabs.appendChild(theme_tab);
};