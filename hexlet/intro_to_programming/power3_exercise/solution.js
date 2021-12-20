// @ts-check
// BEGIN (write your solution here)
const isPowerOfThree = (num) => {
  if (num === 0) {
    return false;
  }

  if (num === 1) {
    return true;
  }

  if (num % 3 !== 0) {
    return false;
  }

  return isPowerOfThree(num / 3);
};

export default isPowerOfThree;
// END