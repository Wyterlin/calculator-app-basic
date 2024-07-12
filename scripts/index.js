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
        let CurrentValue = maindisplay.innerText

        const operator = event.target.innerText
        const historyText = historydisplay.innerText.trim()
        const firstValue = parseFloat(historydisplay.innerText)
        console.log("🚀 ~ el.addEventListener ~ parseFloat(historydisplay.innerText):", parseFloat(historydisplay.innerText))
        const secondValue = parseFloat(maindisplay.innerText)
        console.log("🚀 ~ el.addEventListener ~ parseFloat(maindisplay.innerText):", parseFloat(maindisplay.innerText))

        if (maindisplay && historydisplay) {
            if (CurrentValue !== "0") {
                historydisplay.innerText = CurrentValue + " " + operator
                CurrentValue = secondValue
                maindisplay.innerText = "0"
            }

            if (historyText !== "") {
                let result;
                switch (operator) {
                    case '+':
                        result = firstValue + CurrentValue;
                        break
                    case '-':
                        result = firstValue - CurrentValue;
                        break
                    case 'x':
                        result = firstValue * CurrentValue;
                        break
                    case '/':
                        result = firstValue / CurrentValue;
                        break
                    default:
                        result = firstValue;
                }

                historydisplay.innerText = result + " " + operator
                actionresult.innerText = result
                maindisplay.innerText = "0"
            }
        }
    })
})

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
    
        maindisplay.innerText = - + maindisplay.innerText
})

// Função backspace

backspace.addEventListener("click", (event) => {
    const vazio = 0
    maindisplay.innerText = maindisplay.innerText.slice(0, -1)

    if (maindisplay.innerText.length == 0)
        maindisplay.innerText = vazio
})