
const PegaListaDeInteiro = [5, 'Letras', 6, 'Vogais', 7];
const ListaString = filtrarInteirosSemString(PegaListaDeInteiro);
console.log(ListaString);

function filtrarInteirosSemString(lista) {
    return lista.filter(item => typeof item === 'number');
  }
  
  
    







