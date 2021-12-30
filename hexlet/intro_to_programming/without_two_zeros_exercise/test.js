import withoutTwoZeros from './solution.js';

test('Без двух нулей / Введение в программирование', () => {
  expect(withoutTwoZeros(2, 2)).toBe(3);
  expect(withoutTwoZeros(1, 1)).toBe(2);
  expect(withoutTwoZeros(1, 3)).toBe(4);
  expect(withoutTwoZeros(2, 4)).toBe(10);
  expect(withoutTwoZeros(3, 1)).toBe(0);
  expect(withoutTwoZeros(5, 4)).toBe(1);
  expect(withoutTwoZeros(3, 2)).toBe(1);
});
