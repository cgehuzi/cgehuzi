const dnaToRna = (dna) => {
    let result = '';

    for (let i = 0; i < dna.length; i += 1) {
        const nukl = dna[i];
        switch (nukl) {
            case 'G':
                result += 'C';
                break;

            case 'C':
                result += 'G';
                break;

            case 'T':
                result += 'A';
                break;

            case 'A':
                result += 'U';
                break;

            default:
                return null;
                break;
        }
    }

    return result;
}

export default dnaToRna;