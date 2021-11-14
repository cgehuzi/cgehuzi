# Разница углов

[Hexlet](https://ru.hexlet.io/challenges/intro_to_programming_angle_difference_exercise)

## Задача

Напишите функцию diff(), которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними.

Угол между лучами измеряется двумя способами:

![Разница углов](https://github.com/cgehuzi/notes/raw/master/images/angle_difference_exercise.png)

Функция должна вернуть наименьшее значение.

## Примеры

```js
diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
```