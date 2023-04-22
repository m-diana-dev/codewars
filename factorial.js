const factorial = (i) => {
    return (i == 1 || i == 0) ? 1 : factorial(i - 1) * i;
}