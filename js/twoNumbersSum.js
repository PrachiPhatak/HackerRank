function twoNumberSum(array, targetSum) {
    //
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                newArray.push(array[i]);
                newArray.push(array[j]);
            }
        }
    }
    return newArray;
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;
console.log(twoNumberSum(array, targetSum));//Answer should be [-1,11]

array = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47];
targetSum = 164;
console.log(twoNumberSum(array, targetSum));//Answer should be []

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
targetSum = 17;
console.log(twoNumberSum(array, targetSum));//Answer should be [8, 9]
