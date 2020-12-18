//your code here
function myClickHandler(event) {
	alert("Hello World");
	console.log(event.target.value);
}

window.onload = function() {
	document.querySelector("#theTitle").addEventListener("click", myClickHandler);
};
