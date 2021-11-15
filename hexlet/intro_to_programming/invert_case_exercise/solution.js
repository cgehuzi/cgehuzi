const invertCase = (str) => {
    const iter = (acc, counter) => {
        if (counter === str.length) {
            return acc;
        }
        const char = str[counter];
        acc += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

        return iter(acc, counter += 1);
    }

    return iter('', 0);
}

export default invertCase;