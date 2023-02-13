const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert('Por favor, preencha o seu nome.')
        return
    }

    // Verifica se o email está vazio
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert('Por favor, preencha o seu e-mail.')
        return
    }

    // Verifica se a senha está vazia
    if(passwordInput.value === "") {
        alert('Por favor, preencha a sua senha.')
        return
    }

    // Verifica se o job foi selecionado
    if(jobSelect.value === "") {
        alert('Por favor, selecione a sua situação.')
        return
    }

    form.submit()
})

// Função que valida e-mail
function isEmailValid(email) {
    // Cria uma Regex para validar o e-mail
    const emailRegex = new RegExp(
        //usuario77@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)) {
        return true
    }

    return false
}