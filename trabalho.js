export {
   geradorDeTagsDeIdentificacao
}


const nome = "Pantera"
function geradorDeTagsDeIdentificacao () {
 return nome.toUpperCase();
}

try {
      
      assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA'); 
      
      console.log('Resultado: Teste passou!');

    } catch (erro) {
      
      console.error('Resultado: Teste falhou:', erro.message);
    }


export {
   verificarSePodeSerAdotado
}


function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';

}


export {
   calcularConsumoDeRacao
}

function calcularConsumoDeRacao(peso) {
   return 4350;
  
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
   buscarDadoAsync
}


async function buscarDadoAsync(){
    const resultado = 'Pipoca';
    return 'Pipoca'

}

console.log(await buscarDadoAsync('Pipoca'))



