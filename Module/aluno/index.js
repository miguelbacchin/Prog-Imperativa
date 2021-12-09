let aluno = {
    nome: "",
    quantidadeFaltas: 0,
    notas: [0],
    calcularMedia: function(){
        let calc=0;
        for(i=0; i<this.notas.length; i++){
            calc += this.notas[i];
        }
        return console.log("A média do aluno é de: " + calc/i)
    },
    faltas: function(){
        this.quantidadeFaltas++
        return
    }

}
 

function Aluno(nomeAluno, faltasAluno, notasAluno){
    this.nome = nomeAluno;
    this.quantidadeFaltas = faltasAluno;
    this.notas = notasAluno;
    this.calcularMedia = function(){
        let i=0;
        let calc=0;
        let media= 0;
        for(i=0; i<this.notas.length; i++){
            calc += this.notas[i];
        }
        media =  calc/i;
        return media
    },
    this.faltas = function(){
        this.quantidadeFaltas++;
        return this.quantidadeFaltas;
        
    }
    
}

const aluno1 = new Aluno('Lennon Martins', 0, [7, 7, 7])
const aluno2 = new Aluno('Maruan Verardi',5,[8, 9, 10])
/* console.log(aluno)
console.log(aluno1)
console.log(aluno2)
console.log("A média desse aluno é de: " + aluno1.calcularMedia())
console.log("O numero final de faltas é de: " + aluno1.faltas()) */

let curso = {
    nomeDoCurso: "",
    notaDeAprovacao: 0,
    faltasMaximas:  0,
    listaDeEstudantes: [aluno1,aluno2],
    situacao: function(aluno){
        let notaDeAprovacao = 7;
        let resultado;
        let totalFaltas= aluno.faltas()
        switch (totalFaltas) {
            case 0:
                resultado = (aluno.calcularMedia() >= notaDeAprovacao)    
                break;
        
            case 1:
                resultado = (aluno.calcularMedia() >= notaDeAprovacao)    
                break;
        
            case 2:
                resultado = (aluno.calcularMedia() > (notaDeAprovacao + (notaDeAprovacao*0.10)))        
                break;
        
            default:
                resultado = false;
                
        }
        return resultado;
    }

}

console.log(curso.situacao(aluno1))
console.log(curso.situacao(aluno2))

/* console.log(typeof curso.nomeDoCurso)
console.log(typeof curso.notaDeAprovacao)
console.log(typeof curso.faltasMaximas)
console.log(typeof curso.listaDeEstudantes)
console.log(curso.listaDeEstudantes) */

