const strCount = (str, letter) => {
    let count = 0;
    str.split('').forEach(el=>{
        if(el===letter)count++;
    })
    return count;
}