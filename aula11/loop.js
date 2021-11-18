// for (inicio, condicao ; modificador){
    // código que será executado em cada repetição
// }


/* for (let i = 0; i <= 4; i++){
    console.log(i);
} */

// Exercício 01
for (let i = 0; i <=5; i++){
    //console.log("Olá mundo")
}

//Exercício 02
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
//        console.log("O número " + i + " é par");
    } else {
//        console.log("O número " + i + " é impar");
    }
}

// Exercício 03
for (let i = 1; i <=10; i++){
    console.log("A tabuada de " + i + " é: ");
    console.log("________________________\n")
for(let j = 1; j <=10; j++){
    console.log (i + "X" + j + '=' + i*j);
}
}
