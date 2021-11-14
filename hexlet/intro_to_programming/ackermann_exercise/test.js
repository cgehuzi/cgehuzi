import ackermann from './solution.js';

test('Функция Аккермана' + '\n  # ' + 'Введение в программирование', () => {
    expect(ackermann(0, 0)).toBe(1);
    expect(ackermann(2, 1)).toBe(5);
    expect(ackermann(2, 3)).toBe(9);
});