let arr = ['Hieu', 'Hanh', 'Ha', 'Van', 'Hieu'];

let reduceArr = arr.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});

console.log(reduceArr);