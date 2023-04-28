const getCount = (str) => {
    const array = str.split('');
    let count = 0;
    for (i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'a':
                count += 1;
                break;
            case 'e':
                count += 1;
                break;
            case 'i':
                count += 1;
                break;
            case 'o':
                count += 1;
                break;
            case 'u':
                count += 1;
                break;
            default:
                break;
        }
    }
    return count;
}