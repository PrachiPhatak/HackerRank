function twoNumberSum(array, targetSum) {
    //
    let newArray = [];
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        count++;
        for (let j = i + 1; j < array.length; j++) {
            count++;
            if (array[i] + array[j] === targetSum) {
                newArray.push(array[i]);
                newArray.push(array[j]);
            }
        }
    }
    console.log("Length of array " + array.length + " Big O " + count);
    return newArray;
}

function twoNumberSum1(array, targetSum) {
    let nums = [];
    array = array.sort((a, b) => {
        return a - b
    });
    let rightPointer = array.length - 1;
    let leftPointer = 0;

    while (leftPointer < rightPointer) {
        if (array[rightPointer] + array[leftPointer] === targetSum) {
            nums.push([array[leftPointer], array[rightPointer]]);
            leftPointer++;
        } else if (array[rightPointer] + array[leftPointer] < targetSum) {
            leftPointer++;
        } else if (array[rightPointer] + array[leftPointer] > targetSum) {
            rightPointer--;
        }

    }
    return nums;
}

function twoNumberSum2(array, targetSum) {
    let nums = {};
    for (const num in array) {
        let match = targetSum - array[num];
        if (array.indexOf(match) > -1) {
            nums[array[num]] = match;
        } else {
            nums[array[num]] = true;
        }
    }
    return nums;
}

let array = [3, 5, -5, 24, -4, 14, -14, -1, 11];
let targetSum = 10;
console.log("Array " + array);
console.log("Target sum " + targetSum);
console.log(twoNumberSum2(array, targetSum));//Answer should be [-1,11]

// array = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47];
// targetSum = 164;
// console.log(twoNumberSum(array, targetSum));//Answer should be []
//
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// targetSum = 17;
// console.log(twoNumberSum(array, targetSum));//Answer should be [8, 9]
