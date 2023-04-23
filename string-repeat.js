const repeatStr = (n, s) => {
    let newStr = '';
    for (let i = 1; i <= n; i++) {
        newStr += s;
    }
    return newStr;
}