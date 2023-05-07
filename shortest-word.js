const findShort = (s) => {
    let minLength = Infinity;
    s.split(' ').forEach(el=>{
        if(el.length<minLength){
            minLength = el.length;
        }
    })
    return minLength;
}