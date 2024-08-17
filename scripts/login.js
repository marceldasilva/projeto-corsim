const email = document.querySelector("#iemail");
const senha = document.querySelector("#isenha");
const botaoLogin = document.querySelector(".botao");

botaoLogin.addEventListener('click', () => {
    validaFormulario();
})

window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        validaFormulario();
    }
})

function validaEmail() {
    const regex = /^\w+\@gmail+\.com+$/;
    if (regex.test(email.value)) {
        console.log(email.value);
    } else {
        throw new Error("O email informado não é válido.");
    }
}

function validaSenha() {
    const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@!_#&]).{8,20}$/;
    if (regex.test(senha.value)) {
        console.log(senha.value);
    } else {
        throw new Error("A senha informada não é válida.");
    }
}

function validaFormulario() {
    try {
        validaEmail();
        validaSenha();
    } catch(erro) {
        alert(`${erro}`);
    }
}