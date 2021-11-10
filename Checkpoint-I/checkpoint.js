let pipoca = 10
let macarrao = 8
let carne = 15
let feijao = 12
let brigadeiro = 8

function padrao(opcao);
    switch(opcao){
            case "Pipoca":
            return 10;
            case "Macarrão":
            return 8;
            case "Carne":
            return 15;
            case "Feijão": 
            return 12;
            case "Brigadeiro":
            return 8;
            default:
            return "Prato inexistente";
    }