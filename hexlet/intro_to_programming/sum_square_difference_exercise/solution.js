// @ts-check
// BEGIN (write your solution here)
const sumSquareDifference = (n) => {
  const squareSum = (m, acc) => {
    if (m === 0) {
      return acc ** 2;
    }

    return squareSum(m - 1, acc + m);
  };

  const sumSquare = (m) => {
    if (m === 0) {
      return 0;
    }

    return m ** 2 + sumSquare(m - 1);
  };

  return squareSum(n, 0) - sumSquare(n);
};

export default sumSquareDifference;
// END
