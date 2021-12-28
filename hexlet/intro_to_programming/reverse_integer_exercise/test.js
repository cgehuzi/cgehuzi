import reverseInt from "./solution.js";

test("Переворот числа" + "\n  # " + "Введение в программирование", () => {
  expect(reverseInt(13)).toBe(31);
  expect(reverseInt(-123)).toBe(-321);
  expect(reverseInt(8900)).toBe(98);
});
