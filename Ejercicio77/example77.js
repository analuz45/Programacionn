//77: Crea un programa que escriba en pantalla los números del 1 al 50 que sean múltiplos de 3
//(pista: habrá que recorrer todos esos números y ver si el resto de la división entre 3 resulta 0).
console.log("Números del 1 al 50 que son múltiplos de 3:");
var multiplosDeTres = []; // 👉 Nueva lista para almacenar los múltiplos
for (var i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        multiplosDeTres.push(i); // 👉 Agrego el múltiplo al array
    }
}
console.log(multiplosDeTres.join(", ")); // 👉 Muestro la lista en una sola línea
