// Valida o nome verificando se contém apenas letras e espaços e mostra mensagem de válido ou inválido
function validarNome() {
  let nome = document.getElementById("nome").value;
  let mensagem = document.getElementById("nomeMensagem");
  let regexNome = /^[A-Za-z\s]+$/;
  if (regexNome.test(nome)) {
    mensagem.textContent = "Nome válido.";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "Nome inválido.";
    mensagem.style.color = "red";
  }
}

// Valida o email usando um padrão básico e exibe se está correto ou não
function validarEmail() {
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("emailMensagem");
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regexEmail.test(email)) {
    mensagem.textContent = "E-mail válido.";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "E-mail inválido.";
    mensagem.style.color = "red";
  }
}

// Valida a senha exigindo letras e números e classifica como fraca, aceitável ou forte
function validarSenha() {
  let senha = document.getElementById("senha").value;
  let mensagem = document.getElementById("senhaMensagem");
  let regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (regexSenha.test(senha)) {
    if (senha.length <= 10) {
      mensagem.textContent = "Senha aceitável.";
      mensagem.style.color = "orange";
    } else {
      mensagem.textContent = "Senha forte.";
      mensagem.style.color = "green";
    }
  } else {
    mensagem.textContent = "Senha fraca.";
    mensagem.style.color = "red";
  }
}

// Valida o endereço permitindo letras, números e alguns símbolos comuns
function validarEndereco() {
  let endereco = document.getElementById("endereco").value;
  let mensagem = document.getElementById("enderecoMensagem");
  let regexEndereco = /^[A-Za-z0-9\s,.-]+$/;
  if (regexEndereco.test(endereco)) {
    mensagem.textContent = "Endereço válido.";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "Endereço inválido.";
    mensagem.style.color = "red";
  }
}

// Valida o telefone verificando se tem apenas números e quantidade válida de dígitos
function validarTelefone(telefone) {
  let mensagem = telefone.nextElementSibling;
  let regexTelefone = /^\d{10,15}$/;
  if (regexTelefone.test(telefone.value)) {
    mensagem.textContent = "Telefone válido.";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "Telefone inválido.";
    mensagem.style.color = "red";
  }
}

// Adiciona eventos para validar os campos em tempo real enquanto o usuário digita
document.getElementById("nome").addEventListener("input", validarNome);
document.getElementById("email").addEventListener("input", validarEmail);
document.getElementById("senha").addEventListener("input", validarSenha);
document.getElementById("endereco").addEventListener("input", validarEndereco);

document.getElementById("telefone").addEventListener("input", function() {
  validarTelefone(this);
});

// Permite adicionar novos campos de telefone dinamicamente e também removê-los
document.getElementById("addTelefone").addEventListener("click", function() {
  let container = document.getElementById("telefonesContainer");
  let novoTelefone = document.createElement("div");
  novoTelefone.innerHTML = `
    <input type="text" class="telefone" placeholder="Telefone">
    <span class="telefoneMensagem"></span>
    <button type="button" class="removeTelefone">Remover</button>
  `;
  container.appendChild(novoTelefone);

  novoTelefone.querySelector(".telefone").addEventListener("input", function() {
    validarTelefone(this);
  });

  novoTelefone.querySelector(".removeTelefone").addEventListener("click", function() {
    container.removeChild(novoTelefone);
  });
});

let input = document.querySelector('#senha');
let botao = document.querySelector('#botaoSenha');

botao.addEventListener('click', function() {
    if (input.type === "password") {
        input.setAttribute('type', 'text');
        botao.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        input.setAttribute('type', 'password');
        botao.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});