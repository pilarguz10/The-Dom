window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
    for (let i = 0; i < countries.length; i++) 
    {
        //Guardo en una variable el elemento del DOM Select
        let element = document.getElementById("mySelect");
        //Guardo en una variable el nuevo elemento que creo opción
		let elementOption = document.createElement("option");

        //Pinto el valor de countries en cada opción 
        elementOption.innerHTML = countries[i];
        //Agrego la opción al select del DOM
		element.appendChild(elementOption);
	}

	//Escucho  cuando en el select se provoca el evento change y saco la alerta
	document.getElementById("mySelect").addEventListener("change", function() {
		alert(this.value);
	});
};
