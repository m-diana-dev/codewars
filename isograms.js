const isIsogram = (str) => {
    const array = str.toLowerCase().split('');
    const arrayCompare = array;
    let coincidences = 0;
    for(let j = 0; j<array.length; j++){
        for(let i = 0; i<arrayCompare.length; i++){
            if (arrayCompare[i] === array[j]) {
                coincidences += 1;
            }
        }
    }
    return coincidences<=array.length
}
