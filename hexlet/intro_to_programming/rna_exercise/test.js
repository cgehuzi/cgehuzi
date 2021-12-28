import dnaToRna from "./solution.js";

test(
  "Преобразование DNA в RNA" + "\n  # " + "Введение в программирование",
  () => {
    expect(dnaToRna("ACGTGGTCTTAA")).toBe("UGCACCAGAAUU");
    expect(dnaToRna("CCGTA")).toBe("GGCAU");
    expect(dnaToRna("")).toBe("");
    expect(dnaToRna("ACNTG")).toBe(null);
  }
);
