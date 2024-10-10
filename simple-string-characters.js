/*
7kyu

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

The order is: uppercase letters, lowercase letters, numbers and special characters.

"*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
More examples in the test cases.

Good luck!

 */

const solve = (string) => {
    let uppercase = 0;
    let lowercase = 0;
    let numbers = 0;
    let characters = 0;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (char >= 'A' && char <= 'Z') {
            uppercase++;
        } else if (char >= 'a' && char <= 'z') {
            lowercase++;
        } else if (char >= '0' && char <= '9') {
            numbers++;
        } else {
            characters++;
        }
    }
    return [uppercase, lowercase, numbers, characters];
};


