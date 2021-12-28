// @ts-check
const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)
const isHappyNumber = (num) => {
  const maxIter = 10;

  const iter = (counter, acc) => {
    if (acc === 1) {
      return true;
    }
    if (counter === 0) {
      return false;
    }
    return iter(counter - 1, sumOfSquareDigits(acc));
  };

  return iter(maxIter, num);
};

export default isHappyNumber;
// END
