//Juliana Sartori

//Dados para serem manipulados
const pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

//================= Exercicio 3 =================
const identifier3 = pessoas.filter((data) => {                 //optei pelo filter, para fazer a filtracao, e nao aparecer- undefined
  if (data.name == "Gabriel Gomes") {
    return data;
  }
});
console.log(identifier3);

//================= Exercicio 4 =================
const identifier4 = pessoas.map((data) => {
    if(data.name != "Fabiana Araújo")                            //como pede os nomes de Gabriel a Antonio no Exercio, logo, fabiana foi retirada
  return data.name;
});
console.log(identifier4);

//==================== Bônus ====================
function Bonus() {                                               //como nao falou nada sobre ter ou nao a Fabiana, optei por nao retirar
  return pessoas.map((item) => {
    return item.name.split(" ", 1);
  });
}

console.log(Bonus());

//================= Exercicio 5 =================
const identifier5 = pessoas.map((data, index) => {
  data.id = index + 1;
  return { id: data.id, name: data.name, age: data.age };
});
console.log(identifier5);

//================= Exercicio 6 =================
const identifier6 = identifier5.filter((data) => {
  if (data.age >= 18) {
    return data;
  }
});
console.log(identifier6);

// //================= Exercicio 7 =================
let aux = 0;
pessoas.forEach((data) => {
  aux = data.age + aux;
});
media = aux / pessoas.length;

console.log(`Média das Idades: ${media}`);
