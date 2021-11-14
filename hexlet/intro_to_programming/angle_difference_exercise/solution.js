const diff = (one, two) => {
    const small = one < two ? one : two;
    const big = one > two ? one : two;

    const diff_one = (360 - big) + small;
    const diff_two = big - small

    return diff_one < diff_two ? diff_one : diff_two;
}

export default diff;