import diff from './solution.js';

test('Разница углов / Введение в программирование', () => {
  expect(diff(0, 45)).toBe(45);
  expect(diff(0, 180)).toBe(180);
  expect(diff(0, 190)).toBe(170);
  expect(diff(190, 0)).toBe(170);
  expect(diff(120, 280)).toBe(160);
});
