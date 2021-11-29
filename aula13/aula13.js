// Objetos // 

// Exemplo 01
let meuPais = {
    nome: "Brasil",
    populacao: 202768562,
    capital: "Brasilia",
    dizerNacionalidade: function () {
        return "Nasci no " + this.nome;
    }
};
// console.log('A capital do ' + meuPais.nome + ' é ' + meuPais.capital)
// console.log(meuPais.dizerNacionalidade())

// Exemplo 02
let carro = {
    marca: 'Fiat',
    modelo: 'Uno',
}

function Carro(valorMarca, valorModelo){
    this.marca = valorMarca;
    this.modelo = valorModelo;
}
// console.log(carro);

// console.log(new Carro("Renault", "Clio"));



// JSON - JavaScript Objejact Notation (JSON) //
/* const usuario = {
    nome:'Miguel',
    email:'bacchinm@gmail.com',
    senha:'12345678',
    telefone:'(11)99999-9999',
    termoDeUso:true,
    idade:22
}
 */
// Exemplo Carro
/* const carro = {
    marca:'Fiat',
    modelo: 'Argo',
    potencia:102,
    acelerar(){
        console.log("Acelerando...");
    },
turbinar(){
    this.potencia = this.potencia * 2;
    }
} */

/* const pessoa = {
    nome:'Miguel',
    peso:74,
    altura:172,
    imc(){
        //console.log("imc: " + (this.peso/(this.altura*this.altura));
    }
} */
//pessoa.imc();

// Função construtora
/* function Pessoa(nomeParam,pesoParam,alturaParam){
    this.nome = nomeParam
    this.peso = pesoParam
    this.altura = alturaParam
    this.imc = function(){}
}

const miguel = new Pessoa("Miguel",74,1.72);
const pedro = new Pessoa("Pedro",70,1.75 );
const pessoas = [miguel,pedro]; */
//miguel.imc();

//pedro.imc();


// Aula Assíncrona JSON //

// JSON.parse()
let dadosJson = '{"cidade": "São Paulo", "bairro": "Morumbi"}';
let dadosConvertivos = JSON.parse(dadosJson);

console.log(dadosConvertivos);
// Será visto no console um objeto literal
// { cidade: 'São Paulo', bairro: 'Morumbi' }

// JSON.stringify()
let objetoLiteral = { nome: 'Carla', pais: 'Brasil' };
let dadosConvertivos = JSON.stringify(objetoLiteral);

console.log(dadosConvertivos);
// Será visto no console os dados em uma string do tipo JSON
// '{ "nome": "Carla", "pais": "Brasil"}'