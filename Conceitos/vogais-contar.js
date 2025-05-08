const textoExemplo = "esta é uma frase de exemplo";
console.log(contarVogais(textoExemplo)); // Saída: 11

function contarVogais(texto) {
    // Define as vogais que vamos contar
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    // Inicializa o contador
    let contador = 0;
    // Percorre cada caractere do texto
    for (let char of texto) {
      if (vogais.includes(char)) {
        contador++;
      }
    }
    return contador;
  }
  