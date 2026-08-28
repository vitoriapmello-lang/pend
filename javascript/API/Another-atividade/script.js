/* =========================================================
   ACCESS://SOMBRA — Team Builder — script.js
   Drag and Drop nativo (HTML5 Drag & Drop API)
   ========================================================= */

// ---- 1) DADOS DOS AGENTES -------------------------------------------------
// Troque "img" pelo caminho da imagem real do herói.
// Ex: "assets/tank/reinhardt.png". Se a imagem não existir,
// um avatar de fallback com a inicial do nome é gerado automaticamente.
const HEROES = [
  { id: "domina", name: "Domina", role: "tank", img: "fotos/domina.jpg" },
  { id: "rainhajunker",   name: "RainhaJunker",   role: "tank",     img: "fotos/rainhajunker.jpg" },
  { id: "dva",       name: "D.Va",      role: "tank",     img: "fotos/dva.jpg" },
  { id: "orisa",     name: "Orisa",     role: "tank",     img: "fotos/orisa.jpg" },

  { id: "mei",    name: "Mei",    role: "dano",     img: "fotos/mei.jpg" },
  { id: "anran",     name: "Anran",     role: "dano",     img: "fotos/anran.jpg" },
  { id: "sombra",    name: "Sombra",    role: "dano",     img: "fotos/sombra.jpg" },
  { id: "reaper",    name: "Reaper",    role: "dano",     img: "fotos/reaper.jpg" },
  { id: "widow",     name: "Widowmaker",role: "dano",     img: "fotos/widowmaker.jpg" },

  { id: "mercy",     name: "Mercy",     role: "suporte",  img: "fotos/mercy.jpg" },
  { id: "ana",     name: "Ana",     role: "suporte",  img: "fotos/ana.jpg" },
  { id: "juno",       name: "Juno",       role: "suporte",  img: "fotos/juno.jpg" },
  { id: "kiriko",     name: "Kiriko",     role: "suporte",  img: "fotos/kiriko.jpg" },
];

const ROLE_REQUIREMENTS = { tank: 1, dano: 2, suporte: 2 };

// ---- 2) REFERÊNCIAS DO DOM ------------------------------------------------
const heroesPool     = document.getElementById("heroesPool");
const validateBtn    = document.getElementById("validateBtn");
const resetBtn       = document.getElementById("resetBtn");
const feedbackPanel  = document.getElementById("feedbackPanel");
const feedbackText   = document.getElementById("feedbackText");
const bgInput        = document.getElementById("bgInput");
const toastLayer     = document.getElementById("toastLayer");

// ---- 3) CRIAÇÃO DOS CARDS DE HERÓI ----------------------------------------
function buildHeroCard(hero){
  const card = document.createElement("div");
  card.className = "hero-card";
  card.draggable = true;
  card.id = "hero-" + hero.id;
  card.dataset.heroId = hero.id;
  card.dataset.role = hero.role;

  const dot = document.createElement("span");
  dot.className = "role-dot " + hero.role;
  card.appendChild(dot);

  const img = document.createElement("img");
  img.className = "avatar";
  img.src = hero.img;
  img.alt = hero.name;

  img.addEventListener("error", () => {
    img.classList.add("fallback");
    img.removeAttribute("src");
    img.style.background = roleColor(hero.role);
    const span = document.createElement("span");
    span.textContent = hero.name.charAt(0);
    img.replaceWith(buildFallbackAvatar(hero));
  }, { once: true });
  card.appendChild(img);

  const label = document.createElement("span");
  label.className = "hero-name";
  label.textContent = hero.name;
  card.appendChild(label);

  attachDragEvents(card);
  return card;
}

function buildFallbackAvatar(hero){
  const div = document.createElement("div");
  div.className = "avatar fallback";
  div.style.background = roleColor(hero.role);
  div.textContent = hero.name.charAt(0);
  return div;
}

function roleColor(role){
  return {
    tank: "linear-gradient(160deg,#3a6ea5,#8ad0ff)",
    dano: "linear-gradient(160deg,#7c3aed,#ff5ff0)",
    suporte: "linear-gradient(160deg,#0f9d78,#37f0b0)"
  }[role];
}

HEROES.forEach(hero => heroesPool.appendChild(buildHeroCard(hero)));

let draggedCard = null;

function attachDragEvents(card){
  card.addEventListener("dragstart", (event) => {
    draggedCard = card;
    card.classList.add("dragging");
    event.dataTransfer.setData("text/plain", card.id);
    event.dataTransfer.effectAllowed = "move";
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
    draggedCard = null;
  });
}

