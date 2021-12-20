// @ts-check

/* eslint-disable no-console */

// BEGIN (write your solution here)
const fizzBuzz = (begin, end) => {
  if (begin > end) {
    return false;
  }

  for (let i = begin; i <= end; i += 1) {
    const fizz = i % 3 === 0 ? 'Fizz' : '';
    const buzz = i % 5 === 0 ? 'Buzz' : '';

    if (fizz !== '' || buzz !== '') {
      console.log(`${fizz}${buzz}`);
    } else {
      console.log(i);
    }
  }

  return true;
};

export default fizzBuzz;
// END