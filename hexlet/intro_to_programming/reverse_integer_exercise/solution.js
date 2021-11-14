// Переворот числа (Введение в программирование)

const reverseInt = (num) => {
    const num_str = String(num);
    let result = '';
    for (let i = 0; i < num_str.length; i += 1) {
        const char = num_str[i];
        result = char === '-' ? `${result}` : `${char}${result}`;
    }

    result = num < 0 ? Number(`-${result}`) : Number(result);
    return result;
}

export default reverseInt;