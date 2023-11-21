var inputResult = document.getElementById('inputResult')


function getNumber(num) {
    var lastChar = inputResult.value.slice(-1);
    //last character ko get kia gaya ha .value se 





   

    var myOperators = ["+", "-", "/", "*"]
    //create array of operators to check if last char is a oprtr

    if (myOperators.indexOf(lastChar) !== -1 && myOperators.indexOf(num) !== -1) {
        //here we check two things if last char is oprtr and a num 
        // if both conditions gets true then update value
        //agr buttons se oprtr aa rah ha or current value ka last char bhi oprtr ha
        //to value = current(0->last-1)+new aany wala 
        inputResult.value = inputResult.value.slice(0, -1) + num; 

    }
       else {
        inputResult.value = inputResult.value + num;
    }



    // console.log(num, inputResult);
}
function clearResult() {
    inputResult.value = "";
}

function getResult() {
    inputResult.value = eval(inputResult.value);
    if (inputResult.value == undefined || inputResult.value == NaN) {
        console.log("Enter valid operation");
    }
}
function del() {
    inputResult.value = inputResult.value.slice(0, inputResult.value.length - 1);
}
