// Para utilizar o microondas super rápido, favor selecionar o número do prato desejado e quantos segundos deseja baseado nas opções abaixo:
// 1 - Pipoca: 10 segundos (tempo padrão)
// 2 - Macarrão: 8 segundos (tempo padrão)
// 3 - Carne: 15 segundos (tempo padrão)
// 4 - Feijão: 12 segundos (tempo padrão)
// 5 - Brigadeiro: 8 segundos (tempo padrão)


function microondas (prato,segundos){
    let comidaPronta = "Prato inexistente"
    
    if (prato == 1 && segundos >= 10 && segundos <= 20){
        comidaPronta = "Pipoca pronta, bom apetite!!!"
    } else if (prato == 1 && segundos >= 21 && segundos <= 30){
        comidaPronta = "A pipoca queimou! Bom apetite!"
    } else if (prato == 1 && segundos >= 31){
        comidaPronta = "KABUMMM! Bom apetite!"
    } else if (prato == 1 && segundos <= 9){
        comidaPronta = "Tempo insuficiente."
    }

    if (prato == 2 && segundos >= 8 && segundos <= 16){
        comidaPronta = "Macarrão pronto, bom apetite!!!"
    } else if (prato == 2 && segundos >= 17 && segundos <= 24){
        comidaPronta = "O macarrão queimou! Bom apetite!"
    } else if (prato == 2 && segundos >= 25){
        comidaPronta = "KABUMMM! Bom apetite!"
    } else if  (prato == 2 && segundos <= 7){
        comidaPronta = "Tempo insuficiente."
    }
    if (prato == 3 && segundos >= 15 && segundos <= 30){
        comidaPronta = "Carne pronta, bom apetite!!!"
    } else if (prato == 3 && segundos >= 31 && segundos <= 45){
        comidaPronta = "A carne queimou! Bom apetite!"
    } else if (prato == 3 && segundos >= 46){
        comidaPronta = "KABUMMM! Bom apetite!"
    } else if  (prato == 3 && segundos <= 14){
        comidaPronta = "Tempo insuficiente."
    }
    if (prato == 4 && segundos >= 12 && segundos <= 24){
        comidaPronta = "Feijão pronto, bom apetite!!!"
    } else if (prato == 4 && segundos >= 25 && segundos <= 36){
        comidaPronta = "O feijão queimou! Bom apetite!"
    } else if (prato == 4 && segundos >= 37){
        comidaPronta = "KABUMMM! Bom apetite!"
    } else if  (prato == 4 && segundos <= 11){
        comidaPronta = "Tempo insuficiente."
    }
    if (prato == 5 && segundos >= 8 && segundos <= 15){
        comidaPronta = "Brigadeiro pronto, bom apetite!!!"
    } else if (prato == 5 && segundos >= 16 && segundos <= 23){
        comidaPronta = "O brigadeiro queimou! Bom apetite!"
    } else if (prato == 5 && segundos >= 24){
        comidaPronta = "KABUMMM! Bom apetite!"
    } else if  (prato == 5 && segundos <= 7){
        comidaPronta = "Tempo insuficiente."
    }
    return console.log(comidaPronta)
    }
    microondas(1,16)