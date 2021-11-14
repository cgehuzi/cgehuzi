const sumSquareDifference = (n) => {
    const squareSum = (n, acc) => {
        if (n === 0) {
            return acc ** 2;
        }

        return squareSum(n - 1, acc + n);
    }

    const sumSquare = (n) => {
        if (n === 0) {
            return 0;
        }

        return n ** 2 + sumSquare(n - 1);
    }

    return squareSum(n, 0) - sumSquare(n);
}

export default sumSquareDifference;