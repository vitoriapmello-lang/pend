const camera = document.querySelector("#camera");
const canvas = document.querySelector("#foto");

const btnCamera = document.querySelector("#btnCamera");
const btnFoto = document.querySelector("#btnFoto");
const btnLocalizacao = document.querySelector("#btnLocalizacao");
const btnRegistrar = document.querySelector("#btnRegistrar");

const localizacao = document.querySelector("#localizacao");
const registro = document.querySelector("#registro");

let latitude = null;
let longitude = null;
let precisao = null;
let fotoTirada = false;


// ===============================
// 📷 CÂMERA
// ===============================

btnCamera.addEventListener("click", function () {

    navigator.mediaDevices.getUserMedia({
        video: true
    })

    .then(function (stream) {

        camera.srcObject = stream;

    })

    .catch(function (erro) {

        console.error("Erro ao acessar a câmera.", erro);

    });

});


// ===============================
// 📸 TIRAR FOTO
// ===============================

btnFoto.addEventListener("click", function () {

    const contexto = canvas.getContext("2d");

    canvas.width = camera.videoWidth;
    canvas.height = camera.videoHeight;

    contexto.drawImage(
        camera,
        0,
        0,
        canvas.width,
        canvas.height
    );

    fotoTirada = true;

    console.log("Foto registrada!");

});


// ===============================
// 📍 GEOLOCALIZAÇÃO
// ===============================

btnLocalizacao.addEventListener("click", function () {

    navigator.geolocation.getCurrentPosition(

        function (position) {

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            precisao = position.coords.accuracy;

            localizacao.innerHTML = `
                <strong>Latitude:</strong> ${latitude}<br>
                <strong>Longitude:</strong> ${longitude}<br>
                <strong>Precisão:</strong> ${precisao.toFixed(2)} metros
            `;

        },

        function (erro) {

            console.error(
                "Não foi possível obter a localização.",
                erro
            );

            localizacao.textContent =
                "Não foi possível obter a localização.";

        }

    );

});


// ===============================
// ⛏️ REGISTRAR EXPLORAÇÃO
// ===============================

btnRegistrar.addEventListener("click", function () {

    const nomeLocal = document.querySelector("#nomeLocal").value;
    const bioma = document.querySelector("#bioma").value;

    if (!nomeLocal) {
        alert("Digite o nome do local!");
        return;
    }

    if (!fotoTirada) {
        alert("Tire uma foto antes de registrar a exploração!");
        return;
    }

    if (latitude === null) {
        alert("Obtenha sua localização antes de registrar!");
        return;
    }

    registro.innerHTML = `
        <h3>⛏️ ${nomeLocal}</h3>

        <p><strong>Bioma:</strong> ${bioma}</p>

        <img 
            src="${canvas.toDataURL("image/png")}"
            width="400"
        >

        <h4>📍 Coordenadas</h4>

        <p>
            <strong>Latitude:</strong> ${latitude}
            <br>
            <strong>Longitude:</strong> ${longitude}
            <br>
            <strong>Precisão:</strong> ${precisao.toFixed(2)} metros
        </p>

        <p>Exploração registrada com sucesso!</p>
    `;

});