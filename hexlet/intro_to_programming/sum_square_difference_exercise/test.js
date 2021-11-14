import sumSquareDifference from './solution.js';

test('Сумма квадратов' + '\n  # ' + 'Введение в программирование', () => {
    expect(sumSquareDifference(0)).toBe(0);
    expect(sumSquareDifference(10)).toBe(2640);
    expect(sumSquareDifference(13)).toBe(7462);
    expect(sumSquareDifference(21)).toBe(50050);
});