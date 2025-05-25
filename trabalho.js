<<<<<<< HEAD
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

=======
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

>>>>>>> 2f0cf11be7ffbbc171228d25b0e48eadb8e2592e
