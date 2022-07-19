/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    expect(true).toEqual(numbers([1, 2, 3, 4, 5]));
  });
  it('Verifica se a função `numbers` retorna `false` quando a função recebe um index do tipo string', () => {  
    expect(false).toEqual(numbers([1, 2, '3', 4, 5]));   
  });
  it('Verifica se a função `numbers` retorna `false` quando a função recebe um index do tipo string', () => {  
    expect(false).toEqual(numbers([1, 'a', 3]));
  });
  it('Verifica se a função `numbers` retorna `false` quando a função recebe um array com string vazia', () => {  
    expect(false).toEqual(numbers([' ']));
  });
});

