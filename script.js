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
                preOp = currDisplay;
                op = "+";
                clearDisplay();
                break;
            case "subtract":
                console.log("subtract");
                preOp = currDisplay;
                op = "-";
                clearDisplay();
                break;
            case "multiply":
                console.log("multiply");
                preOp = currDisplay;
                op = "*";
                clearDisplay();
                break;
            case "divide":
                console.log("divide");
                preOp = currDisplay;
                op = "/";
                clearDisplay();
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
                updateDisplay(calculate());
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

function calculate() {
    if (preOp == null || postOp == null || op == null) {
        console.log("preOp:", preOp, "op:", op, "postOp", postOp);
        exit;
    }

    let result = "Default";
    switch (op) {
        case "+":
            result = Number(preOp) + Number(postOp);
            break;
        case "-":
            result = Number(preOp) - Number(postOp);
            break;
        case "/":
            result = Number(preOp) / Number(postOp);
            break;
        case "*":
            result = Number(preOp) * Number(postOp);
            break;
    }

    // clear 
    preOp = result;
    postOp = null;
    op = null;

    return result.toString();
}