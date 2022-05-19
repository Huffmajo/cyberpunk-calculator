const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".buttons");
const display = calculator.querySelector(".display");

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const currDisplay = display.textContent;

        // number
        if(!action) {
            const keyContent = key.textContent;

            currDisplay === "0" 
                ? display.textContent = keyContent
                : display.textContent += keyContent; 
        }

        // modifier
        switch (action) {
            case "add":
                console.log("add");
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
                display.textContent = "0";
                break;
            case "decimal":
                if (!currDisplay.includes(".")) {
                    display.textContent += "."
                }
                break;
            case "calculate":
                console.log("calculate");
                break;
        }

    }
});