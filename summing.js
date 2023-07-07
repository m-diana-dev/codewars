const sumDigits = number => {
   let arrayNum = number.toString().split('').map(el=>+el);
    if(arrayNum.includes(NaN)){
        delete arrayNum[0]
    }
    return arrayNum.reduce((acc, arrEl)=>acc+=arrEl, 0)
}
