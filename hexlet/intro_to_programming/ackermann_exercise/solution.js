// @ts-check
// BEGIN (write your solution here)
const ackermann = (a, b) => {
  if (a === 0) {
    return b + 1;
  }

  if (b === 0) {
    return ackermann(a - 1, 1);
  }

  return ackermann(a - 1, ackermann(a, b - 1));
};

export default ackermann;
// END
