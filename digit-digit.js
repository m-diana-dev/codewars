const squareDigits = (num) =>{
    const numString = num.toString();
    const arrayNum  = Array.from(numString).map(el=> parseInt(el)*parseInt(el));
    return parseInt(arrayNum.join(''));
}