document.querySelectorAll(".slot").forEach(slot => {
  slot.addEventListener("dragover", (event) => {
    event.preventDefault(); // obrigatório para permitir o drop
    if (!draggedCard) return;

    const compatible = draggedCard.dataset.role === slot.dataset.role;
    slot.classList.toggle("drag-over-ok", compatible && !slotIsOccupiedByOther(slot));
    slot.classList.toggle("drag-over-bad", !compatible);
    event.dataTransfer.dropEffect = compatible ? "move" : "none";
  });

  slot.addEventListener("dragleave", () => {
    slot.classList.remove("drag-over-ok", "drag-over-bad");
  });

  slot.addEventListener("drop", (event) => {
    event.preventDefault();
    slot.classList.remove("drag-over-ok", "drag-over-bad");

    const heroCardId = event.dataTransfer.getData("text/plain");
    const heroCard = document.getElementById(heroCardId);
    if (!heroCard) return;

    const slotRole = slot.dataset.role;
    const heroRole = heroCard.dataset.role;

    if (heroRole !== slotRole) {
      showToast(`${heroNameOf(heroCard)} não é da função "${roleLabel(slotRole)}"!`, "bad");
      pulseBad(slot);
      return;
    }

    const existing = slot.querySelector(".hero-card");
    if (existing && existing !== heroCard) {
      heroesPool.appendChild(existing);
    }

    slot.innerHTML = "";
    slot.appendChild(heroCard);
    slot.classList.add("filled", "pulse-success");
    setTimeout(() => slot.classList.remove("pulse-success"), 500);

    showToast(`${heroNameOf(heroCard)} posicionado em ${roleLabel(slotRole)}.`, "good");
    updateRoleCounts();
  });
});

heroesPool.addEventListener("dragover", (event) => {
  event.preventDefault();
  heroesPool.classList.add("drop-hover");
});
heroesPool.addEventListener("dragleave", () => {
  heroesPool.classList.remove("drop-hover");
});
heroesPool.addEventListener("drop", (event) => {
  event.preventDefault();
  heroesPool.classList.remove("drop-hover");

  const heroCardId = event.dataTransfer.getData("text/plain");
  const heroCard = document.getElementById(heroCardId);
  if (!heroCard) return;

  const parentSlot = heroCard.closest(".slot");
  heroesPool.appendChild(heroCard);

  if (parentSlot) {
    parentSlot.classList.remove("filled");
    updateRoleCounts();
  }
});

function slotIsOccupiedByOther(slot){
  const occupant = slot.querySelector(".hero-card");
  return !!(occupant && occupant !== draggedCard);
}

function pulseBad(slot){
  slot.classList.add("drag-over-bad");
  setTimeout(() => slot.classList.remove("drag-over-bad"), 350);
}

function heroNameOf(card){
  return card.querySelector(".hero-name").textContent;
}

function roleLabel(role){
  return { tank: "Tanque", dano: "Dano", suporte: "Suporte" }[role] || role;
}

function updateRoleCounts(){
  Object.keys(ROLE_REQUIREMENTS).forEach(role => {
    const filled = document.querySelectorAll(`.slot[data-role="${role}"].filled`).length;
    const required = ROLE_REQUIREMENTS[role];
    const counter = document.querySelector(`[data-role-count="${role}"]`);
    counter.textContent = `${filled}/${required}`;
    counter.classList.toggle("complete", filled === required);
  });
}

function showToast(message, kind){
  const toast = document.createElement("div");
  toast.className = "toast " + (kind === "bad" ? "bad" : "good");
  toast.textContent = message;
  toastLayer.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

validateBtn.addEventListener("click", () => {
  const counts = { tank: 0, dano: 0, suporte: 0 };
  document.querySelectorAll(".slot.filled").forEach(slot => counts[slot.dataset.role]++);

  const missing = Object.keys(ROLE_REQUIREMENTS)
    .filter(role => counts[role] < ROLE_REQUIREMENTS[role])
    .map(role => `${roleLabel(role)} (${counts[role]}/${ROLE_REQUIREMENTS[role]})`);

  feedbackPanel.classList.remove("ok", "warn");

  if (missing.length === 0) {
    feedbackPanel.classList.add("ok");
    feedbackText.textContent = "▲ TIME BALANCEADO — composição 1 Tanque / 2 Dano / 2 Suporte completa. Acesso liberado.";
    showToast("Time balanceado! Pronto para a missão.", "good");
  } else {
    feedbackPanel.classList.add("warn");
    feedbackText.textContent = `▲ TIME INCOMPLETO — faltando: ${missing.join(", ")}.`;
    showToast("O time ainda não está balanceado.", "bad");
  }
});

resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".slot").forEach(slot => {
    const card = slot.querySelector(".hero-card");
    if (card) heroesPool.appendChild(card);
    slot.classList.remove("filled");
  });
  updateRoleCounts();
  feedbackPanel.classList.remove("ok", "warn");
  feedbackText.textContent = "Aguardando montagem do time...";
});