/* const fun = (emp_name, emp_age) => {
    const dict = {emp_name: emp_name, emp_age: emp_age}
    const print = `Hi my name is ${dict.emp_name} and age is ${dict.emp_age}`
    return print
}

console.log(fun("Jerish", "19")) */ 

/* const fun = (emp_name, emp_age) => {
    const dict = {emp_name: emp_name, emp_age: emp_age}
    const print = `Hi my name is ${dict.emp_name} and age is ${dict.emp_age}`
    return print
}

console.log(fun("Jerish", "19")) */ 

// const numbers = [1, 2, 3, 4, 5, 6, 7]
// 
// for (const number of numbers) {
//     console.log(number) 
// }

// Squaring the array elements 

/* let result = []

const double = (numbers) => {
    for (const number of numbers) {
        result.push(number ** 2)
    }
    return result
}

console.log(double([1, 2, 3, 4, 5, 6, 7])) */

// Adding numbers in an array

/* const arr = [ 1, 2, 3, 4, 5,]

let result = 0;

for (ar of arr) {
    result = result + ar
    console.log(result)
} */

// Program to split letters and words... 2nd program splits the words and saves in  into an array and check for repition

/* const letterFrequency = (phrase) => {
    console.log(phrase)
    
    let frequency = {}
    for (const letter of phrase) {
        if (letter in frequency) {
            frequency[letter] += 1
        } else {
            frequency[letter] = 1
        }
    }
    return frequency
}

console.log(letterFrequency("hello this is jerish"))

const wordFrequency = (phrase) => {
    const words = phrase.split(" ")
    letterFrequency(words)
}

console.log(wordFrequency("Hello from the other side other side yo yo")) */