const countSheeps = (arrayOfSheep) => {
    let count = 0;
    arrayOfSheep.forEach((sheep) => {
        if (sheep) {
            count += 1;
        }
    });
    return count;
}