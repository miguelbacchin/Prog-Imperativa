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

this.formataSaldo = function(){
    return "R$ " + this.saldo.toLocaleString('pt-BR');
}

let conta1 = {
    numero:3151956165,
    tipo:'Conta Corrente',
    saldo:7601,
    titular:'Alonso Wannan',
    formataSaldo:function(){
        return "R$ " + this.saldo.toLocaleString('pt-BR');
    }
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
/* console.log(conta1.saldo);
console.log(conta1.formataSaldo()); */

const lista = [conta1,conta2,conta3];

for(let i = 0; i<lista.length;i++){
    const numeroConta = i;
    const tipoConta = i % 2 == 0 ? 'Conta Corrente' : 'Conta Poupança';
    const saldo = Math.random() * 10000;
    const titular = 'Cliente' + i;
    const conta = new Conta(numeroConta,tipoConta,titular);
    lista.push(conta);
}

/* ou você pode fazer */

for(let i in lista){
    const conta = lista[i];
}

for(let conta of lista){

}

const numeros = [1,2,3];
for(let numero of numeros){
    console.log(numero);
}

const banco = {
    clientes:lista,
    consultarCliente:function(titularABuscar){
        for(let cliente of TouchList,clientes){
            if(cliente.titular == titularABuscar){
                return cliente;
            }
        }
    }
}