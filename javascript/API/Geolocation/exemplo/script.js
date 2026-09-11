const texto = document.getElementById('status-texto');
const imagem = document.getElementById('status-imagem');

const urlImagemAceito = 'https://cdn-icons-png.flaticon.com/512/684/684908.png'; // Pino de localização verde
const urlImagemNegado = 'https://cdn-icons-png.flaticon.com/512/17186/17186392.png'; // Localização com X vermelho

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log("Latitude: ", position.coords.latitude);
            console.log("Longitude: ", position.coords.longitude);
            console.log("Precision: ", position.coords.accuracy);

            texto.innerText = "Localização permitida!";
            imagem.src = urlImagemAceito;
            imagem.style.display = "block"; 
        },
        function(erro) {
            console.log("Não foi possível localizar.", erro);

            // Atualiza o HTML para negado ou erro
            texto.innerText = "Permissão negada ou localização indisponível.";
            imagem.src = urlImagemNegado;
            imagem.style.display = "block"; 
        }
    );
}