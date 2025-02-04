let amigos = []; // Lista donde se almacenan los nombres de los amigos.
console.log(amigos); // Mostrar en consola la lista vacía inicialmente.

function asignarTextoElemento(elemento, texto) {
    // Función para asignar un texto a un elemento HTML.
    // Recibe el ID del elemento y el texto que se desea asignar.
    let elementoHTML = document.getElementById(elemento); // Obtiene el elemento HTML por su ID.
    elementoHTML.innerHTML = texto; // Asigna el texto al contenido del elemento.
    return; // No es necesario retornar nada, ya que solo se actualiza el contenido.
}

function agregarAmigo() {
    // Función para agregar un amigo a la lista de amigos.
    // Se ejecuta cuando el usuario envía un nombre a través del input.

    let amigo = document.getElementById('amigo').value; // Captura el valor ingresado en el campo de texto.

    if (amigo.trim() !== "") { // Verifica si el campo no está vacío después de eliminar los espacios extra.
        let amigoLowerCase = amigo.toLowerCase(); // Convierte el nombre ingresado a minúsculas para comparación insensible a mayúsculas.

        // Verifica si el nombre ya existe en la lista (comparando en minúsculas).
        if (amigos.some(existingAmigo => existingAmigo.toLowerCase() === amigoLowerCase)) {
            alert("Este nombre ya está en la lista de amigos."); // Muestra una alerta si el nombre ya está en la lista.
        } else {
            amigos.push(amigo); // Si el nombre no está repetido, se agrega al array de amigos.
            console.log("Lista de amigos:", amigos); // Muestra en consola la lista actualizada de amigos.
        }
    } else {
        alert("Por favor, inserte un nombre."); // Muestra una alerta si el campo está vacío o solo contiene espacios.
    }

    document.getElementById('amigo').value = ""; // Limpiar el campo de texto después de agregar el nombre.
}
