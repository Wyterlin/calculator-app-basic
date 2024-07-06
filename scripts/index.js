const numbers = document.querySelectorAll('.number')

const maindisplay = document.querySelector('.display__main')

const dot = document.querySelector('.dot')

const clean = document.querySelector('.clean')

const backspace = document.querySelector('.action__clear-display')

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
})

// Função apagar

backspace.addEventListener("click", (event) => {
    const vazio = 0
    maindisplay.innerText = maindisplay.innerText.slice(0, -1)

    if (maindisplay.innerText.length == 0)
        maindisplay.innerText = vazio
})