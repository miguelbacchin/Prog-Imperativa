function menu(opcao){
    switch(opcao){
        case 1:
        return "Salada";
        case 2: 
        return "Refrigerante";
        case 3:
            return "Filé";
        default:
            return "Opção inválida";
    }
}

// if else
if (opcao == 1){
    return "Salada";
} else if (opcao == 2){
    return "Refrigerante";
} else if (opcao == 3){
    return "Filé";
} else {
    //return "Opção inválida";
}

// Ternário
return opcao == 1 ? "Salada" : opcao == 2 ? "Refrigerante" : opcao == 3 ? "Filé" : "Opção inválida"; 