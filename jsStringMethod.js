let name = "redwan, rayhan, sohan"
let rayhan = name.slice(14,21);
// slice 14- 21 er element nibe , - index oo  nite pare, like (-12, -6),, sudhu ekta value dile (5), tahole er porer sob value asbe
let sohan = name.substring(5, 14)
// substrin ar slice same, but substring a negative deya jayna

let redwan = name.substr(8, 6)
//  first parameter start point, ar second parameter koyta value nibe seta bujhay

// console.log(redwan);


let str = "I love janina"
let nai = str.replace("janina", "nai-keu")
// prothom ta konta replace korte cai, ar second ta ki bosate cai
// console.log(nai);


let text1 = "Hello";
let text2 = "world";
let textt = text1.concat(' ' , text2)
// concat eksathe kore duita variable value
console.log(textt);

let ball = 'cricket';
ball [0] //return c

let game = "cricket Football volleball"
// space niye array akare return kore
console.log(game.split(''));