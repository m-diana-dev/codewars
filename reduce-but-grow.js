const grow = (x) => {
    let c = 1;
    x.forEach((el) => {
        if (el) {
            c *= el;
        }
    });
    return c;
}