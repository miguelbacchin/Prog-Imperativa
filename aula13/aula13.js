// Objetos
// JSON - JavaScript Objejact Notation (JSON)
const usuario = {
    nome:'Miguel',
    email:'bacchinm@gmail.com',
    senha:'12345678',
    telefone:'(11)99999-9999',
    termoDeUso:true,
    idade:22
}

// Exemplo Carro
const carro = {
    marca:'Fiat',
    modelo: 'Argo',
    potencia:102,
    acelerar(){
        console.log("Acelerando...");
    },
turbinar(){
    this.potencia = this.potencia * 2;
    }
}

const pessoa = {
    nome:'Miguel',
    peso:74,
    altura:172,
    imc(){
        //console.log("imc: " + (this.peso/(this.altura*this.altura));
    }
}
//pessoa.imc();

// Função construtora
function Pessoa(nomeParam,pesoParam,alturaParam){
    this.nome = nomeParam
    this.peso = pesoParam
    this.altura = alturaParam
    this.imc = function(){}
}

const miguel = new Pessoa("Miguel",74,1.72);
const pedro = new Pessoa("Pedro",70,1.75 );
const pessoas = [miguel,pedro];
miguel.imc();
//pedro.imc();
