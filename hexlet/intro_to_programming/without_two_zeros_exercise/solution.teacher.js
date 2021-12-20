// BEGIN (write your solution here)
// Решение основано на поиске всех сочетаний (биномиальных коэффициентов)
// из n единиц по k нулей, исключая наборы, в которых следуют два или
// более нулей подряд.
// https://ru.wikipedia.org/wiki/Сочетание
const withoutTwoZeros = (k, n) => {
    // Исключаем из результата все наборы, содержащие два или более
    // нулей подряд. Это условие следует из того, что для k нулей
    // необходимо иметь минимум k - 1 единиц, чтобы избежать повторов.
    // То есть n >= k - 1. Например, 01010 (3 нуля и 2 единицы).
    if (k > (n + 1)) {
        return 0;
    }

    // Терминальное условие:
    // из сочетаний, в которых есть только нули или только единицы,
    // можно получить только один набор.
    if (k === 0 || n === 0) {
        return 1;
    }

    // Подробный разбор этого тождества смотрите в видео — https://youtu.be/F_0DwN--bTM?t=3109
    // На основании него раскладываем сочетание:
    return withoutTwoZeros(k, n - 1) + withoutTwoZeros(k - 1, n - 1);
};

export default withoutTwoZeros;
// END