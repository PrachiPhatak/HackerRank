function getButtonValue(input){
    document.getElementById("buttonHidden1").value =
        document.getElementById("buttonHidden1").value + input;
    //document.getElementById("buttonHidden2").value = [];
    let nums = [];
    let operation;
    if(!parseInt(input)){
        operation = input;
        console.log(operation);
        if(operation == "="){
            alert("Answer")
        }
        document.getElementById("userInput").value = "";
        nums.push(document.getElementById("buttonHidden1").value);
        document.getElementById("buttonHidden1").value = "";
    }
    // document.getElementById("userInput").value = document.getElementById("buttonHidden1").value;
    console.log(nums)
}