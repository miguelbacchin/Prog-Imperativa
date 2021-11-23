const alice = [23, 82, 46]
const bob = [45, 8, 32]
let pontosParticipante1 = 0
let pontosParticipante2 = 0
let qtdeEmpates=0

function encontrarVencedor (part1, part2){
    
    for(let rodadas = 0; rodadas<part1.length; rodadas++){

        if(part1[rodadas]>part2[rodadas]){
            pontosParticipante1++
        }else if(part2[rodadas]>part1[rodadas]){
            pontosParticipante2++
        } else {
            qtdeEmpates++
        }
    }

    if(pontosParticipante1>pontosParticipante2){
        console.log(`Participante 1 venceu com ${pontosParticipante1} pontos e houveram ${qtdeEmpates} empates.`)
    }else if(pontosParticipante2>pontosParticipante1){
        console.log(`Participante 2 venceu com ${pontosParticipante2} pontos e houveram ${qtdeEmpates} empates.`)
    }else{
        console.log(`A competição empatou ou não foi possível declarar um vencedor.`)
    }
}

encontrarVencedor(alice, bob)