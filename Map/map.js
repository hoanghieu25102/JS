let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let maparr = arr.map((item, index) => {
    item += item;
    return item;
});

console.log(arr);
console.log(maparr);