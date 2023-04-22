const updateLight = (current) => {
    if (current == 'red') {
        return 'green';
    }
    if (current == 'green') {
        return 'yellow';
    }
    if (current == 'yellow') {
        return 'red';
    }
}