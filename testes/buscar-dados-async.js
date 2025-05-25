
import {buscarDadoAsync} from './buscar-dados-async-export.js'
import assert from 'node:assert'


describe('Testes da disciplina - fundamentos JS', () => {
it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
  const resultado = await buscarDadoAsync();
  assert.strictEqual(resultado, 'Pipoca');
});

});