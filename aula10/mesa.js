// Array invertido
let numeros = [1,2,3,4,5];
function imprimirInverso(array){
    let arrayRetorno = [];
    const len = array.length;
    for(let i = 0; i < len; i++){
        arrayRetorno.push(array.pop())
    }
    return arrayRetorno;
}
console.log(imprimirInverso(numeros));

// Somar Array
let numeros = [1,2,3];
const result = numeros.some((1,2,3))
console.log(result)