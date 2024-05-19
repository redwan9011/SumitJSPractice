//1. ludo khelay amra kivabe 1 theke 6 songkha randomly print korte pari
// const ludo = Math.floor(Math.random() * 6)
// console.log(ludo);

function getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max -min +1) + min)
}

const ludo = getRandomInteger( 1, 6)
console.log(ludo);