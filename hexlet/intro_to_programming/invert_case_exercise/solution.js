// @ts-check
// BEGIN (write your solution here)
const invertCase = (str) => {
  const iter = (acc, counter) => {
    if (counter === str.length) {
      return acc;
    }
    const char = str[counter];
    const plusChar = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

    const newAcc = acc + plusChar;
    const newCounter = counter + 1;

    return iter(newAcc, newCounter);
  };

  return iter('', 0);
};

export default invertCase;
// END
