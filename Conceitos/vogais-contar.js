

const texto = "A vida é bela";
console.log(contarVogais(texto)); 
console.log (`Texto: "${texto}"`)
console.log ('--------------------')

    
function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let char of texto) {
      if (vogais.includes(char)) {
        contador++;
      }
    }
    return contador;
  }