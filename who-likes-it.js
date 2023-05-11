const likes = (names) => {
    const countEl = names.length;
    if (countEl === 0) return 'no one likes this';
    else if (countEl === 1) return `${names[0]} likes this`;
    else if (countEl === 2) return `${names[0]} and ${names[1]} like this`;
    else if (countEl === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

