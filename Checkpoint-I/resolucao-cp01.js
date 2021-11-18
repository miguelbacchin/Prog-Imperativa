/* 1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão);  */

/* - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.

- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 

- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";

- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;

- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

function microondas (opcao,tempo){
    let tempoPadrao = 0;
    switch (opcao){
        case 1: // Pipoca;
            tempoPadrao = 10;
            break;
        case 2: // Macarrão;
            tempoPadrao = 8;
            break;
        case 3: // Carne;
            tempoPadrao = 15;
            break;
        case 4: // Feijão;
            tempoPadrao = 12;
            break;
        case 5: // Brigadeiro;
            tempoPadrao = 8;
            break;
        default:
        console.log("Prato inexistente");
        return;
    }
    if (tempo < tempoPadrao){
        console.log("Tempo insuficiente"); 
    } else if (tempo > 3*tempoPadrao){
        console.log("Kabummm");
    } else if (tempo > 2*tempoPadrao){
        console.log("A comida queimou");
    }
console.log("Prato pronto, bom apetite!!!"); 
}
microondas(1,9);

