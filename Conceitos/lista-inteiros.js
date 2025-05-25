
const pegaListaDeInteiro = [5, 'Letras', 6, 'Vogais', 7];
const listaString = filtrarInteirosSemString(pegaListaDeInteiro);
console.log(listaString);

function filtrarInteirosSemString(lista) {
    return lista.filter(item => typeof item === 'number');
  }
  
  
    







