/*
6kyu

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

 */

const solution = (string) => {
    const arr = string.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase() && i !== 0) {
            arr[i] = " " + arr[i]
        }
    }
    return arr.join('')
}
