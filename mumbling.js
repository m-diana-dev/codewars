const accum = (s) => {
    let arrayS =  s.split('').map((el, index) => {
        el = el.toLowerCase().repeat(index + 1).split('');
        el[0] = el[0].toUpperCase();
        return el.join('')
    })
    return arrayS.join('-');
}
