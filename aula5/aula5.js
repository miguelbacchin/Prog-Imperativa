// Função 01
function function1(polegadas){
    let centimetros = polegadas * 2.54
return centimetros
}

// Função 02
function function2(string){
    let URL = "http://www." + string + "com.br"
    return URL
}

// Função 03
function function3 (string){
    let URL = string + "!"
    return URL
}

// Função 04
function function4 (idadeHumano){
    let idadeCachorro = idadeHumano * 7;
    return idadeCachorro
}

// Função 05
function function5 (salario){
    let horasTrabalhadas = 22
    let valorDaHora = salario / (horasTrabalhadas * diasUteisTrabalhados)
    return valorDaHora.toFixed(2)
}

// Função 06
function function6 (altura, peso){
    let IMC = peso / (altura * altura)
    return IMC.toFixed(0)
}

