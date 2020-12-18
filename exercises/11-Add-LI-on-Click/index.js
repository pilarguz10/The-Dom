let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var nuevoLi = document.createElement("li");
	nuevoLi.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(nuevoLi);
});
