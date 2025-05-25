
// Validador de nome para as tags 

//Alguns donos estão registrando os dogs com nomes mal formatados.
//Crie um script para limpar e padronizar os nomes.
//Aplique as formatações e exiba:
//o nome original, como foi cadastrado
//o nome formatado

//aplique uma regra que confira se o nome informado
//possui apenas uma palavra, exiba se o nome é válido 
//ou não.

//const nomeDog = "Belinha"


//console.log (nomeDog)
//console.log(nomeDog.charAt())

const nomeDog =" B&l1nh@ "
let nomeFormatado = nomeDog.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "")
//remove caracteres especiais 

console.log(nomeDog)

{

const palavras = nomeFormatado.split(/\s+/);
console.log(palavras)

const valido = palavras.length === 1;

console.log(nomeDog)
console.log(nomeFormatado)
console.log(valido)    



}

function removerCaracteresEspeciais(nome){
    return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "")

}

1 == '1' // true
// === // estritamente igual 

number === 'string'

1=== '1'

// ==  - compara valores (coersão de tipo)
// === 

/*

operadores = comparacao, logica, aritmetica

valor A maior que valor B

Valor A menor que valor B 

*/

