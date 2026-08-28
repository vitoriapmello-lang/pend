// ============================================
// MONTE SEU PC — PROTOCOLO SOMBRA
// Lógica de drag and drop
// ============================================

const cards = document.querySelectorAll(".card");
const slots = document.querySelectorAll(".slot");
const progressFill = document.getElementById("progress-fill");
const progressLabel = document.getElementById("progress-label");
const log = document.getElementById("log");
const resetBtn = document.getElementById("reset-btn");
const overlay = document.getElementById("success-overlay");
const overlayReset = document.getElementById("overlay-reset");
const caseEl = document.getElementById("case");

const totalPartes = cards.length;
let instaladas = 0;

const nomesPartes = {
  cpu: "Processador",
  ram: "Memória RAM",
  gpu: "Placa de Vídeo",
  cooler: "Cooler",
  storage: "Armazenamento",
  psu: "Fonte",
};

// adiciona uma linha no terminal de status
function addLog(texto, tipo = "ok") {
  const linha = document.createElement("p");
  linha.className = `terminal__line terminal__line--${tipo}`;
  const hora = new Date().toLocaleTimeString("pt-BR", { hour12: false });
  linha.textContent = `[${hora}] ${texto}`;
  log.appendChild(linha);
  log.scrollTop = log.scrollHeight;
}

// ---------- eventos das peças (origem do drag) ----------
cards.forEach((card) => {
  card.addEventListener("dragstart", (event) => {
    if (card.classList.contains("card--instalado")) {
      event.preventDefault();
      return;
    }
    event.dataTransfer.setData("text/plain", card.id);
    card.classList.add("card--arrastando");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("card--arrastando");
  });
});

// ---------- eventos dos encaixes (destino do drop) ----------
slots.forEach((slot) => {
  slot.addEventListener("dragover", (event) => {
    if (slot.classList.contains("slot--preenchido")) return;
    event.preventDefault();
    slot.classList.add("slot--hover");
  });

  slot.addEventListener("dragleave", () => {
    slot.classList.remove("slot--hover");
  });

  slot.addEventListener("drop", (event) => {
    event.preventDefault();
    slot.classList.remove("slot--hover");

    if (slot.classList.contains("slot--preenchido")) return;

    const id = event.dataTransfer.getData("text/plain");
    const card = document.getElementById(id);
    if (!card) return;

    const parteCorreta = card.dataset.part === slot.dataset.slot;

    if (parteCorreta) {
      instalarParte(card, slot);
    } else {
      rejeitarParte(slot, card.dataset.part);
    }
  });
});

// peça correta encaixada
function instalarParte(card, slot) {
  const icone = card.querySelector(".card__icon").textContent;

  slot.classList.add("slot--preenchido", "slot--sucesso");
  slot.innerHTML = `<span class="slot__icon">${icone}</span><span class="slot__label">${slot.dataset.slot.toUpperCase()}</span>`;

  card.classList.add("card--instalado");
  card.setAttribute("draggable", "false");

  instaladas++;
  addLog(`${nomesPartes[slot.dataset.slot]} instalada com sucesso.`, "ok");
  atualizarProgresso();

  setTimeout(() => slot.classList.remove("slot--sucesso"), 600);

  if (instaladas === totalPartes) {
    finalizarBuild();
  }
}

// peça errada solta no encaixe
function rejeitarParte(slot, parteId) {
  slot.classList.add("slot--erro");
  addLog(
    `falha: "${nomesPartes[parteId]}" incompatível com o encaixe ${slot.dataset.slot.toUpperCase()}.`,
    "erro"
  );
  setTimeout(() => slot.classList.remove("slot--erro"), 400);
}

function atualizarProgresso() {
  const pct = Math.round((instaladas / totalPartes) * 100);
  progressFill.style.width = `${pct}%`;
  progressLabel.textContent = `${pct}%`;
}

function finalizarBuild() {
  addLog("build completo. inicializando sistema...", "ok");
  caseEl.classList.add("case--online");
  setTimeout(() => {
    overlay.classList.add("overlay--visivel");
  }, 900);
}

function reiniciar() {
  location.reload();
}

resetBtn.addEventListener("click", reiniciar);
overlayReset.addEventListener("click", reiniciar);

addLog("sistema pronto. aguardando componentes...", "ok");