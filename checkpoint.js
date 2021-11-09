let pipoca = 10
let macarrao = 8
let carne = 15
let feijao = 12
let brigadeiro = 8

function padrao(opcao);
    switch(opcao){
        case 1:
        return "Pipoca";
        case 2:
        return "Macarrão";
        case 3:
        return "Carne";
        case 4: 
        return "Feijão";
        case 5:
        return "Brigadeiro";
        default:
        return "Prato inexistente";
    }
