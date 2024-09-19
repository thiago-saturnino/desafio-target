/*1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
  console.log(soma);
}

console.log(soma);

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo 
valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
screva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência 
de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

function fibonacci(n) {
  let a = 0,
    b = 1,
    temp;
  for (let i = 0; i < n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }
  return a;
}

// Exemplo de uso
console.log(fibonacci(10)); // Saída: 55

/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média;
*/

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Rede não OK");
    }
    return response.json(); // Converte o JSON para um objeto JavaScript
  })
  .then((data) => {
    console.log(data); // Aqui está o objeto JavaScript
  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo JSON:", error);
  });

/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação 
que cada estado teve dentro do valor total mensal da distribuidora.  */

const faturamento = [
  {
    estado: "SP",
    faturamento: 67836.43,
  },
  {
    estado: "RJ",
    faturamento: 36678.66,
  },
  {
    estado: "MG",
    faturamento: 29229.88,
  },
  {
    estado: "ES",
    faturamento: 27165.48,
  },
  {
    estado: "Outros",
    faturamento: 19849.53,
  },
];

const faturamentoTotal = faturamento
  .map((valor) => valor.faturamento)
  .reduce((anterior, atual) => anterior + atual, 0);
console.log(faturamentoTotal);

function calcularPercentuais(array) {
  const total = faturamentoTotal;

  // Calcula o percentual de cada estado
  return array.map((item) => {
    const percentual = ((item.valor / faturamentoTotal) * 100).toFixed(2);
    return {
      estado: item.estado,
      percentual: percentual + "%",
    };
  });
}

/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou 
pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU*/

let palavra = "SORVETE";
let novaString = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  novaString += palavra[i];
}

console.log(novaString);
