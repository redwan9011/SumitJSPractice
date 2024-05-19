Math.round (4.5) //return 5
Math.round (4.4) //return 4

//round a .5 er nice thakle base dey, ar ceil a . er por jai thakuk tatei porer digit dey

Math.ceil(4.4) //return 5
Math.ceil(4.6) //return 5

Math.floor(4.3) //return 4
Math.floor(4.9) //return 4
Math.floor(-4.9) //return -5

// .er por ja e thakuk sob bad
Math.trunc(4.2)  //return 4
Math.trunc(4.6) //return 4
Math.trunc(-4.6) //return 4

Math.sign(-4) ////return -1 (- number always -1)
Math.sign(0) //return 0
Math.sign(4) //return 1 ( + num always 1)

Math.pow(8, 2) // 8 to the power 2

Math.sqrt(64)  ////return 8 (root over)

Math.abs(-45) ////return 45 (- num ke + kore)

Math.min( 34, 64, 31, 78) ////return 31
Math.max( 34, 64, 31, 78) ////return 78

Math.random () //return 0-1 randomly

Math.random() *10 //return 0-10 randomly (line 2.4, 5, 4)

const num =Math.floor(Math.random() *10);  //evabe dile integer number dibe, nahoy always . num dibe
console.log(num);