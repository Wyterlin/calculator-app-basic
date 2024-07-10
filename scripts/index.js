// Numbers

const numbers = document.querySelectorAll('.number')

// Operators

const operador = document.querySelectorAll('.operator')

const sec_operador = document.querySelectorAll('.sec_coperator')

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

operador.forEach(function (el) {
    el.addEventListener("click", (event) => {
        const operator = event.target.innerText

        maindisplay.innerText += operator
    })
})

// Calculator secundary operator

sec_operador.forEach(function (el) {
    el.addEventListener("click", (event) => {
        const secoperator = event.target.innerText

        if (secoperator = C) {
            maindisplay.innerText = 0
            historydisplay.innerText = " "
            actionresult.innerText = 0
        }

    })
})

// Função dot

dot.addEventListener("click", (event) => {
    const value = event.target.innerText
    if (maindisplay.innerText.includes(".")) return
    maindisplay.innerText += value
})

// Função clear

// clean.addEventListener("click", (event) => {
//     maindisplay.innerText = 0
//     historydisplay.innerText = " "
//     actionresult.innerText = 0
// })

// Função backspace

backspace.addEventListener("click", (event) => {
    const vazio = 0
    maindisplay.innerText = maindisplay.innerText.slice(0, -1)

    if (maindisplay.innerText.length == 0)
        maindisplay.innerText = vazio
})

// Função soma

// soma.addEventListener("click", (event) => {
//     const value = event.target.innerText;
//     const result = Number(historydisplay.innerText) + Number(maindisplay.innerText)
//     const historyText = historydisplay.innerText.trim()

//     if (maindisplay && historydisplay) {
//         if (maindisplay.innerText !== "0") {
//             historydisplay.innerText = maindisplay.innerText;
//             maindisplay.innerText = 0

//         if (historyText !== "")
//             historydisplay.innerText = result
//             actionresult.innerText = result
//         }
//     }
// })

// Função subtração

// sub.addEventListener("click", (event) => {
//     const value = event.target.innerText;
//     const result = Number(historydisplay.innerText) - Number(maindisplay.innerText)
//     const historyText = historydisplay.innerText.trim()

//     if (maindisplay && historydisplay) {
//         if (maindisplay.innerText !== "0") {
//             historydisplay.innerText = maindisplay.innerText;
//             maindisplay.innerText = 0

//         if (historyText !== "")
//             historydisplay.innerText = result
//             actionresult.innerText = result
//         }
//     }
// })

// // Função mult

// mult.addEventListener("click", (event) => {
//     const value = event.target.innerText;
//     const result = Number(historydisplay.innerText) * Number(maindisplay.innerText)
//     const historyText = historydisplay.innerText.trim()

//     if (maindisplay && historydisplay) {
//         if (maindisplay.innerText !== "0") {
//             historydisplay.innerText = maindisplay.innerText;
//             maindisplay.innerText = 0

//         if (historyText !== "")
//             historydisplay.innerText = result
//             actionresult.innerText = result
//         }
//     }
// })

// div.addEventListener("click", (event) => {
//     const value = event.target.innerText;
//     const result = Number(historydisplay.innerText) / Number(maindisplay.innerText)
//     const historyText = historydisplay.innerText.trim()

//     if (maindisplay && historydisplay) {
//         if (maindisplay.innerText !== "0") {
//             historydisplay.innerText = maindisplay.innerText;
//             maindisplay.innerText = 0

//         if (historyText !== "")
//             historydisplay.innerText = result
//             actionresult.innerText = result
//         }
//     }
// })

// equal.addEventListener("click", (event) => {
//     const calculator_maindisplay = maindisplay.innerTex.trim();
//     const calculator_operador = calculator__operator

//     const firstValue  = Number(historydisplay.innerText) + Number(maindisplay.innerText);
//     const operador = Number(historydisplay.innerText) - Number(maindisplay.innerText);
//     const secondValue  = Number(historydisplay.innerText) * Number(maindisplay.innerText);

//     if (maindisplay && historydisplay) {
//         if (maindisplay.innerText !== "0") {
//             historydisplay.innerText = maindisplay.innerText;
//             maindisplay.innerText = 0
//         } if (soma) {
//             historydisplay.innerText = equal_soma
//         } if (sub) {
//             historydisplay.innerText = equal_sub
//         } if (mult) {
//             historydisplay.innerText = equal_mult
//         } if (div) {
//             historydisplay.innerText = equal_div
//         }
//     }   
// })
