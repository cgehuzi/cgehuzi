const isPerfect = (num) => {
    if (num <= 0) {
        return false;
    }

    let dividerSum = 0;

    for (let i = 1; i < num; i += 1) {
        if (num % i === 0) {
            dividerSum += i;
        }
    }

    return dividerSum === num;
}

export default isPerfect;