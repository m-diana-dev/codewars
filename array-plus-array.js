const arrayPlusArray = (arr1, arr2) => {
    let sum = 0;
    arr1.forEach(el=>sum+=el);
    arr2.forEach(el=>sum+=el);
    return sum;
}