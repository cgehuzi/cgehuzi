// @ts-check
// BEGIN (write your solution here) (write your solution here)
const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

const countPositions = (a, b) => factorial(a + b) / (factorial(a) * factorial(b));

const withoutTwoZeros = (zero, one) => {
  if (zero - one > 1) {
    return 0;
  }

  const iter = (acc, a, b) => {
    if (a === 0) {
      return acc;
    }

    return iter(acc - countPositions(a, b), a - 1, b);
  };

  return iter(countPositions(zero, one), zero - 1, one);
};

export default withoutTwoZeros;
// END
