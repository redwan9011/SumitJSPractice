const numbers = [ 34, 35, 65, 38, 54];

function myFunction (value, index, array) {
    // console.log(value)
    // console.log(index);
    // console.log(array);
    // console.log('-----');
}

// numbers.forEach(myFunction)
numbers.map(myFunction)

const digit = [ 23, 58, 34, 54, 75];

function digitFilter (value, index, array) {
    return value > 40
}

const newDigit = digit.filter(digitFilter);
// console.log(newDigit);

// postition dekhe
const fruit  = [ 'apple', 'mango', 'banana', 'orange'];
const apple = fruit.indexOf('banana') + 1
console.log(apple);

// last er postion a konta ache
const fruits  = [ 'apple', 'mango', 'banana', 'orange', 'apple'];
const aple = fruits.lastIndexOf('apple') + 1
console.log(aple);

// include
const inclu = fruits.includes('apple ');
console.log(inclu);