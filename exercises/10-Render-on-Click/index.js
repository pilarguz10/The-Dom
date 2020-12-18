let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var nuevoDiv = document.createElement("div");
	nuevoDiv.innerHTML = "Hello World";
	//document.querySelector("body").appendChild(nuevoDiv);
	document.body.appendChild(nuevoDiv);
	nuevoDiv.style.background = "yellow";
});
