function getAverage(marks){
    let sum = 0;
    marks.forEach(el=>{
        sum+=el;
    })
    return Math.floor(sum/marks.length)
}