
var arr = [5, 10, 21, 6, 1, 100];

console.log(arr);

arr.sort();

console.log(arr);

arr.push(8);

console.log(arr);

arr.reverse();

console.log(arr);

var newArr = arr.map((item) => {
    return item * 2;
})

console.log(newArr);

var newArr2 = arr.filter((item) => {
    return item < 20;
})

var sum = arr.reduce((a, b) => a + b);

console.log(sum);

arr.forEach((item) => {
    console.log(item);
})
