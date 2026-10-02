import { buscarFilmesESeries } from './api.js';
import { renderizarCatalogo, exibirMensagem } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
  const formBusca = document.getElementById('form-busca');
  const inputBusca = document.getElementById('input-busca');
  const catalogoContainer = document.getElementById('catalogo');

  formBusca.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    const termo = inputBusca.value;

    exibirMensagem(catalogoContainer, 'Buscando títulos...', 'info');

    try {
      const resultados = await buscarFilmesESeries(termo);
      renderizarCatalogo(catalogoContainer, resultados);
    } catch (erro) {
      exibirMensagem(catalogoContainer, erro.message, 'erro');
    }
  });
});