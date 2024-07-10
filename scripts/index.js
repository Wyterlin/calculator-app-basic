// Menção dos números

const numbers = document.querySelectorAll('.number')

// Menção dos telas

const maindisplay = document.querySelector('.display__main')

const historydisplay = document.querySelector('.display__history')

const actionresult = document.querySelector('.action__result')

// Menção das funções

const dot = document.querySelector('.dot')

const clean = document.querySelector('.clean')

const backspace = document.querySelector('.action__clear-display')

// Menção das operações

const soma = document.querySelector('.soma')

const sub = document.querySelector('.sub')

const mult = document.querySelector('.mult')

const div = document.querySelector('.div')

const equal = document.querySelector('.equal')

// Números da calculadora

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


// Função Ponto

dot.addEventListener("click", (event) => {
    const value = event.target.innerText
    if (maindisplay.innerText.includes(".")) return
    maindisplay.innerText += value
})

// Função Limpar

clean.addEventListener("click", (event) => {
    maindisplay.innerText = 0
    historydisplay.innerText = " "
    actionresult.innerText = 0
})

// Função apagar

backspace.addEventListener("click", (event) => {
    const vazio = 0
    maindisplay.innerText = maindisplay.innerText.slice(0, -1)

    if (maindisplay.innerText.length == 0)
        maindisplay.innerText = vazio
})

// Função soma

soma.addEventListener("click", (event) => {
    const value = event.target.innerText;
    const result = Number(historydisplay.innerText) + Number(maindisplay.innerText)
    const historyText = historydisplay.innerText.trim()

    if (maindisplay && historydisplay) {
        if (maindisplay.innerText !== "0") {
            historydisplay.innerText = maindisplay.innerText;
            maindisplay.innerText = 0

        if (historyText !== "")
            historydisplay.innerText = result
            actionresult.innerText = result
        }
    }
})

// Função subtração

sub.addEventListener("click", (event) => {
    const value = event.target.innerText;
    const result = Number(historydisplay.innerText) - Number(maindisplay.innerText)
    const historyText = historydisplay.innerText.trim()

    if (maindisplay && historydisplay) {
        if (maindisplay.innerText !== "0") {
            historydisplay.innerText = maindisplay.innerText;
            maindisplay.innerText = 0

        if (historyText !== "")
            historydisplay.innerText = result
            actionresult.innerText = result
        }
    }
})

// Função mult

mult.addEventListener("click", (event) => {
    const value = event.target.innerText;
    const result = Number(historydisplay.innerText) * Number(maindisplay.innerText)
    const historyText = historydisplay.innerText.trim()

    if (maindisplay && historydisplay) {
        if (maindisplay.innerText !== "0") {
            historydisplay.innerText = maindisplay.innerText;
            maindisplay.innerText = 0

        if (historyText !== "")
            historydisplay.innerText = result
            actionresult.innerText = result
        }
    }
})

div.addEventListener("click", (event) => {
    const value = event.target.innerText;
    const result = Number(historydisplay.innerText) / Number(maindisplay.innerText)
    const historyText = historydisplay.innerText.trim()

    if (maindisplay && historydisplay) {
        if (maindisplay.innerText !== "0") {
            historydisplay.innerText = maindisplay.innerText;
            maindisplay.innerText = 0

        if (historyText !== "")
            historydisplay.innerText = result
            actionresult.innerText = result
        }
    }
})

equal.addEventListener("click", (event) => {
    const equal_soma = Number(historydisplay.innerText) + Number(maindisplay.innerText);
    const equal_sub = Number(historydisplay.innerText) - Number(maindisplay.innerText);
    const equal_mult = Number(historydisplay.innerText) * Number(maindisplay.innerText);
    const equal_div = Number(historydisplay.innerText) / Number(maindisplay.innerText);

    if (maindisplay && historydisplay) {
        if (maindisplay.innerText !== "0") {
            historydisplay.innerText = maindisplay.innerText;
            maindisplay.innerText = 0
        } if (soma) {
            historydisplay.innerText = equal_soma
        } if (sub) {
            historydisplay.innerText = equal_sub
        } if (mult) {
            historydisplay.innerText = equal_mult
        } if (div) {
            historydisplay.innerText = equal_div
        }
    }   
})
