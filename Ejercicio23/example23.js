"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Introduce el primer número: ', function (num1Str) {
    rl.question('Introduce el segundo número: ', function (num2Str) {
        var num1 = parseFloat(num1Str);
        var num2 = parseFloat(num2Str);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Por favor, introduce valores numéricos válidos.');
        }
        else {
            var producto = num1 * num2;
            console.log("El producto de ".concat(num1, " y ").concat(num2, " es: ").concat(producto));
        }
        rl.close();
    });
});
