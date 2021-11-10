let texto = "Esse é um texto para utilizar";
console.log(texto.lastIndexOf('5'));

// console.log(texto.replaceAll(" ",""));

console.log(texto.slice(2,10));

let nome = "Miguel Bacchin";
let nomeESobrenome = nome.split(" ");
console.log(nomeESobrenome);
const primeiroNome = nomeESobrenome[0];
const sobrenome = nomeESobrenome[1];

if(nome.length > 1 && sobrenome == null){
    //cadastrar
} else {
    console.log("Usuário inválido");
}

let numeros = [10,20,30,15];
let nomes = ['Zé', 'de', 'Sá'];
let frutas = [ 'melancia', 'abacaxi'];
let arrayMisto = [true,1,'Zé',[1,2,3]];

console.log(arrayMisto[3][0]);

//Adiciona no final
arrayMisto.push(10);
//Remove do final
arrayMisto.pop();
//Adiciona no início
arrayMisto.unshift(10);
//Remove do início
arrayMisto.shift();
//Junta os elementos da array
arrayMisto.join()