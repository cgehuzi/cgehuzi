// @ts-check
// BEGIN (write your solution here)
const diff = (one, two) => {
  const small = one < two ? one : two;
  const big = one > two ? one : two;

  const diffOne = 360 - big + small;
  const diffTwo = big - small;

  return diffOne < diffTwo ? diffOne : diffTwo;
};

export default diff;
// END
