let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filterArr = arr.filter((item, index) => {
    return item && index > 5;
});

console.log(filterArr);