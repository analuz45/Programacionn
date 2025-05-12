"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Introduce el primer número entero: ', function (num1Str) {
    var num1 = parseInt(num1Str);
    if (isNaN(num1)) {
        console.log('Por favor, introduce un número entero válido.');
        rl.close();
        return;
    }
    if (num1 === 0) {
        console.log('El producto de 0 por cualquier número es 0');
        rl.close();
    }
    else {
        rl.question('Introduce el segundo número entero: ', function (num2Str) {
            var num2 = parseInt(num2Str);
            if (isNaN(num2)) {
                console.log('Por favor, introduce un número entero válido.');
            }
            else {
                console.log("El producto de ".concat(num1, " y ").concat(num2, " es: ").concat(num1 * num2));
            }
            rl.close();
        });
    }
});
