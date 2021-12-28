import isPowerOfThree from "./solution.js";

test("Степень тройки" + "\n  # " + "Введение в программирование", () => {
  expect(isPowerOfThree(1)).toBe(true);
  expect(isPowerOfThree(2)).toBe(false);
  expect(isPowerOfThree(9)).toBe(true);
});
