const canvas = document.querySelector("#canvas");

const contexto = canvas.getContext("2d");

contexto.lineWidth = 14;
contexto.lineCap = "round";
contexto.lineJoin = "round";


// cabeça
contexto.beginPath();

contexto.arc(310, 100, 40, 0, Math.PI * 2);

contexto.stroke();


// corpo
contexto.beginPath();

contexto.moveTo(300, 140);
contexto.lineTo(300, 280);

contexto.stroke();


// braços
contexto.beginPath();

contexto.moveTo(300, 145);
contexto.lineTo(210, 200);
contexto.lineTo(320, 250);

contexto.stroke();

contexto.beginPath();

contexto.moveTo(300, 145);
contexto.lineTo(360, 200);
contexto.lineTo(430, 140);

contexto.stroke();


// pernas
contexto.beginPath();

contexto.moveTo(300, 280);
contexto.lineTo(220, 360);
contexto.lineTo(210, 460);

contexto.stroke();


contexto.beginPath();

contexto.moveTo(300, 280);
contexto.lineTo(380, 360);
contexto.lineTo(385, 460);

contexto.stroke();