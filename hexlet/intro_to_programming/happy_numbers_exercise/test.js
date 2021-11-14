import isHappyNumber from './solution.js';

test('Счастливые числа' + '\n  # ' + 'Введение в программирование', () => {
    expect(isHappyNumber(7)).toBe(true);
    expect(isHappyNumber(31)).toBe(true);
    expect(isHappyNumber(97)).toBe(true);
    expect(isHappyNumber(0)).toBe(false);
    expect(isHappyNumber(5)).toBe(false);
});