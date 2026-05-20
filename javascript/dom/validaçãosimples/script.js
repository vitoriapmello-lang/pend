function validarEmail() {
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("emailMensagem");

  if (email.includes("@")) {
    if (email.includes(".")) {
      mensagem.textContent = "E-mail válido";
      mensagem.style.color = "green";
    } else {
      mensagem.textContent = "E-mail inválido";
      mensagem.style.color = "red";
    }
  } else {
    mensagem.textContent = "E-mail inválido";
    mensagem.style.color = "red";
  }
}

document.getElementById("senha").addEventListener("keyup", function () {
  let senha = document.getElementById("senha").value;
  let mensagem = document.getElementById("senhaMensagem");

  if (senha.length < 6) {
    mensagem.textContent = "Senha fraca";
    mensagem.style.color = "red";
  } else {
    if (senha.length <= 10) {
      mensagem.textContent = "Senha aceitável";
      mensagem.style.color = "orange";
    } else {
      mensagem.textContent = "Senha forte";
      mensagem.style.color = "green";
    }
  }
});