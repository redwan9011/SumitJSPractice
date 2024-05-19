//1. ludo khelay amra kivabe 1 theke 6 songkha randomly print korte pari
// const ludo = Math.floor(Math.random() * 6)
// console.log(ludo);

function getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max -min +1) + min)
}

const ludo = getRandomInteger( 1, 6)
// console.log(ludo);

// 2. ki vabe amra amader class er  sokoler nam alphabetically sajate pari?

const name = [ "redwan", 'farabi', 'muna', 'sagor', 'abir'];
// console.log(name.sort());

// 3. ki vabe amra amader class er  sokoler roll serially sajate pari?

const roll = [10, 2, 4, 1, 5, 7, 9, 6]
const serial = roll.sort((a,b) => {
    return a - b
})
console.log(serial);
//
const ser = roll.sort ( function (a, b) {
    return b - a
})
console.log(ser);


// 3. kono sal leap year kina ber koro

function isLepyear (year) {
    if(year % 400 === 0 ||  (year % 4 === 0  && year % 100 !== 0)  ) {
        console.log(year  + ' is leapyear');
    } else {
        console.log(year + ' is not leap year');
    }
}

isLepyear(2026)