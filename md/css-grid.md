<< [На главную](../README.md)

# CSS Grid Layout

- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout)

---

Навигация:

- [CSS Grid Layout](#css-grid-layout)
  - [Grid : решения](#grid--решения)
    - [Адаптивная сетка](#адаптивная-сетка)
  - [Grid : нюансы](#grid--нюансы)
    - [Содержимое вылетает за пределы блока](#содержимое-вылетает-за-пределы-блока)
    - [Вертикальное выравнивание grid-area](#вертикальное-выравнивание-grid-area)

---

## Grid : решения

### Адаптивная сетка

Одно CSS-свойство, чтобы реализовать адаптивную сетку, организованную по мин. ширине элементов.

```css
.grid {
  --item-min-width: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(var(--item-min-width), 100%), 1fr));
}
```
- `repeat(___)` [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat) – вызываем разбивку сетки с повторением заданной ширины

- `auto-fill` [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat#auto-fill) – отменяем растягивание элементов, если пустого места достаточно для ещё одного

- `minmax(___, 1fr)` [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax) – вызываем функцию расчёта ширины в диапазоне от ___ до 1fr

- `min(___, 100%)` [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min) – вызываем функцию, которая вернёт меньшее из переданных значений
  > 100% необходимы, чтобы избежать выпадания элемента за пределы сетки, при критически малой её ширине

## Grid : нюансы

### Содержимое вылетает за пределы блока

**Решение**: задать минимальную ширину дочерним элементам

```css
.grid > * {
  min-width: 0;
}
```

### Вертикальное выравнивание grid-area

Когда грид строится на основе `grid-template-areas`, имеет несколько строк, но какая-то из `grid-area` отсутствует в DOM, то вертикальная разбивка грида ведёт себя непредсказуемо.

**Решение**: настроить строки так, чтобы последняя имела значение `1fr` и прибивала всех в начало.

```css
.grid {
  display: grid;
  grid-template-columns:
    '1️⃣ aside'
    '❌ aside'
    '2️⃣ aside'
    '3️⃣ aside';
  grid-template-rows: repeat(3, auto) 1fr;
}
```
