
import { decidirTipoDeAtividadePorPorte } from './decidir-atividade-export.js'
import assert from 'node:assert'


describe('Testes da disciplina - fundamentos JS', () => {
  it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {


    assert.strictEqual(decidirTipoDeAtividadePorPorte('pequeno'), 'brincar dentro de casa')
  });
  });
