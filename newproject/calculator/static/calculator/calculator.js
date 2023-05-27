let prevclick;
function displayOnScreen(e){
    let display = document.getElementById("result");
    const targetEl = e.target;
    
    if (prevclick === undefined) {

        display.value = targetEl.value;

    } else if (targetEl.value === "=") {

        calculateResult();

    } else if (prevclick === "=" && typeof targetEl.value == "number" ) {

        display.value = targetEl.value

    } else {

        display.value += targetEl.value;

    }
    prevclick = targetEl.value;
}   
function calculateResult(){
    let result = document.getElementById("result");
    result.value = eval(result.value);
}

function clearScreen(){
    let display = document.getElementById("result");
    display.value = "";
}