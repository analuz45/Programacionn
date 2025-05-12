import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número entero: ', (num1Str: string) => {
  const num1 = parseInt(num1Str);

  if (isNaN(num1)) {
    console.log('Por favor, introduce un número entero válido.');
    rl.close();
    return;
  }

  if (num1 === 0) {
    console.log('El producto de 0 por cualquier número es 0');
    rl.close();
  } else {
    rl.question('Introduce el segundo número entero: ', (num2Str: string) => {
      const num2 = parseInt(num2Str);

      if (isNaN(num2)) {
        console.log('Por favor, introduce un número entero válido.');
      } else {
        console.log(`El producto de ${num1} y ${num2} es: ${num1 * num2}`);
      }

      rl.close();
    });
  }
});
