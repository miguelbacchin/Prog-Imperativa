// Exercício 01 - resolução
function podeSubir(altura, vemAcompanhado)
let podeSubir = false

if (altura <= 2.0 && altura >= 1.20){
    podeSubir = true
}

if (altura >= 1.20 && vemAcompanhado){
    podeSubir = true
}
return podeSubir

function podeSubir(altura, vemAcompanhado){
    if ((altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 && vemAcompanhado)){
        return true
    }
    else {
        return false
    }
}

function podeSubir(altura, vemAcompanhado){
    return (altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 && vemAcompanhado)

    }