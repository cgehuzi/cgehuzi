import areBracketsBalanced from './solution.js';

test('Сбалансированы ли скобки? / Введение в программирование', () => {
  expect(areBracketsBalanced('(())')).toBe(true);
  expect(areBracketsBalanced('(()(())())')).toBe(true);
  expect(areBracketsBalanced('((())')).toBe(false);
  expect(areBracketsBalanced('(()(())()))')).toBe(false);
});
