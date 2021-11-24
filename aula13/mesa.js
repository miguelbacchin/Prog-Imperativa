const conta = {
    numeroConta:00000,
    tipoConta:'corrente',
    saldo:3000,
    titular:'Jose da Silva'
}
// console.log(conta)

function Usuario (numeroContaParam,tipoContaParam,saldoParam,titularParam){
    this.numeroConta = numeroContaParam
    this.tipoConta = tipoContaParam
    this.saldo = saldoParam
    this.titular = titularParam
}

const abigael = new Usuario (5486273622,'Conta Corrente',27771,'Abigael Natte');
const ramon = new Usuario (1183971869,'Conta Poupança',8675,'Ramon Connell');
const jarret = new Usuario (9582019689,'Conta Poupança',27363,'Jarret Lafuente');
const ansel = new Usuario (1761924656,'Conta Poupança',32415,'Ansel Ardley');
const jacki = new Usuario (7401971607,'Conta Poupança',18789,'Jacki Shurmer');
const jobi = new Usuario (630841470,'Conta Corrente',28776,'Jobi Mawtus');
const thomasin = new Usuario (4223508636,'Conta Corrente',2177,'Thomasin Latour');
const lonnie = new Usuario (185979521,'Conta Poupança',25994,'Lonnie Verheijden');
const alonso = new Usuario (3151956165,'Conta Corrente',7601,'Alonso Wannan');
const benedite = new Usuario (2138105881,'Conta Poupança',33196,'Bendite Huggett');

const array = [abigael,ramon,jarret,ansel,jacki,jobi,thomasin,lonnie,alonso,benedite]

const banco = {
    clientes:array,
    deposito:function(titularConta,valorDeposito){

    }
}

console.log(array);