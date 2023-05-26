let prevclick;
function displayOnScreen(e){
    let display = document.getElementById("result");
    const targetEl = e.target;

    display.value = targetEl.value;
    // const buttons = document.querySelectorAll("button");
    console.log(e.target.value, " : ", e.currentTarget);
//             if (prevclick === undefined) {
        
//                 display.value = input;

//             } else if (input === "=") {
        
//                 calculateResult();
    
//             } else if (prevclick === "=" && typeof input == "number" ) {
    
//                 display.value = input
    
//             } else {
    
//                 display.value += input;
    
//             }
//             prevclick = input;
//         }   
//     }) 
// })
}

function calculateResult(){
    let result = document.getElementById("result");
    result.value = eval(result.value);
}

function clearScreen(){
    let display = document.getElementById("result");
    display.value = "0";
}