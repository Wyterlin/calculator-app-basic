// Numbers

const numbers = document.querySelectorAll('.number')

// Operators

const operators = document.querySelectorAll('.operator')

const sec_operators = document.querySelectorAll('.sec_operator')

// Windows

const maindisplay = document.querySelector('.display__main')

const historydisplay = document.querySelector('.display__history')

const actionresult = document.querySelector('.action__result')

// Menção das funções

const dot = document.querySelector('.dot')

const signalchange = document.querySelector('.signal_change')

const backspace = document.querySelector('.backspace')

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

operators.forEach(function (el) {
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

sec_operators.forEach(function (el) {
    el.addEventListener("click", (event) => {
        const secoperator = event.target.innerText;

    if (secoperator === 'C') {
        maindisplay.innerText = "0";
        historydisplay.innerText = "";
        actionresult.innerText = "0";
            } else if (secoperator === '%') {
                maindisplay.innerText = maindisplay.innerText * 0.01
            } else if (secoperator === '()') {
                historydisplay.innerText = '(' + maindisplay.innerText + ')'
                maindisplay.innerText = 0
            }
    })
})

// Função dot

dot.addEventListener("click", (event) => {
    const value = event.target.innerText
    if (maindisplay.innerText.includes(".")) return
    maindisplay.innerText += value
})

// Função troca de sinal

signalchange.addEventListener("click", (event) => {
    const value = event.target.innerText
    
    if (secoperator === '+/-') {
        maindisplay.innerText = - + maindisplay.innerText
    }
})

// Função backspace

backspace.addEventListener("click", (event) => {
    const vazio = 0
    maindisplay.innerText = maindisplay.innerText.slice(0, -1)

    if (maindisplay.innerText.length == 0)
        maindisplay.innerText = vazio
})