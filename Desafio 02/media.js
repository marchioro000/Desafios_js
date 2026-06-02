// Desafio 02 - Média da Turma 

/*
    Crie um array com 5 notas 
    - Utilize um loop para:
        - Somar todas as notas
        - Calcular a média

    Mostrar no console/output o seguinte:
    Média da turma: 10.0

*/    

const notas = [8, 7, 6, 5, 10]

let soma = 0;
let indice = 0
while (indice < notas.length) {   
    soma += notas[indice];
    indice++
    }
const media = soma / notas.length;

console.log("Notas:", notas)
console.log("Soma total:", soma)
console.log(A média das notas é: ${media.toFixed(2)})