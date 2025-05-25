
/** 

&& - E / AND
||  OU/ OR
!   NÃO /NOT 

*/

/** 
const nomeDog   = "Pipoca"

const nomeEhvalido = nomeDog.split(" ").length === 1 

console.log (nomeEhvalido && true) // true

*/

/** 
console.log(1 + 1) // 2
console.log (10 - 7) // 3
console.log (2 * 2) // 4

console.log (11 / 2)
console.log (11 % 2)

console.log (4 ** 4)
console.log (1 + 1 * 2) // precedência

*/

//cusando função com parametros 

function calcularConsumoDeRacao(nome, peso, estoque){
    const gramasPorDia = peso * 30
    const duracaoEstoque = estoque / gramasPorDia

    console.log ('--------------------')
    console.log (`Nome do dog: ${nome}`)
    console.log (`Peso: ${peso}`)
    console.log (`Gramas por dia: ${gramasPorDia}`)
    console.log (`O estoque vai durar: ${duracaoEstoque}`)
    console.log ('--------------------')

}

calcularConsumoDeRacao('Ada',1,2000)





