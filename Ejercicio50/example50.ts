//50: Crea un programa que pida al usuario dos números enteros y diga si son iguales o, en caso contrario, 
// cuál es el mayor de ellos.

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

const main = async () => {
    console.log("Comparador de Números Enteros");
    const numero1 = await preguntarNumero("Ingrese el primer número: ");
    const numero2 = await preguntarNumero("Ingrese el segundo número: ");

    if (numero1 === numero2) {
        console.log("Ambos números son iguales.");
    } else {
        const mayor = numero1 > numero2 ? numero1 : numero2;
        console.log(`El número mayor es: ${mayor}`);
    }

    rl.close();
};

main();
""
