//65: Crea un programa que pida de forma repetitiva pares de números al usuario.
// Tras introducir cada par de números, responderá si el primero es múltiplo del segundo.

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const preguntarNumero = (mensaje: string): Promise<number> => {
    return new Promise((resolve) => {
        rl.question(mensaje, (respuesta) => {
            const numero = parseInt(respuesta, 10);
            resolve(numero);
        });
    });
};

const preguntarContinuar = (): Promise<string> => {
    return new Promise((resolve) => {
        rl.question("¿Desea continuar? (s/n): ", (respuesta) => {
            resolve(respuesta.toLowerCase());
        });
    });
};

const main = async () => {
    console.log("Verificador de Múltiplos");

    while (true) {
        const numero1 = await preguntarNumero("Ingrese el primer número: ");
        const numero2 = await preguntarNumero("Ingrese el segundo número: ");

        if (numero2 === 0) {
            console.log("No se puede dividir por cero.");
        } else if (numero1 % numero2 === 0) {
            console.log(`${numero1} es múltiplo de ${numero2}`);
        } else {
            console.log(`${numero1} no es múltiplo de ${numero2}`);
        }

        const continuar = await preguntarContinuar();
        if (continuar !== 's') {
            console.log("Programa finalizado.");
            rl.close();
            break;
        }
    }
};

main();
