const squareSum = (numbers) => {
    let sum = 0;
    numbers.forEach(el=>{
        sum += el*el;
    })
    return sum;
}