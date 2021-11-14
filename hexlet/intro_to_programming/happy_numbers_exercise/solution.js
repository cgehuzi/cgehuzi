const sumOfSquareDigits = (num) => {
    const str = String(num);
    let sum = 0;

    for (let i = 0; i < str.length; i += 1) {
        sum += Number(str[i]) ** 2;
    }

    return sum;
}

const isHappyNumber = (num) => {
    const max_iter = 10;

    const iter = (counter, acc) => {
        if (acc === 1) {
            return true;
        }
        if (counter === 0) {
            return false;
        }
        return iter(counter - 1, sumOfSquareDigits(acc));
    }

    return iter(max_iter, num);
}

export default isHappyNumber;