
/* Gerador de tags de identificação 

Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um 
cachorro no abrigo. O dono irá informar nome, idade, peso, raça e se é adotado ou não.

A tag deve ter:

O Nome em letras maiúsculas 
A raça com a primeira letra maiúscula
Peso 

*/

const nome = "Dogo", raca = "vira-lata"
let idade = 1, peso = 1.2, adotado = false 

let nameUpperCase = nome.toUpperCase()
let racaFirstletter = raca.charAt(0).toLocaleUpperCase()+ raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirstletter

}]

//console.log(animal)

console.table(animal)



//const dogThorTag = {

  //  nome: dogThor.nome.toUpperCase(),
   // raca: dogThor.raca.slice(0, 1).toUpperCase() + dogThor.raca.slice(1).toLowerCase(),
    //peso: dogThor.peso

//}

//console.table(dogThorTag)


