export async function buscarFilmesESeries(termo) {
  if (!termo.trim()) {
    throw new Error('Por favor, digite o nome de um filme ou série.');
  }

  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(termo)}`;
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error('Erro ao conectar com a API de filmes.');
  }

  const dados = await resposta.json();

  if (dados.length === 0) {
    throw new Error('Nenhum filme ou série encontrado com esse nome.');
  }

  return dados.map(item => ({
    id: item.show.id,
    titulo: item.show.name,
    imagem: item.show.image ? item.show.image.medium : 'https://via.placeholder.com/210x295?text=Sem+Capa',
    nota: item.show.rating?.average || 'N/A',
    generos: item.show.genres && item.show.genres.length > 0 ? item.show.genres.join(', ') : 'Gênero não informado',
    ano: item.show.premiered ? item.show.premiered.split('-')[0] : 'N/A'
  }));
}