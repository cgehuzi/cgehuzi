import isPerfect from "./solution.js";

test("Идеальные числа" + "\n  # " + "Введение в программирование", () => {
  expect(isPerfect(6)).toBe(true);
  expect(isPerfect(28)).toBe(true);
  expect(isPerfect(8128)).toBe(true);
  expect(isPerfect(5)).toBe(false);
  expect(isPerfect(0)).toBe(false);
  expect(isPerfect(-8)).toBe(false);
});
