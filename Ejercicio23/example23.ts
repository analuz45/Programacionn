import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (num1Str: string) => {
  rl.question('Introduce el segundo número: ', (num2Str: string) => {
    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);

    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, introduce valores numéricos válidos.');
    } else {
      const producto = num1 * num2;
      console.log(`El producto de ${num1} y ${num2} es: ${producto}`);
    }

    rl.close();
  });
});
