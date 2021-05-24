function getButtonValue(userInput) {
    // if(!parseInt())
    document.getElementById("userInput").va

    let input0 = document.getElementById("buttonHidden1").value;
    let input1 = document.getElementById("buttonHidden1").value + userInput;

    //Add newly added letter
    document.getElementById("buttonHidden1").value =
        document.getElementById("buttonHidden1").value + userInput;
     document.getElementById("buttonHidden1").value;

    let nums = [];
    let operation;

    //Get the operations
    if (userInput == 'A') {
        document.getElementById("userInput").value = "";
        document.getElementById("buttonHidden1").value = "";

    } else if (operation == "-1") {
        document.getElementById("userInput").value = -1 * input0;
        document.getElementById("buttonHidden1").value = -1 * calculate(input0);
    }else if (!parseInt(userInput)) {
        //Add input in num.add = userInput.value
        operation = userInput;
        let answer;
        console.log(userInput)
        if (operation == "%") {
            answer = calculate(input0);
            document.getElementById("userInput").value = answer;
            document.getElementById("buttonHidden1").value = answer;
        } else if (operation == "=") {
            answer = calculate(input0);
            document.getElementById("userInput").value = answer;
            document.getElementById("buttonHidden1").value = "";
        }
    } else {
        document.getElementById("userInput").value = document.getElementById("buttonHidden1").value;
    }
}

function calculate(inputArr) {
    let op = inputArr.search(new RegExp(/[\+\*\-\/%]/gm));
    let nums = inputArr.split(new RegExp(/[\+\*\-\/%]/gm));
    let operation = inputArr[op];
    console.log("index " + op);
    console.log("nums " + nums);
    console.log("op " + operation);
    if (operation == '+') {
        return nums[0] + nums[1];
    } else if (operation == '-') {
        return nums[0] - nums[1];
    } else if (operation == '*') {
        return (nums[0] * nums[1]);
    } else if (operation == '/') {
        return nums[0] / nums[1];
    } else if (operation == '%') {
        console.log("I am here!")
        return nums[0] / 100;
    } else {
        return "ERROR";
    }
}

