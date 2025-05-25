

import { verificarSePodeSerAdotado } from './verificar-adotado-export.js'
import assert from 'node:assert'



// Exemplo de teste usando Mocha
describe('Testes da disciplina - fundamentos JS', () => {
 it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    const idade = 1;
    const porte = 'M';
    const resultado = verificarSePodeSerAdotado(idade, porte);
    // Aqui usamos assert.strictEqual para verificar se a função retorna true
    assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
  })
});

