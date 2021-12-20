// @ts-check
// BEGIN (write your solution here)
const reverse = (str) => {
  if (str === '') {
    return '';
  }

  return `${reverse(str.slice(1))}${str[0]}`;
};

export default reverse;
// END