// Resolução Renato

function podeSubir(altura,vemAcompanhado){
    if(altura >= 1.40 && altura <= 2.00){
        return true;
    }

    else if(altura <= 1.40 && altura >= 1.20 && vemAcompanhado){
        return true;
    }

function podeSubir2(altura,vemAcompanhado){
    if(altura >= 1.40 && altura <= 2.00){
        return "Acesso autorizado";
    }

    else if(altura <= 1.40 && altura >= 1.20 && vemAcompanhado){
        return "Acesso autorizado somente com acompanhante";
    }
    else{
        return "Acesso negado";
    }
console.log(podeSubir);
}
