export function renderizarCatalogo(container, lista) {
  container.innerHTML = '';

  lista.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card-filme';

    card.innerHTML = `
      <div class="card-imagem">
        <img src="${item.imagem}" alt="${item.titulo}">
        <span class="nota">⭐ ${item.nota}</span>
      </div>
      <div class="card-conteudo">
        <h3>${item.titulo} (${item.ano})</h3>
        <p class="generos"><strong>Gênero:</strong> ${item.generos}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

export function exibirMensagem(container, mensagem, tipo = 'info') {
  container.innerHTML = `<p class="mensagem ${tipo}">${mensagem}</p>`;
}