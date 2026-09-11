const camera = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");


navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        const video = document.querySelector("#camera");
        video.srcObject = stream;
    })
    .catch(function(erro) {
        console.erro("erro a acessar a camera.", erro);
    });

    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        const audio = document.querySelector("#audio");
        audio.srcObject = stream;
    })
    .catch(function(erro) {
        console.erro("erro a acessar o microfone.", erro);
    });
    
    botao.addEventListener("click", function() {
        canvas.width = camera.videoWidth;
        canvas.height = camera.videoHeight;

        const contexto = canvas.getContext("2d");

        contexto.drawImage(camera, 0, 0, canvas.width, canvas.height);

        foto.src = canvas.toDataURL("image/png");
    });