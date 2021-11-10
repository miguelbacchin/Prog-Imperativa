function microondas(prato, tempoEscolhido); {
let comida = prato
let tempo = 0

    switch(comida){
            case "pipoca":
                tempo = 10;
            break
            case "macarrao":
                tempo = 8;
            break
            case "carne":
                tempo = 15;
            break
            case "feijao": 
                tempo = 12;
            break
            case "brigadeiro":
                tempo = 8;
            break
            default:
            return "prato inexistente";
    }
    if (tempoEscolhido >= 0 && tempoEscolhido < tempo){
            return tempoEscolhido = "tempo insuficiente"
    } else if (tempoEscolhido >= (tempo*2) && tempoEscolhido < (tempo*3)){
            return "a comida queimou"
    } else if (tempoEscolhido >= tempo &&  tempoEscolhido < (tempo*2)){
            return "prato pronto, bom apetite!!!"
    }else if (tempoEscolhido >= (tmepo*3)){
            return "kabumm"
    }
}