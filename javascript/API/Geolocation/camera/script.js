navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        const video = document.querySelector("#camera");
        video.srcObject = stream;
    })
    .catch(function(erro) {
        console.erro("erro a acessar a camera.", erro);
    });