let nomeArray = []
let numArray = []
const nome = document.querySelector('input#nome')
const num = document.querySelector('input#numero')
const btn = document.querySelector('button')
const tbody = document.querySelector('tbody')


btn.addEventListener('click', function(){
    verificaInputs()
})

function verificaInputs() {
    if (nome.value == '') {
        alert('Por favor, digite um nome.')
        nome.focus()
    } else if (num.value == '') {
        alert('Por favor, digite um número.')
        num.focus()
    } else {
        verificaNome()
    }
}

function verificaNome() {
    var possuiNome = false

    for(c = 0; c < nomeArray.length; c++) {
        if (nome.value.toUpperCase() == nomeArray[c]) {
            possuiNome = true
        }
    } if (!possuiNome) {
        verificaTamanhoNumero()
    } else if (possuiNome) {
        alert(`${nome.value} já esta na lista de contatos`)
        nome.value = ''
        nome.focus()
    }
}

function verificaTamanhoNumero() {
    if (num.value.length < 8) {
        alert('Números com menos de 8 digitos não são válidos')
        num.value = ''
        num.focus()
    } else if (num.value.length > 15) {
        alert('Números com mais de 15 digitos não são válidos')
        num.value = ''
        num.focus()
    } else {
        verificaNumero()
    }
}

function verificaNumero() {
    var possuiNumero = false

    for(let c2 = 0; c2 < numArray.length; c2++) {
        if(numArray[c2] == num.value) {
            possuiNumero = true
        }
    } if (!possuiNumero) {
        contaContatos()
    } else if (possuiNumero) {
        alert(`${num.value} já esta na lista de contatos`)
        num.value = ''
        num.focus()
    }
}


function contaContatos() {
    nomeArray.push(nome.value.toUpperCase())
    numArray.push(num.value)
    var contatos = document.querySelector('td#contatos')
    contatos.innerHTML = `${numArray.length}`
    addLinha()
}

function addLinha() {
    contato = `<td>${nomeArray[nomeArray.length - 1]}</td><td>${numArray[numArray.length - 1]}</td>`
    linha = `<tr>${contato}</tr>`
    tbody.innerHTML += linha
    nome.value = ''
    num.value = ''
    nome.focus()
}