// const numbers = [ 34, 56, 65, 72, 45]

// function myFunction(total, value, index, array) {
//     console.log(total);
//     console.log('-------')
//     return total +value
// }

// const newNumbers = numbers.reduce(myFunction,10);
// console.log(newNumbers);

// const numbers = [59, 45, 67, 90, 56];

// function squareValues() {
//     let squaredArray = [];
//     for (let number of numbers) {
//         console.log(number);
//         squaredArray.push(number * number);
//     }
//     return squaredArray;
// }

// const squaredNumbers = squareValues();
// console.log(squaredNumbers);


const numbers = [59, 45, 67, 90, 56];

function squareValues() {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    return sum
}

const squaredNumbers = squareValues();
console.log(squaredNumbers);