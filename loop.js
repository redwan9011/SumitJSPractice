const array = [1, 2, 3, 4, 5];
for (const element of array) {
//   console.log(element);
}

const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach(key => {
  console.log(key,obj[key]);
});
const obje = { a: 1, b: 2, c: 3 };
for (const key in obje) {
  console.log(key, obje[key]);
}

const object = { a: 1, b: 2, c: 3 };
Object.values(object).forEach(value => {
  console.log(value);
});
