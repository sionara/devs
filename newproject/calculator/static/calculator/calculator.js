let prevclick;  //&& !isNaN(targetEl.value) 
// let display = document.getElementById("screen"); //putting it here does not work. 
const operator = ["+", "-", "*", "/"];
function displayOnScreen(e){
    let display = document.getElementById("screen");
    const targetEl = e.target;
    console.log(targetEl === display)
    if (targetEl.value && targetEl !== display/*|| targetEl.value === "0"*/) { //this is for case when user presses outside the buttons, but inside table. also "0" is considered false boolean, so we need to include to count as true
        if (operator.includes(targetEl.value)){
            if (!prevclick || operator.includes(prevclick) || prevclick === "Clear" ){
                return
            }
            display.value += targetEl.value;
        } else if (targetEl.value === "=") {

            calculateResult();

        } else if (prevclick === "="
        && operator.includes(targetEl.value) === false)  {
            
            display.value = targetEl.value

        } else {
            display.value += targetEl.value
        }
    prevclick = targetEl.value;
    }
}   
function calculateResult(){
    let display = document.getElementById("screen");
    let result = eval(display.value);
    if (!result) {
        display.value = "Please input some numbers."
    } else {
        display.value = result
    }

}

function clearScreen(e){
    console.log("clear function ran.")

    let display = document.getElementById("screen");
    display.value = ""
    prevclick = "Clear"
    e.stopPropagation();
}

// press number, then clear. then pressing operator will be displayed. 