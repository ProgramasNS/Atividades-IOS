//Buscar elementos
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const horario = document.querySelector('#horario')
const msg = document.querySelector('.msg')
const msg_email = document.querySelector('.msg_email')
const clientes = document.querySelector('#users')

//Método para receber o envio do formulário
myForm.addEventListener('submit', cadCliente)

//Função para registrar o cadastro
function cadCliente(e) {
    e.preventDefault()
    //Validando preenchimento do usuário
    if(nameInput.value === '' || emailInput.value === '' || horario.value === '') {
        const msgError = document.createElement('p')
        msgError.classList.add('error')
        msgError.innerHTML = 'Vacilou, maluco! Coloca alguma coisa aí, caramba!'
        msg.appendChild(msgError)
        setTimeout(() => msg.remove(), 5000)
    } else {
        //Criar elemento <li>
        const li = document.createElement('li')
        //Inserindo conteúdo no elemento li
        li.appendChild(
         document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${horario.value}`)
        )
        //Associar li à lista de clientes
        clientes.appendChild(li)

        //Apagar informações do formulário
        nameInput.value = ''
        emailInput.value = ''
        horario.getElementsByTagName('option')[0].selected = 'selected'
        nameInput.focus()
    }
}