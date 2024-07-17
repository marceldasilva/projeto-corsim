function logar() {
    const email = document.getElementById("iemail")
    const senha = document.getElementById("isenha")

    if (email.value.length == 0 || senha.value.length == 0) {
        alert('Ambos campos devem estar preenchidos.')
    } else if (email.value.length < 4 || email.value.length > 25) {
        alert('O campo email não tem caracteres o suficiente.')
    } else if (email.value.indexOf("@") == -1) {
        alert('O email deve conter "@".')
    } else if (senha.value.length < 8) {
        alert('A senha deve ter no mínimo 8 caracteres.')
    } else {
        window.location = "index.html"
    }
}