const binaryArrayToNumber = arr => {
    let result = 0;
    arr.reverse().forEach((el, index)=> (el!==0) ? result += Math.pow(2, index): result);
    return result
}