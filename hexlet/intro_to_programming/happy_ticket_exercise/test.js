import isHappyTicket from "./solution.js";

test("Счастливый билет" + "\n  # " + "Введение в программирование", () => {
  expect(isHappyTicket("385916")).toBe(true);
  expect(isHappyTicket("231002")).toBe(false);
  expect(isHappyTicket("1222")).toBe(false);
  expect(isHappyTicket("054702")).toBe(true);
  expect(isHappyTicket("00")).toBe(true);
});
