
import { calcularConsumoDeRacao } from './calcular-consumo-export.js'
import assert from 'node:assert'


describe('Testes da disciplina - fundamentos JS', () => {
  it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    const peso = 14.5;
    const resultado = calcularConsumoDeRacao(peso);
    assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350)


  });
});