// ==========================================================
// 🌻 FLORES AMARILLAS - Personalización
// Cambia estos valores para hacer tu propia versión.
// ==========================================================

const CONFIG = {
  title: "Mi lugar favorito",
  message: `De todas las estrellas que hay allá arriba,
ninguna brilla como tú cuando me miras.
Mi lugar favorito del mundo siempre será
donde pueda compartir un momento contigo.`,
  signature: "Con cariño ❤️"
};

const home = document.getElementById("home");
const letter = document.getElementById("letter");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const againBtn = document.getElementById("againBtn");
const petals = document.getElementById("petals");
const stars = document.getElementById("stars");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const musicHint = document.getElementById("musicHint");

// Aplicar texto personalizable.
document.getElementById("letterTitle").textContent = CONFIG.title;
document.getElementById("message").textContent = CONFIG.message;
document.getElementById("signature").textContent = CONFIG.signature;

// Estrellas.
function createStars(amount = 100) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--duration", `${2 + Math.random() * 4}s`);
    star.style.animationDelay = `${Math.random() * 4}s`;

    const size = Math.random() < .15 ? 3 : 1 + Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    fragment.appendChild(star);
  }

  stars.appendChild(fragment);
}

// Lluvia de pétalos.
function flowerRain(amount = 35) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.setProperty("--duration", `${3 + Math.random() * 4}s`);
      petal.style.setProperty("--drift", `${-100 + Math.random() * 200}px`);
      petal.style.animationDelay = `${Math.random() * .8}s`;
      petal.style.transform = `rotate(${Math.random() * 360}deg)`;

      petals.appendChild(petal);

      setTimeout(() => petal.remove(), 8500);
    }, i * 70);
  }
}

function showLetter() {
  home.classList.remove("active");
  letter.classList.add("active");
  letter.setAttribute("aria-hidden", "false");
  flowerRain(50);
}

function showHome() {
  letter.classList.remove("active");
  home.classList.add("active");
  letter.setAttribute("aria-hidden", "true");
}

// Botones.
openBtn.addEventListener("click", showLetter);
closeBtn.addEventListener("click", showHome);
againBtn.addEventListener("click", showHome);

// Música.
// Los navegadores normalmente requieren que el usuario interactúe
// antes de permitir la reproducción, por eso se controla con un botón.
let musicPlaying = false;

musicBtn.addEventListener("click", async () => {
  try {
    if (musicPlaying) {
      music.pause();
      musicPlaying = false;
      musicBtn.textContent = "🎵";
    } else {
      await music.play();
      musicPlaying = true;
      musicBtn.textContent = "🔊";
      musicHint.classList.add("hidden");
    }
  } catch (error) {
    musicHint.innerHTML = "🎵 Coloca tu archivo en <b>assets/musica.mp3</b>";
  }
});

// Si no existe música, ocultamos el aviso después de unos segundos.
// El botón seguirá funcionando si luego agregas el archivo.
setTimeout(() => {
  musicHint.classList.add("hidden");
}, 8000);

createStars();

// Una pequeña lluvia al abrir la página.
setTimeout(() => flowerRain(12), 900);
