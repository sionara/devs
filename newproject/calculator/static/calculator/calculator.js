let prevclick;
// let display = document.getElementById("screen"); //putting it here does not work.
const operator = ["+", "-", "*", "/"];
function displayOnScreen(e){
    let display = document.getElementById("screen");
    const targetEl = e.target;

    if (targetEl.value || targetEl.value === '0') {
        if (!prevclick) {
            if (operator.includes(targetEl.value)){
                return
            }
            display.value = targetEl.value;

        } else if (targetEl.value === "=") {

            calculateResult();

        } else if (prevclick === "=" //&& !isNaN(targetEl.value) 
        
        && operator.includes(targetEl.value) === false)  {
            console.log("new calculation begins");
            display.value = targetEl.value

        } else {

            display.value += targetEl.value;

        }
    prevclick = targetEl.value;
    }
}   
function calculateResult(){
    let display = document.getElementById("screen");
    display.value = eval(display.value);
}

function clearScreen(e){
    console.log("clear function ran.")

    let display = document.getElementById("screen");
    display.value = ""
    e.stopPropagation();
}