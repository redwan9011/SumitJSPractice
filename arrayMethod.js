const fruits = [ 'banana', 'orange', 'apple', 'mango'];

// const fru = fruits.toString()
// console.log(fru);

// const fru =fruits.join("* ")
// console.log(fru);

// pop last element ber kore dey
// const fru =fruits.pop();
// console.log(fru, fruits);

// push last a element jog kore
// fruits.push('pinapple')
// console.log(fruits);


// shifr first er element soriye dey
// const fru = fruits.shift();
// console.log(fru, fruits);

// unship first a element jog kore

// const fru = fruits.unshift('guava');
// console.log(fruits );

// delete element
// delete fruits [0]
// console.log(fruits);



// splice(2,0),, first  2 means where element add mane 2 er age bosbe, 0 means how many elements will delete
console.log(fruits);
fruits.splice(2, 1,'lemon' , 'kiwi', )
console.log(fruits);

// kono value na dile 0 mane jekhan theke suru ar 1 mane koyta delete hobe
// console.log(fruits);
// fruits.splice(0,2);
// console.log(fruits);

// jog kore duita array
const  myGirls = ["dia","redwan",  "sinthia"];
const myBoys = [ 'rayhan', 'redwan', 'sohan']
const mychild = myGirls.concat(myBoys);
console.log(mychild);



// slice --- 1 ta nile 2 theke sob gula nibe, ar 2 ta nile 2 theke suru kore 3 er ag projonoto nibe
console.log(fruits);
const sl = fruits.slice(2);
// const sl = fruits.slice(2);

console.log(sl);