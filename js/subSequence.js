//returns if sequence has all the numbers in the array
//does not check the order of the numbers
function isValidSubsequence1(array, sequence) {
    if (sequence.length > array.length) {
        return false;
    } else {
        for (let i = 0; i < sequence.length; i++) {
            if (array.indexOf(sequence[i]) === -1) {
                return false;
            }
        }
        return true;
    }
}

function isValidSubsequence(array, sequence) {
    let arrIndex = 0;
    let seqIndex = 0;

    while(arrIndex < array.length && seqIndex < sequence.length){
        if(sequence[seqIndex] === array[arrIndex]) seqIndex++;
        arrIndex++;
    }
    return seqIndex === sequence.length;
}


let array = [1,2,2,1, 4, 5];
let sequence = [1,2,1];
console.log(isValidSubsequence(array, sequence));

