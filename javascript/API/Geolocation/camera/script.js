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