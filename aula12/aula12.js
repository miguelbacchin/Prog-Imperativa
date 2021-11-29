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
console.log(carro);

console.log(new Carro("Renault", "Clio"));