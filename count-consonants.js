const consonantCount = (str) => {
    const array = str.replace(/[^a-z]/ig,"").split(''); //remove everything but letters
    let consonants = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i<= array.length; i++){
        for (let j = 0; j<= vowels.length; j++){
            if (array[i]){
                if (array[i]===vowels[j]) consonants += 1;
            }
        }
    }
    return array.length - consonants;
}
