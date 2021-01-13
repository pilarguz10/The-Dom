window.onload = function() {
	document.getElementById("addToDo").addEventListener("change", function(event) {
		alert(event.target.value);
		var lista = document.getElementById("myUL");
		var li = document.createElement("li");
		var i = document.createElement("i");
		i.classList.add("fa", "fa-trash");

		i.addEventListener("click", function(event) {
			event.target.parentElement.remove();
		});

		i.innerHTML = "" + event.target.value;
		li.appendChild(i);
		lista.appendChild(li);
		
	});

	document.querySelectorAll(".fa-trash").forEach(function(el) {
		el.addEventListener("click", function(event) {
			event.target.parentElement.parentElement.remove();
		});
		console.log(el);
	});
};
