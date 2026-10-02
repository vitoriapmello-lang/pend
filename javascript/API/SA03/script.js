
const tituloDestaque = document.querySelector('.texto-destaque h2');
const descDestaque = document.querySelector('.texto-destaque p:last-child');
const infoDestaque = document.querySelector('.info');
const imgDestaque = document.querySelector('.destaque img');
const categoriaDestaque = document.querySelector('.texto-destaque .categoria');

const gridNoticias = document.querySelector('#noticias');

let secondsPassed = 0;
let dataPublicacaoDestaque = '';

const API_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=7';

setInterval(() => {
    secondsPassed++;
    if (dataPublicacaoDestaque) {
        // Atualiza aquele <p class="info"> que você criou no HTML
        infoDestaque.textContent = `Publicado em ${dataPublicacaoDestaque} • Atualizado há ${secondsPassed}s`;
    }
}, 1000);

setInterval(() => {
    fetchNoticias();
}, 30000); 

// 5. FUNÇÃO PARA BUSCAR DADOS DA API
async function fetchNoticias() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erro na rede");
        
        const data = await response.json();
        
        secondsPassed = 0; 
        
        renderizarNoticias(data.items);
        
    } catch (error) {
        console.error("Erro ao buscar notícias da API do IBGE:", error);
    }
}

function renderizarNoticias(noticias) {
    if (!noticias || noticias.length === 0) return;

    const destaque = noticias[0]; // A primeira notícia é o destaque
    
    tituloDestaque.textContent = destaque.titulo;
    descDestaque.textContent = destaque.introducao;
    categoriaDestaque.textContent = destaque.editorias || 'Destaque';
    
    dataPublicacaoDestaque = destaque.data_publicacao.split(' ')[0];
    
    try {
        const imagens = JSON.parse(destaque.imagens);
        if (imagens.image_intro) {
            imgDestaque.src = `https://agenciadenoticias.ibge.gov.br/${imagens.image_intro}`;
        }
    } catch(e) {}

    gridNoticias.innerHTML = ''; // Limpa os cards estáticos que estavam no HTML
    
    const demaisNoticias = noticias.slice(1, 7); // Pega as notícias da posição 1 até a 6
    
    demaisNoticias.forEach((noticia) => {
        let imgCardUrl = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"; 
        try {
            const imagens = JSON.parse(noticia.imagens);
            if (imagens.image_intro) {
                imgCardUrl = `https://agenciadenoticias.ibge.gov.br/${imagens.image_intro}`;
            }
        } catch(e) {}

        const introResumida = noticia.introducao.length > 90 
            ? noticia.introducao.substring(0, 90) + '...' 
            : noticia.introducao;
            
        const editoria = noticia.editorias || 'Geral';

        const cardHTML = `
            <article class="noticia">
                <img src="${imgCardUrl}" alt="${noticia.titulo}">
                <span class="categoria">${editoria}</span>
                <h3>${noticia.titulo}</h3>
                <p>${introResumida}</p>
                <button onclick="window.open('${noticia.link}', '_blank')">Leia mais</button>
            </article>
        `;
        
        gridNoticias.innerHTML += cardHTML;
    });
}

window.addEventListener('DOMContentLoaded', () => {
    fetchNoticias();
});


const menuLinks = document.querySelectorAll('.links a');

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const categoria = link.getAttribute('href').replace('#', ''); 

        if (categoria === 'inicio' || categoria === 'rodape') {
            return;
        }

        event.preventDefault(); 

        document.querySelector('.destaque').scrollIntoView({ behavior: 'smooth' });

        tituloDestaque.textContent = `Buscando notícias sobre ${categoria}...`;
        
        buscarPorCategoria(categoria);
    });
});

async function buscarPorCategoria(termo) {
    try {
        const urlFiltro = `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=7&busca=${termo}`;
        
        const response = await fetch(urlFiltro);
        if (!response.ok) throw new Error("Erro na rede");
        
        const data = await response.json();
        
        secondsPassed = 0; 
        
        if (data.items.length === 0) {
            tituloDestaque.textContent = `Nenhuma notícia encontrada para "${termo}".`;
            descDestaque.textContent = "Tente outra categoria.";
            gridNoticias.innerHTML = '';
            return;
        }

        renderizarNoticias(data.items);
        
    } catch (error) {
        console.error("Erro ao filtrar notícias:", error);
    }
}