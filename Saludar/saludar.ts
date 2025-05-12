// saludar.ts

// Función que se activa cuando presionas "Siguiente"
function mostrarSaludo() {
    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  
    // Si el nombre está vacío, muestra un alert
    if (nombre.trim()) {
      const saludo = `Hola, ${nombre}`;
      (document.getElementById("saludo") as HTMLElement).innerText = saludo;
  
      // Muestra el modal flotante alineado
      const modal = document.getElementById("modal") as HTMLElement;
      modal.style.display = "block";
    } else {
      alert("Por favor, ingresa un nombre.");
    }
  }
  
  // Función que se activa cuando presionas "Cerrar"
  function cerrarModal() {
    const modal = document.getElementById("modal") as HTMLElement;
    modal.style.display = "none";
  }
  