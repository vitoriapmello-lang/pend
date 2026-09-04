navigator.geolocation.getCurrentPosition(
    function(position) {
        console.log("Latitude: ", position.coords.latitude);
        console.log("Longitude: ", position.coords.longitude);
        console.log("Precision: ", position.coords.accuracy);
    },
    function(erro) {
        console.log("Não foi possivel localizar.", erro);
    }
);