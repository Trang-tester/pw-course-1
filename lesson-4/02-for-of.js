// 2. for...of 
const str = "Playwright";

// 2.1
const newarray = str.split("");
console.log(newarray);

// 2.2

const reserveArray = newarray.reverse();
console.log(reserveArray);

// 2.3
const arr = [1, 2, 3, 4, 3, 55, 23];
const firstIndex = arr.findIndex((value => value === 3));
console.log(firstIndex);

const lastIndex = arr.lastIndexOf(3);
console.log(lastIndex);

// 2.4
const dupArr = [1, 2, 3, 1, 2, 4, 5];

const uniqueOnly = dupArr.filter(value => {
    return dupArr.indexOf(value) === dupArr.lastIndexOf(value);
});

console.log(uniqueOnly);