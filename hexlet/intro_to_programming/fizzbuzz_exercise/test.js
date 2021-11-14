import fizzBuzz from './solution.js';

jest.spyOn(console, 'log');

test('Найди Fizz и Buzz' + '\n  # ' + 'Введение в программирование', () => {
    fizzBuzz(11, 20);
    const log = console.log.mock.calls.reduce((acc, item) => {
        return `${acc},${item[0]}`
    }, '');
    expect(log).toBe(',11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz');
});

afterEach(() => {
    jest.clearAllMocks();
});