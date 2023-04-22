const countSheep = (num) => {
    let str = '';
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            str = str + i + ' ' + 'sheep...';
        }
        return str;
    }
    if (num == 0) {
        return '';
    }
}
