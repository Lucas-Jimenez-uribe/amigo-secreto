let amigos = []; // Lista donde se almacenan los nombres de los amigos.
console.log(amigos); // Mostrar en consola la lista vacía inicialmente.


function agregarAmigo() {
  // Función para agregar un amigo a la lista de amigos.
  // Se ejecuta cuando el usuario envía un nombre a través del input.

  let amigo = document.getElementById("amigo").value; // Captura el valor ingresado en el campo de texto.

  if (amigo.trim() !== "") {
    // Verifica si el campo no está vacío después de eliminar los espacios extra.
    let amigoLowerCase = amigo.toLowerCase(); // Convierte el nombre ingresado a minúsculas para comparación insensible a mayúsculas.

    // Verifica si el nombre ya existe en la lista (comparando en minúsculas).
    if (
      amigos.some(
        (existingAmigo) => existingAmigo.toLowerCase() === amigoLowerCase
      )
    ) {
      alert("Este nombre ya está en la lista de amigos."); // Muestra una alerta si el nombre ya está en la lista.
    } else {
      amigos.push(amigo); // Si el nombre no está repetido, se agrega al array de amigos.
      console.log("Lista de amigos:", amigos); // Muestra en consola la lista actualizada de amigos.
    }
  } else {
    alert("Por favor, inserte un nombre."); // Muestra una alerta si el campo está vacío o solo contiene espacios.
  }

  document.getElementById("amigo").value = ""; // Limpiar el campo de texto después de agregar el nombre.

  // Llamar a la función para actualizar la lista al cargar la página o cuando sea necesario
  actualizarLista();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento <ul> donde se mostrarán los amigos
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla para evitar duplicados

    amigos.forEach((amigo) => { // Recorrer el array de amigos
        let li = document.createElement("li"); // Crear un nuevo elemento <li> para cada amigo
        li.textContent = `${amigo}`; // Asignar el nombre del amigo al contenido del <li>
        lista.appendChild(li); // Agregar el <li> al <ul> en el DOM
    });
}




