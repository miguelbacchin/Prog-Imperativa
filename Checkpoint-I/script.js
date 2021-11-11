function microondas(prato,tempoSelecionado)
    {
       function tempo(tempoprato, tempoinformado)
        {
            if(tempoinformado<tempoprato)
                {
                    console.log("tempo insuficiente");
                } else if (tempoinformado>(tempoprato*2) && tempoinformado<(tempoprato*3)){
                    console.log("A comida queimou! Prato pronto, bom apetite!");
                } else if (tempoinformado>(tempoprato*3)){
                    console.log("Kabumm!!! Prato pronto, bom apetite!");
                } else {
                    console.log("Prato pronto, bom apetite!!!");
                }
        }
      switch (prato) {
        case 1:
            tempo(10, tempoSelecionado);
          break;
        case 2:
            tempo(8, tempoSelecionado);
          break;
        case 3:
            tempo(15, tempoSelecionado);
          break;
        case 4:
            tempo(12, tempoSelecionado);
          break;
        case 5:
            tempo(8, tempoSelecionado);
          break;
        default:
            console.log("Prato inexistente!");
      }
    }
microondas(2,25);   