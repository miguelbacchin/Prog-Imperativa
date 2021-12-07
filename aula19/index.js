// Tradicional
function soma (a,b) {
    console.log("Soma: " + (a + b) );
}

// Forma Expressa
// soma2(5,5);
let soma2 = function (a,b){
    console.log("Soma2: " + (a + b) );
soma2(5,3);

// Arrow Function
let soma3 = (a,b) => {
    console.log("Soma3: " + (a + b) );
}
soma3(1,1);