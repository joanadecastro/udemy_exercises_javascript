/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

let Lado_1;
let Lado_2;
let Lado_3;

function classificacao_Triangulo(Lado_1, Lado_2, Lado_3) {
  if (Lado_1 !== Lado_2 && Lado_2 !== Lado_3 && Lado_3 !== Lado_1) {
    console.log("triangulo Escaleno");
  } else if (Lado_1 === Lado_2 && Lado_2 === Lado_3 && Lado_3 === Lado_1) {

    console.log("triangulo Equilatero");
  } else {
    console.log("triangulo Isosceles");
  }
}

classificacao_Triangulo(1, 2, 10);