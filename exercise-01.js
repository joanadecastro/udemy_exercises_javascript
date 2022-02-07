/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

let valor1;
let valor2;
let soma;
let subt;
let mult;
let div;

function result(valor1, valor2) {
  soma = valor1 + valor2;
  console.log("soma= " + soma);

  subt = valor1 - valor2;
  console.log("subtraçao= " + subt);

  mult = valor1 * valor2;
  console.log("multiplicaçao= " + mult);

  div = valor1 / valor2;
  console.log("divisao= " + div);
}

result(10, 2);

/*function result(valor1, valor2) {
  console.log(
    valor1 + valor2,
    valor1 - valor2,
    valor1 * valor2,
    valor1 / valor2
  );
}

result(10, 2)*/
