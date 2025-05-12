// index.ts
// Función que se activa cuando presionas "Siguiente"
function mostrarSaludo() {
    var nombre = document.getElementById("nombre").value;
    // Si el nombre está vacío, muestra un alert
    if (nombre.trim()) {
        var saludo = "Hola, ".concat(nombre);
        document.getElementById("saludo").innerText = saludo;
        // Muestra el modal
        var modal = document.getElementById("modal");
        modal.style.display = "block";
    }
    else {
        alert("Por favor, ingresa un nombre.");
    }
}
// Función que se activa cuando presionas "Cerrar"
function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
