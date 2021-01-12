// Your code here

//Crear un nuevo elemento
// function crearNuevoLi() {
// 	let newLi = document.createElement("li");
// 	let valorinput = document.getElementById("myInput");
// 	var t = document.createTextNode(valorinput);

// 	newLi.appendChild(t);
// 	if (valorinput === "") {
// 		alert("You must write something!");
// 	} else {
// 		document.getElementById("addToDo").appendChild(li);
// 	}

// 	document.getElementById("myInput").value = "";
// }

function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("addToDo").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === "") {
		alert("You must write something!");
	} else {
		document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("addToDo").value = "";
}
