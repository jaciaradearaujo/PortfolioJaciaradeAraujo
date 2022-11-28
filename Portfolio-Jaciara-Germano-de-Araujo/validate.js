//Seu JavaScript de validação aqui

export function validate(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode ficar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode ficar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    assunto: {
        valueMissing: 'O campo de assunto não pode ficar vazio.',
    },
   mensagem: {
        valueMissing: 'O campo de mensagem não pode ficar vazio.',
    },
}