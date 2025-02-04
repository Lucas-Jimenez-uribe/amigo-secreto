let amigos = []; //lista de amigos
console.log(amigos)


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return
}


function agregarAmigo(){
    let amigo= document.getElementById('amigo').value;

    if (amigo.trim() !== "") {
      // Verificar que no esté vacío
      if (amigos.includes(amigo)) {
        alert("Este nombre ya está en la lista de amigos.");
      } else {
        amigos.push(amigo); // Agregar el nombre al array
        console.log("Lista de amigos:", amigos); // Mostrar la lista en consola
      }
    } else {
      alert("Por favor, inserte un nombre.");
    }

    document.getElementById('amigo').value = ""; // Limpiar el input
}
