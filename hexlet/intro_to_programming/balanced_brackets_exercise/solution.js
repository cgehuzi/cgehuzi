const areBracketsBalanced = (str) => {

    if (str === '') {
        return true;
    }

    for (let i = 0; i < str.length; i += 1) {
        if (`${str[i]}${str[i + 1]}` === '()') {
            return areBracketsBalanced(`${str.slice(0, i)}${str.slice(i + 2)}`);
        }
    }

    return false;
}

export default areBracketsBalanced;