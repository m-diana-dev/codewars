const digitize = (n) => n.toString().split('').map(int => parseInt(int, 10)).reverse();
