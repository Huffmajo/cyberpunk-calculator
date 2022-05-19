const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".buttons");
const display = calculator.querySelector(".display");
let preOp = null;
let postOp = null;
let op = null;

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const currDisplay = display.textContent;

        // number
        if(!action) {
            const keyContent = key.textContent;

            currDisplay === "0" 
                ? updateDisplay(keyContent)
                : updateDisplay (currDisplay + keyContent); 
        }

        // modifier
        switch (action) {
            case "add":
                console.log("add");
                if (preOp != null) {
                    postOp = currDisplay;
                    updateDisplay(calculate(preOp, postOp, op))
                }
                op = "+";
                preOp = currDisplay;
                clearDisplay();
                break;
            case "subtract":
                console.log("subtract");
                break;
            case "multiply":
                console.log("multiply");
                break;
            case "divide":
                console.log("divide");
                break;
            case "clear":
                clearDisplay();
                break;
            case "decimal":
                if (!currDisplay.includes(".")) {
                    updateDisplay(currDisplay + ".");
                }
                break;
            case "calculate":
                console.log("calculate");
                postOp = currDisplay;
                updateDisplay(calculate(preOp, postOp, op));
                break;
        }

    }
});

function updateDisplay(value) {
    display.textContent = value.substring(0, 10);
}

function clearDisplay() {
    display.textContent = "0";
}

function calculate(preOperator, postOperator, operator) {
    if (preOperator == null || postOperator == null || operator == null) {
        console.log("preOp:", preOperator, "op:", operator, "postOp", postOperator);
        updateDisplay("Error");
    }

    let result = "Default";
    switch (operator) {
        case "+":
            result = Number(preOperator) + Number(postOperator);
            break;
        case "-":
            result = preOperator - postOperator;
            break;
        case "/":
            result = preOperator / postOperator;
            break;
        case "*":
            result = preOperator * postOperator;
            break;
    }

    // clear 
    preOperator = result;
    postOperator = null;
    operator = null;

    return result.toString();
}