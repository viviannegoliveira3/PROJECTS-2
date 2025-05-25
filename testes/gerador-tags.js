

import { geradorDeTagsDeIdentificacao } from './gerador-tags-export.js'
import assert from 'node:assert'



describe('Testes da disciplina - fundamentos JS',() =>{

it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    

  try {
      
      assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA'); 
      
      console.log('Resultado: Teste passou!');

    } catch (erro) {
      
      console.error('Resultado: Teste falhou:', erro.message);
    }
});
});


