// Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.

const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
];

let counterWoman = 0;
for (const obj of data) {
  if (obj.sexo === "F") counterWoman++;
}

console.log(counterWoman)
