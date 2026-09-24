function applyTheme(name) {
if (name === "light") {
document.body.className = "light";
} else {
document.body.className = "";
}
var btn = document.getElementById('themeBtn');
if (btn) {
if (name === "light") {
btn.innerText = "다크 모드";
} else {
btn.innerText = "라이트 모드";
}
}
}
function toggleTheme() {
if (document.body.className === "light") {
applyTheme("dark");
localStorage.setItem("theme", "dark");
} else {
applyTheme("light");
localStorage.setItem("theme", "light");
}
}
applyTheme(localStorage.getItem("theme"));