export {
   geradorDeTagsDeIdentificacao
}


const nome = "Pantera"
function geradorDeTagsDeIdentificacao () {
 return nome.toUpperCase();
}



export {
   verificarSePodeSerAdotado

}

   

function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';

}


export {
   decidirTipoDeAtividadePorPorte
}


const porte = 'pequeno';
const atividadeEsperada = 'brincar dentro de casa';
function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa';
  }

}

export {
   calcularConsumoDeRacao
}

function calcularConsumoDeRacao(peso) {
   return 4350;
  
}


export {
   buscarDadoAsync
}

async function buscarDadoAsync(){
    const resultado = 'Pipoca';
    return 'Pipoca'

}

console.log(await buscarDadoAsync('Pipoca'))

