const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')
    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    if (!peso) {
        setResultado('Peso inválido', false)
        return
    }

    if (!altura) {
        setResultado('Altura inválido', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true)

})

function getNivelImc (imc) {
    const nivel = ['Magreza', 'Peso Normal', 'Atenção Sobrepese', 'Cuidado Obesidade!']

    if (imc >= 30) {
        return nivel[3]
    }
    if (imc >= 24.9) {
        return nivel[2]
    }
    if (imc >= 18.5) {
        return nivel[1]
    }
    if (imc < 18.5) {
        return nivel[0]
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criarP () {
    const paragrafo = document. createElement('p')
    return paragrafo
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultados')
    resultado.innerHTML = ''

    const p = criarP()

    if(isValid) {
        p.classList.add('texto-paragrafo')
        
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)
}