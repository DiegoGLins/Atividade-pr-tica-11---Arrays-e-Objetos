// Imprima no console a soma do salario de todos as pessoas do sexo
// Masculino

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


let cashMens = [];

data.filter((data) => {
  if (data.sexo.indexOf("M") === 0) {
  cashMens.push(data.salario)
  }
})
console.log(cashMens)

let addCashMens = cashMens.reduce(function (acc, valor) {
  return acc+= valor;
},0);

console.log(addCashMens)

