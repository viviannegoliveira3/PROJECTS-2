/** 
 * Console API
*/
console.log("Aula Inicial JS")

console.error ("Falha na execução")
console.warn ("Atenção")
console.table ([{ 
    nome: 'Vivianne',
    turma: '02',
    disciplina: 'Prog JS'

},
{
    nome: 'Cristiano',
    turma: '02',
    disciplina: 'Prog JS'
}])  

/** 
 * constantes e variáveis
 
// const - para informações que nunca mudam
// var ou let - para informações que podem mudar 

**/

const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor  = 'Caramelo'
const dataDenascimento = '01/01/2020'
const porte = 'M'

//informações que mudam

let idade = 5 //number
let peso = 10.5 //number 
let vacinado = true //Boolean
let castrado = false //Boolean
let tamanho = 'M' //String

// hoisting  - içamento e é inicializado ou elevação - a declaração da variavel é movida para o topo do arquivo automaticamente 
// e fica sem inicialização - dar a prioridade da execução do código 

const irmaos = ["Thor","Hela"]
console.table(irmaos)

const valor = '50'
console.log(valor)

/**
 * string 
 */

// 'Turma 02 do PGATS' - aspas simples ou single quote
// "Turma 02 do PGATS" - aspas duplas ou double quote 
// `Turma 02 do PGATS` - template strings

const numeroAula = "03"
const turma = "02"
let data = "05 de abril"

console.log ("Aula 03 da turma" + turma + " no sábado dia 05 de abril")

console.log (`Aula ${ numeroAula } da turma ${turma}no sábado dia ${data}`)

// split - separa string

const nomesDeAlunos = "Vivianne Andre Goku Lucas"

const nomesDeAlunosSplit = nomesDeAlunos.split(" ")

console.log(nomesDeAlunosSplit)

console.log (nomesDeAlunos.toLowerCase())

console.log (nomesDeAlunos.toUpperCase())

console.log (nomesDeAlunos.includes("Goku"))

// Chai - biblioteca de asserções 

console.log (nomesDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = "        inteiro real cadeia de caracteres...     "

console.log (conceitosLogica.trim())

let dataParaCortar  = "05 de abril"
console.log(dataParaCortar.slice(0,2))

// 05 de abril
//0123456789


const cpf = "8628"

//






