// Numbers

const numbers = document.querySelectorAll('.number')

// Operators

const operator = document.querySelectorAll('.operator')

const sec_operator = document.querySelectorAll('.sec_operator')

// Windows

const maindisplay = document.querySelector('.display__main')

const historydisplay = document.querySelector('.display__history')

const actionresult = document.querySelector('.action__result')

// Menção das funções

const dot = document.querySelector('.dot')

const clean = document.querySelector('.clean')

const backspace = document.querySelector('.action__clear-display')

// Operator egual

const equal = document.querySelector('.equal')


// Calculator number

numbers.forEach(function (el) {
    el.addEventListener("click", (event) => {
        const numberconverted = Number(event.target.innerText)

        if (maindisplay.innerText.startsWith("0") && !maindisplay.innerText.includes(".")){
            maindisplay.innerText = numberconverted
        } else {
            maindisplay.innerText = maindisplay.innerText.concat(numberconverted)
        }
    })
})

// Calculator operator

operator.forEach(function (el) {
    el.addEventListener("click", (event) => {
        const operator = event.target.innerText;
        const historyText = historydisplay.innerText.trim();
        const firstValue = Number(historydisplay.innerText);
        const secondValue = Number(maindisplay.innerText);

        if (maindisplay && historydisplay) {
            if (maindisplay.innerText !== "0") {
                historydisplay.innerText = maindisplay.innerText;
                maindisplay.innerText = "0"; // Ensure this is a string, not a number
            }

            if (historyText !== "") {
                let result;
                switch (operator) {
                    case '+':
                        result = firstValue + secondValue;
                        break;
                    case '-':
                        result = firstValue - secondValue;
                        break;
                    case 'x':
                        result = firstValue * secondValue;
                        break;
                    case '/':
                        result = firstValue / secondValue;
                        break;
                    default:
                        result = firstValue;
                }
                historydisplay.innerText = result
                actionresult.innerText = result;
            }
        }
    });
});


// Calculator secundary operator

sec_operator.forEach(function (el) {
    el.addEventListener("click", (event) => {
        const secoperator = event.target.innerText;

        if (secoperator === 'C') {
            maindisplay.innerText = "0";
            historydisplay.innerText = "";
            actionresult.innerText = "0"; // Se você tiver um display para resultados de ação
            firstValue = null;
            currentOperator = null;
        }
    });
});

// Função dot

dot.addEventListener("click", (event) => {
    const value = event.target.innerText
    if (maindisplay.innerText.includes(".")) return
    maindisplay.innerText += value
})

// Função backspace

backspace.addEventListener("click", (event) => {
    const vazio = 0
    maindisplay.innerText = maindisplay.innerText.slice(0, -1)

    if (maindisplay.innerText.length == 0)
        maindisplay.innerText = vazio
})