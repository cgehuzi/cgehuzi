import reverse from './solution.js';

test('Переворот строки / Введение в программирование', () => {
  expect(reverse('str')).toBe('rts');
  expect(reverse('hexlet')).toBe('telxeh');
});
