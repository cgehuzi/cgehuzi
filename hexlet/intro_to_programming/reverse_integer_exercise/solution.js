// @ts-check
// BEGIN (write your solution here)
const reverseInt = (num) => {
  const numStr = String(num);
  let result = "";
  for (let i = 0; i < numStr.length; i += 1) {
    const char = numStr[i];
    result = char === "-" ? `${result}` : `${char}${result}`;
  }

  result = num < 0 ? `-${result}` : result;
  return Number(result);
};

export default reverseInt;
// END
