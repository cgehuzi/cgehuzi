const isPowerOfThree = (num) => {
    if (num === 1) {
        return true;
    }

    if (num % 3 !== 0) {
        return false;
    }

    return isPowerOfThree(num / 3);
}

export default isPowerOfThree;