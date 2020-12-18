//alert here
function myClickHandler(event) {
	alert("Hello World");
	console.log(event.target.value);
}

window.onload = function() {
	document.getElementById("testButton").addEventListener("click", myClickHandler);
};
