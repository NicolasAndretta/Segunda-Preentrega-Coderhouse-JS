let tareas = [];


function agregarTarea() {
    let input = document.getElementById('nuevaTarea');
    let tarea = input.value;
    if (tarea !== "") {
        tareas.push(tarea);
        input.value = ""; 
        mostrarTareas();
    }
}


function mostrarTareas() {
    let lista = document.getElementById('listaTareas');
    lista.innerHTML = ""; 
    for (let i = 0; i < tareas.length; i++) {
        let li = document.createElement('li');
        li.textContent = tareas[i];
        lista.appendChild(li);
    }
}
