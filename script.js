// ==== CONFIG: hier voeg je eenvoudig nieuwe puzzels toe ====
//
// type: 'text'      -> HTML/tekstpuzzel
// type: 'audio'     -> audiofragment met optioneel extra HTML
// type: 'custom'    -> je eigen HTML (voor totale vrijheid)
// type: 'imageZoom' -> foto die bij fout antwoord verder uitzoomt
//
// status: 'open' of 'done'
// correctAnswers: array met toegestane juiste antwoorden (case-insensitive)

const puzzles = [
  {
    id: "p1",
    title: "Als muziek in Jaspers oren",
    theme: "Muziek",
    status: "open",
    type: "audio",
    shortDescription: "Luister goed naar dit fragment en raad het liedje.",
    introHtml:
      "<p>Luister naar het fragment en vul de titel van het liedje hieronder in.</p>",
    audioSrc: "audio/puzzel1.mp3", // pas dit pad aan naar jouw audio
    correctAnswers: [
      "Voeten",
      "Mr. Deluxe - Voeten",
      "Mr Deluxe - Voeten",
      "Mr. Deluxe Voeten",
      "Mr Deluxe Voeten"
    ]
  },
  {
    id: "p2",
    title: "Jasper's geheugentraining",
    theme: "Herinneringen",
    status: "open",
    type: "memory",
    introHtml: `
      <p>
        Zoek de kaartjes die bij elkaar horen. 
        Elke set heeft met jouw avonturen te maken…
      </p>
    `,
    // Elke entry is één paar; de code maakt er automatisch 2 kaartjes van.
    memoryPairs: [
      {
        id: "mem-1",
        img: "img/Jasper_Mem1.jpeg"
      },
      {
        id: "mem-2",
        img: "img/Jasper_Mem2.jpeg"
      },
      {
        id: "mem-3",
        img: "img/Jasper_Mem3.jpeg"
      },
      {
        id: "mem-4",
        img: "img/Jasper_Mem4.jpeg"
      },
      {
        id: "mem-5",
        img: "img/Jasper_Mem5.jpeg"
      },
      {
        id: "mem-6",
        img: "img/Jasper_Mem6.jpeg"
      },
      {
        id: "mem-7",
        img: "img/Jasper_Mem7.jpeg"
      },
      {
        id: "mem-8",
        img: "img/Jasper_Mem8.jpeg"
      },
      {
        id: "mem-9",
        img: "img/Jasper_Mem9.jpeg"
      },
      {
        id: "mem-10",
        img: "img/Jasper_Mem10.jpeg"
      }
    ],
    correctAnswers: [] // wordt niet gebruikt
  },
  {
    id: "p3",
    title: "Tijdreisje maken?",
    theme: "Chronologie",
    status: "open",
    type: "chrono",
    introHtml: `
      <p>
        Zet deze momenten uit je leven in de juiste volgorde van oud (1) naar nieuw (6).
      </p>
    `,
    chronoItems: [
      {
        id: "c1",
        label: "",
        img: "img/8_feb_2022.jpeg"
      },
      {
        id: "c2",
        label: "",
        img: "img/8_mrt_2023.jpeg"
      },
      {
        id: "c3",
        label: "",
        img: "img/9_aug_2023.jpeg"
      },
      {
        id: "c4",
        label: "",
        img: "img/14_jul_2024.jpeg"
      },
      {
        id: "c5",
        label: "",
        img: "img/19_jan_2025.jpeg"
      },
      {
        id: "c6",
        label: "",
        img: "img/21_jan_2022.jpeg"
      }
    ],
    // juiste volgorde van die momenten (oud → nieuw)
    correctOrder: ["c6", "c1", "c2", "c3", "c4", "c5"],
    correctAnswers: [] // niet gebruikt
  },
  {
    id: "p4",
    title: "Sint ziet alles",
    theme: "Route",
    status: "open",
    type: "custom",
    introHtml: "<p>Ja ook dat weet hij</p>",
    html: `
      <p>Wat voor auto raakte Jasper tijdens het wegrijden bij de Antwerpenstraat op 5 augustus 2025?</p>

      <video 
        width="100%" 
        controls 
        autoplay 
        muted 
        loop
        playsinline
        style="margin-top:1rem; border-radius:12px;">
        <source src="img/Antwerpenstraat.mp4" type="video/mp4">
        Je browser ondersteunt geen video.
      </video>
    `,
    correctAnswers: ["toyota aygo", "aygo", "toyota yaris", "yaris"]
  },
  {
    id: "p5",
    title: "Jasper-dle",
    theme: "Foto",
    status: "open",
    type: "imageZoom",
    shortDescription:
      "Raad wat je ziet; bij elke fout zoomt de foto iets uit.",
    introHtml: `
      <p>
        Waar ó waar is deze foto gemaakt? Wat is de naam van de stad of het dorp?
      </p>
    `,
    images: [
      "img/easystreet_zoom1.jpg",
      "img/easystreet_zoom2.jpg",
      "img/easystreet_zoom3.jpg",
      "img/easystreet_zoom4.jpg",
      "img/easystreet_zoom5.jpg",
      "img/easystreet_zoom6.jpg"
    ],
    correctAnswers: ["Breda", "Easystreet", "Easy Street", "Easystreet Breda"]
    // runtime property: currentStage (wordt automatisch gezet)
  },
  {
    id: "p6",
    title: "Jasperdoku",
    theme: "Logica",
    status: "open",
    type: "sudoku",
    introHtml: `
      <p>
        Vul de sudoku in. De gewone regels gelden:
        elk cijfer 1 t/m 9 komt precies één keer voor
        in iedere rij, kolom en 3×3 blok.
      </p>
    `,
  // 0 = leeg vakje
    sudokuGrid: [
      [0,0,0, 2,6,0, 7,0,1],
      [6,8,0, 0,7,0, 0,9,0],
      [1,9,0, 0,0,4, 5,0,0],

      [8,2,0, 1,0,0, 0,4,0],
      [0,0,4, 6,0,2, 9,0,0],
      [0,5,0, 0,0,3, 0,2,8],

      [0,0,9, 3,0,0, 0,7,4],
      [0,4,0, 0,5,0, 0,3,6],
      [7,0,3, 0,1,8, 0,0,0]
    ],
    // wordt niet gebruikt, maar laat leeg voor duidelijkheid
    correctAnswers: []
  },
  {
    id: "p7",
    title: "Let op!",
    theme: "Geheugen",
    status: "open",
    type: "flashQuiz",
    introHtml: `
      <p>
        Je krijgt steeds 3 seconden een foto te zien.  
        Daarna verdwijnt de foto en krijg je een vraag.  
        Beantwoord je fout, dan komt gewoon een volgende foto om het nogmaals te proberen.
      </p>
    `,
    flashCards: [
      {
        id: "f1",
        img: "img/Flash1.jpeg",
        question: "Welke kleur waren de schoenen van Douwe?",
        correctAnswers: ["rood", "rode"]
      },
      {
        id: "f2",
        img: "img/Flash2.jpeg",
        question: "Welk voorwerp was afgebeeld op Lei zijn shirt?",
        correctAnswers: ["schaar", "een schaar"]
      },
      {
        id: "f3",
        img: "img/Flash3.jpeg",
        question: "Hoe duur was een pizza daar?",
        correctAnswers: ["vijf euro", "5 euro"]
      },
      {
        id: "f4",
        img: "img/Flash4.jpeg",
        question: "Wie had er geen veiligheidshesje aan?",
        correctAnswers: ["Luc", "Lucius", "Lucius Robertus Maria Stienissen"]
      }
    ],
    correctAnswers: [] // gebruiken we hier niet
  }

];

const STORAGE_KEY = "jasper-puzzel-state-v1";

function saveStateToStorage() {
  try {
    const data = puzzles.map((p) => ({
      id: p.id,
      status: p.status
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Kon puzzelstatus niet opslaan:", e);
  }
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!Array.isArray(saved)) return;

    saved.forEach((s) => {
      const puzzle = puzzles.find((p) => p.id === s.id);
      if (!puzzle) return;
      if (s.status === "done" || s.status === "open") {
        puzzle.status = s.status;
      }
    });
  } catch (e) {
    console.error("Kon puzzelstatus niet laden:", e);
  }
}

const SECRET_LOCATION_TEXT = `
Je cadeau ligt buiten onder de afkap in een goudkleurige tas
`;

// ==== DOM referenties ====

const overviewView = document.getElementById("overview-view");
const puzzleView = document.getElementById("puzzle-view");
const puzzleListEl = document.getElementById("puzzle-list");

const backButton = document.getElementById("back-button");

const puzzleTitleEl = document.getElementById("puzzle-title");
const puzzleStatusEl = document.getElementById("puzzle-status");
const puzzleIntroEl = document.getElementById("puzzle-intro");
const puzzleContentEl = document.getElementById("puzzle-content");

const answerInput = document.getElementById("answer-input");
const checkAnswerButton = document.getElementById("check-answer-button");
const answerFeedbackEl = document.getElementById("answer-feedback");

const secretButton = document.getElementById("secret-button");
const secretModal = document.getElementById("secret-modal");
const secretModalBackdrop = document.getElementById("secret-modal-backdrop");
const secretModalClose = document.getElementById("secret-modal-close");
const secretLockedMessage = document.getElementById("secret-locked-message");
const secretLocationEl = document.getElementById("secret-location");
const itPietTrigger = document.getElementById("it-piet-trigger");
const answerSection = document.getElementById("answer-section");

// Huidig geselecteerde puzzel
let currentPuzzleId = null;
let memoryTimerId = null;
let flashTimerId = null;

// ==== Helpers ====

function normalizeAnswer(str) {
  if (!str) return "";
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " "); // dubbele spaties weg
}

function isAnswerCorrect(puzzle, rawAnswer) {
  if (!rawAnswer) return false;

  // optioneel customCheck (voor echt gekke puzzels)
  if (typeof puzzle.customCheck === "function") {
    return puzzle.customCheck(rawAnswer);
  }

  if (!Array.isArray(puzzle.correctAnswers) || puzzle.correctAnswers.length === 0) {
    return false;
  }

  const userNorm = normalizeAnswer(rawAnswer);

  return puzzle.correctAnswers.some(
    (ans) => normalizeAnswer(ans) === userNorm
  );
}

function setFeedback(message, type) {
  answerFeedbackEl.textContent = message || "";
  answerFeedbackEl.classList.remove(
    "answer-feedback--correct",
    "answer-feedback--wrong"
  );
  if (type === "correct") {
    answerFeedbackEl.classList.add("answer-feedback--correct");
  } else if (type === "wrong") {
    answerFeedbackEl.classList.add("answer-feedback--wrong");
  }
}

function areAllPuzzlesSolved() {
  return puzzles.every((p) => p.status === "done");
}

function updateSecretUI() {
  if (!secretButton) return;
  const allSolved = areAllPuzzlesSolved();
  // Alleen een extra visueel effect als alles klaar is
  if (allSolved) {
    secretButton.classList.add("btn--secret-unlocked");
  } else {
    secretButton.classList.remove("btn--secret-unlocked");
  }
}

function clearMemoryTimer() {
  if (memoryTimerId !== null) {
    clearInterval(memoryTimerId);
    memoryTimerId = null;
  }
  const el = document.getElementById("memory-timer");
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

function startMemoryTimer(puzzle) {
  // eerst eventuele oude timer opruimen
  clearMemoryTimer();

  // geen timer starten als puzzel al klaar is
  if (puzzle.status === "done") return;

  const timerEl = document.createElement("div");
  timerEl.id = "memory-timer";
  timerEl.className = "memory-timer";

  let remaining = 60; // 60 seconden
  timerEl.textContent = `Tijd over: ${remaining}s`;

  // bovenaan in de puzzel-content
  puzzleContentEl.prepend(timerEl);

  memoryTimerId = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearMemoryTimer();
      setFeedback(
        "De tijd is om! De kaartjes worden opnieuw geschud… ⏱️",
        "wrong"
      );
      // opnieuw tekenen (met nieuwe shuffle)
      puzzleContentEl.innerHTML = "";
      renderMemoryPuzzle(puzzle);
      return;
    }
    timerEl.textContent = `Tijd over: ${remaining}s`;
  }, 1000);
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  container.appendChild(toast);

  // Trigger animatie
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Automatisch verwijderen
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2000);
}

function resetAllPuzzles() {
  // alle statussen terug naar 'open'
  puzzles.forEach((p) => {
    p.status = "open";
    // eventuele runtime dingen resetten
    if (p.type === "imageZoom") {
      p.currentStage = 0;
    }
  });

  // localStorage leegmaken als je die gebruikt
  try {
    if (typeof STORAGE_KEY !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {
    console.error("Kon puzzelstatus niet verwijderen:", e);
  }

  // UI terug naar start
  answerInput.disabled = false;
  checkAnswerButton.disabled = false;
  setFeedback("", null);

  puzzleView.classList.remove("view--active");
  overviewView.classList.add("view--active");

  renderOverview();
  if (typeof updateSecretUI === "function") {
    updateSecretUI();
  }

  showToast("Alle puzzels zijn gereset door de IT-piet");
}

// ==== Rendering van het overzicht ====

// ==== Rendering van het overzicht ====

function renderOverview() {
  puzzleListEl.innerHTML = "";

  puzzles.forEach((puzzle) => {
    const card = document.createElement("div");
    card.className = "puzzle-card";
    card.dataset.puzzleId = puzzle.id;

    // Alleen header met titel + status
    const header = document.createElement("div");
    header.className = "puzzle-card-header";

    const title = document.createElement("h3");
    title.className = "puzzle-card-title";
    title.textContent = puzzle.title;

    const status = document.createElement("span");
    status.className =
      "status-pill " +
      (puzzle.status === "done" ? "status-done" : "status-open");
    status.textContent = puzzle.status === "done" ? "Klaar" : "Open";

    header.appendChild(title);
    header.appendChild(status);

    // Alleen de header in de kaart stoppen
    card.appendChild(header);

    // Klik op kaart om puzzel te openen
    card.addEventListener("click", () => {
      showPuzzle(puzzle.id);
    });

    puzzleListEl.appendChild(card);
  });
    updateSecretUI();
}

// ==== Detailweergave puzzel ====

function showPuzzle(puzzleId) {
  clearMemoryTimer();
  clearFlashTimer();
  const puzzle = puzzles.find((p) => p.id === puzzleId);
  if (!puzzle) return;

  currentPuzzleId = puzzleId;

  puzzleTitleEl.textContent = puzzle.title;
  updateStatusPill(puzzleStatusEl, puzzle.status);

  puzzleIntroEl.innerHTML = puzzle.introHtml || "";

  puzzleContentEl.innerHTML = "";
  renderPuzzleContent(puzzle);
  
    // Antwoord UI aanpassen per type
  if (puzzle.type === "sudoku") {
    answerSection.style.display = "block";
    answerInput.style.display = "none";
    checkAnswerButton.style.display = "";
    checkAnswerButton.textContent = "Controleer sudoku";
  } else if (puzzle.type === "chrono") {
    answerSection.style.display = "block";
    answerInput.style.display = "none";
    checkAnswerButton.style.display = "";
    checkAnswerButton.textContent = "Controleer volgorde";
  } else if (puzzle.type === "memory") {
    answerSection.style.display = "none";
  } else {
    answerSection.style.display = "block";
    answerInput.style.display = "";
    checkAnswerButton.style.display = "";
    checkAnswerButton.textContent = "Controleer antwoord";
  }

  answerInput.value = "";
  answerInput.disabled = puzzle.status === "done";
  checkAnswerButton.disabled = puzzle.status === "done";
  
  if (puzzle.type === "flashQuiz" && puzzle.status !== "done") {
    answerInput.disabled = true;
    checkAnswerButton.disabled = true;
  }

  setFeedback(
    puzzle.status === "done"
      ? "Je hebt deze puzzel al goed beantwoord. Goed gedaan!"
      : "",
    puzzle.status === "done" ? "correct" : null
  );

  overviewView.classList.remove("view--active");
  puzzleView.classList.add("view--active");

  if (!answerInput.disabled) {
    answerInput.focus();
  }
}

function renderPuzzleContent(puzzle) {
  if (puzzle.type === "audio") {
    if (puzzle.html) {
      const htmlBlock = document.createElement("div");
      htmlBlock.innerHTML = puzzle.html;
      puzzleContentEl.appendChild(htmlBlock);
    }

    const audio = document.createElement("audio");
    audio.controls = true;
    if (puzzle.audioSrc) {
      audio.src = puzzle.audioSrc;
    } else {
      const info = document.createElement("p");
      info.textContent =
        "Audio-bestand nog niet ingesteld. Vul 'audioSrc' in script.js in.";
      puzzleContentEl.appendChild(info);
    }
    puzzleContentEl.appendChild(audio);
  } else if (puzzle.type === "imageZoom") {
    renderImageZoomPuzzle(puzzle);
  } else if (puzzle.type === "sudoku") {
    renderSudokuPuzzle(puzzle);
  } else if (puzzle.type === "memory") {
    renderMemoryPuzzle(puzzle);
  } else if (puzzle.type === "chrono") {
    renderChronoPuzzle(puzzle);
  } else if (puzzle.type === "text" || puzzle.type === "custom") {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = puzzle.html || "<p>Geen content ingesteld.</p>";
    puzzleContentEl.appendChild(wrapper);
  } else if (puzzle.type === "flashQuiz") {
    renderFlashQuizPuzzle(puzzle);
  } else {
    const fallback = document.createElement("p");
    fallback.textContent = "Dit puzzeltype wordt nog niet ondersteund.";
    puzzleContentEl.appendChild(fallback);
  }
}

function renderImageZoomPuzzle(puzzle) {
  if (!Array.isArray(puzzle.images) || puzzle.images.length === 0) {
    const msg = document.createElement("p");
    msg.textContent =
      "Er zijn nog geen afbeeldingen ingesteld voor deze foto-puzzel.";
    puzzleContentEl.appendChild(msg);
    return;
  }

  if (typeof puzzle.currentStage !== "number") {
    puzzle.currentStage = 0;
  }

  const stage = Math.min(
    Math.max(puzzle.currentStage, 0),
    puzzle.images.length - 1
  );

  const container = document.createElement("div");
  container.className = "puzzle-image-zoom";

  const img = document.createElement("img");
  img.src = puzzle.images[stage];
  img.alt = "Raad de foto";
  container.appendChild(img);

  const hint = document.createElement("div");
  hint.className = "puzzle-image-zoom-hint";
  hint.textContent = `${stage + 1} van ${puzzle.images.length}`;
  container.appendChild(hint);

  puzzleContentEl.appendChild(container);
}

function renderFlashQuizPuzzle(puzzle) {
  const cards = puzzle.flashCards;
  if (!Array.isArray(cards) || cards.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "Er zijn nog geen flash-foto's ingesteld voor deze puzzel.";
    puzzleContentEl.appendChild(msg);
    return;
  }

  clearFlashTimer();

  // huidige index in de cyclus
  if (typeof puzzle._flashIndex !== "number") {
    puzzle._flashIndex = 0;
  }
  const idx = ((puzzle._flashIndex % cards.length) + cards.length) % cards.length;
  const current = cards[idx];

  // per kaart bijhouden of de vraag al eens is getoond
  if (!puzzle._flashState) {
    puzzle._flashState = {};
  }
  const stateForCard = puzzle._flashState[current.id] || { hasSeenQuestion: false };
  const hasSeenQuestion = !!stateForCard.hasSeenQuestion;

  // huidige kaart onthouden (voor handleCheckAnswer heb je evt. deze info)
  puzzle._currentFlashId = current.id;

  const wrapper = document.createElement("div");
  wrapper.className = "flashquiz-wrapper";

  const imgStep = document.createElement("div");
  imgStep.className = "flashquiz-step flashquiz-step-image";

  const imgInfo = document.createElement("p");
  imgInfo.textContent = `Kijk goed naar de foto... (${idx + 1} van ${cards.length})`;
  imgInfo.className = "flashquiz-info";
  imgStep.appendChild(imgInfo);

  const img = document.createElement("img");
  img.src = current.img;
  img.alt = "Onthoud deze foto";
  img.className = "flashquiz-image";
  imgStep.appendChild(img);

  const questionStep = document.createElement("div");
  questionStep.className = "flashquiz-step flashquiz-step-question";

  const qText = document.createElement("p");
  qText.textContent = current.question || "Wat heb je gezien?";
  questionStep.appendChild(qText);

  const hint = document.createElement("p");
  hint.className = "flashquiz-hint";
  hint.textContent = "Typ je antwoord hieronder in en klik op 'Controleer antwoord'.";
  questionStep.appendChild(hint);

  wrapper.appendChild(imgStep);
  wrapper.appendChild(questionStep);
  puzzleContentEl.appendChild(wrapper);

  // standaard: input leegmaken
  answerInput.value = "";

  if (puzzle.status === "done") {
    // al opgelost → alleen vraag tonen, maar input dicht
    imgStep.style.display = "none";
    questionStep.style.display = "block";
    answerInput.disabled = true;
    checkAnswerButton.disabled = true;
    return;
  }

  if (hasSeenQuestion) {
    // hij is al eens bij de vraag geweest → geen nieuwe 3-seconden preview
    imgStep.style.display = "none";
    questionStep.style.display = "block";

    answerInput.disabled = false;
    checkAnswerButton.disabled = false;
    answerInput.focus();
  } else {
    // eerste keer: 3 seconden foto, dan pas de vraag
    imgStep.style.display = "block";
    questionStep.style.display = "none";

    answerInput.disabled = true;
    checkAnswerButton.disabled = true;

    flashTimerId = setTimeout(() => {
      imgStep.style.display = "none";
      questionStep.style.display = "block";

      // markeer dat hij deze vraag nu 'gezien' heeft
      stateForCard.hasSeenQuestion = true;
      puzzle._flashState[current.id] = stateForCard;

      answerInput.disabled = false;
      checkAnswerButton.disabled = false;
      answerInput.focus();
    }, 3000);
  }
}

function renderSudokuPuzzle(puzzle) {
  const grid = puzzle.sudokuGrid;
  if (!Array.isArray(grid) || grid.length !== 9) {
    const msg = document.createElement("p");
    msg.textContent = "Sudoku niet goed geconfigureerd.";
    puzzleContentEl.appendChild(msg);
    return;
  }

  const container = document.createElement("div");
  container.className = "puzzle-sudoku";

  const table = document.createElement("table");
  table.className = "sudoku-grid";

  for (let r = 0; r < 9; r++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < 9; c++) {
      const td = document.createElement("td");
      td.className = "sudoku-cell sudoku-cell-r" + r + "c" + c;

      const value = grid[r][c];
      if (value) {
        const span = document.createElement("span");
        span.textContent = value;
        span.className = "sudoku-cell-fixed";
        td.appendChild(span);
      } else {
        const input = document.createElement("input");
        input.type = "text";
        input.inputMode = "numeric";
        input.maxLength = 1;
        input.className = "sudoku-cell-input";
        input.id = `sudoku-${puzzle.id}-r${r}-c${c}`;

        input.addEventListener("input", (e) => {
          // Alleen 1-9 toestaan
          const v = e.target.value.replace(/[^1-9]/g, "");
          e.target.value = v;
        });

        td.appendChild(input);
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  container.appendChild(table);
  puzzleContentEl.appendChild(container);

  // Als puzzel al klaar is, inputs blokkeren
  if (puzzle.status === "done") {
    disableSudokuInputs();
  }
}

function renderMemoryPuzzle(puzzle) {
  const pairs = puzzle.memoryPairs;
  if (!Array.isArray(pairs) || pairs.length === 0) {
    const msg = document.createElement("p");
    msg.textContent =
      "Er zijn nog geen kaartjes ingesteld voor deze memory-puzzel.";
    puzzleContentEl.appendChild(msg);
    return;
  }

  // Maak van elk paar twee kaartjes
  const cardsData = [];
  pairs.forEach((pair) => {
    cardsData.push({
      pairId: pair.id,
      label: pair.label,
      img: pair.img
    });
    cardsData.push({
      pairId: pair.id,
      label: pair.label,
      img: pair.img
    });
  });

  // Simpel shuffle
  for (let i = cardsData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsData[i], cardsData[j]] = [cardsData[j], cardsData[i]];
  }

  const container = document.createElement("div");
  container.className = "puzzle-memory";

  const grid = document.createElement("div");
  grid.className = "memory-grid";

  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let matchedCount = 0;

  function resetSelection() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
  }

  function onCardClick(e) {
    const card = e.currentTarget;
    if (lockBoard) return;
    if (card.classList.contains("is-matched")) return;
    if (card === firstCard) return;

    card.classList.add("is-flipped");

    if (!firstCard) {
      firstCard = card;
      return;
    }

    secondCard = card;
    lockBoard = true;

    const pair1 = firstCard.dataset.pairId;
    const pair2 = secondCard.dataset.pairId;

    if (pair1 === pair2) {
      // Match!
      firstCard.classList.add("is-matched");
      secondCard.classList.add("is-matched");
      matchedCount += 2;
      resetSelection();

      if (matchedCount === cardsData.length) {
        // Alles gevonden → puzzel klaar
        puzzle.status = "done";
        saveStateToStorage();
        clearMemoryTimer();
        updateStatusPill(puzzleStatusEl, puzzle.status);
        renderOverview();
        if (typeof updateSecretUI === "function") {
          updateSecretUI();
        }
        setFeedback("Alle paren gevonden, goed gedaan! 🎉", "correct");
      }
    } else {
      // Geen match → kort laten zien, dan weer dicht
      setTimeout(() => {
        firstCard.classList.remove("is-flipped");
        secondCard.classList.remove("is-flipped");
        resetSelection();
      }, 800);
    }
  }

  cardsData.forEach((cardData, index) => {
    const card = document.createElement("div");
    card.className = "memory-card";
    card.dataset.pairId = cardData.pairId;

    const inner = document.createElement("div");
    inner.className = "memory-card-inner";

    const front = document.createElement("div");
    front.className = "memory-card-front";
    front.textContent = "?";

    const back = document.createElement("div");
    back.className = "memory-card-back";

    if (cardData.img) {
      const img = document.createElement("img");
      img.src = cardData.img;
      img.alt = cardData.label || "Memory kaartje";
      back.appendChild(img);
    } else {
      back.textContent = cardData.label || "Kaartje";
    }

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener("click", onCardClick);

    grid.appendChild(card);
  });

  container.appendChild(grid);
  puzzleContentEl.appendChild(container);
  startMemoryTimer(puzzle);
}

function renderChronoPuzzle(puzzle) {
  const items = puzzle.chronoItems;
  if (!Array.isArray(items) || items.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "Er zijn geen foto's ingesteld voor deze puzzel.";
    puzzleContentEl.appendChild(msg);
    return;
  }

  // Kopie + shuffle
  const shuffled = items.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const container = document.createElement("div");
  container.className = "puzzle-chrono";

  const pool = document.createElement("div");
  pool.className = "chrono-pool";
  pool.id = `chrono-${puzzle.id}-pool`;

  let selectedCard = null;

  function selectCard(card) {
    if (selectedCard === card) {
      // zelfde kaart nog eens -> deselect
      card.classList.remove("chrono-item-selected");
      selectedCard = null;
      return;
    }
    if (selectedCard) {
      selectedCard.classList.remove("chrono-item-selected");
    }
    selectedCard = card;
    card.classList.add("chrono-item-selected");
  }

  // alle kaartjes in de pool
  shuffled.forEach((item) => {
    const card = document.createElement("div");
    card.className = "chrono-item";
    card.dataset.photoId = item.id;

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.label || "Moment";

    card.appendChild(img);

    card.addEventListener("click", () => {
      selectCard(card);
    });

    pool.appendChild(card);
  });

  // klik op de pool zelf -> geselecteerde kaart terugleggen
  pool.addEventListener("click", (e) => {
    // voorkomen dat klik op kaart zelf hier ook triggert
    if (e.target.closest(".chrono-item")) return;
    if (!selectedCard) return;

    const poolEl = document.getElementById(`chrono-${puzzle.id}-pool`);
    if (poolEl && selectedCard) {
      poolEl.appendChild(selectedCard);
      selectedCard.classList.remove("chrono-item-selected");
      selectedCard = null;
    }
  });

  const slotsWrapper = document.createElement("div");
  slotsWrapper.className = "chrono-slots";

  puzzle.correctOrder.forEach((_, index) => {
    const slot = document.createElement("div");
    slot.className = "chrono-slot";
    slot.id = `chrono-${puzzle.id}-slot-${index}`;

    const label = document.createElement("div");
    label.className = "chrono-slot-label";
    label.textContent = `${index + 1}`;

    slot.appendChild(label);

    // tik op slot -> geselecteerde kaart in dit slot zetten
    slot.addEventListener("click", () => {
      if (!selectedCard) return;

      // als er al een kaart in zit -> terug naar pool
      const existing = slot.querySelector(".chrono-item");
      if (existing) {
        const poolEl = document.getElementById(`chrono-${puzzle.id}-pool`);
        if (poolEl) {
          poolEl.appendChild(existing);
        }
      }

      slot.appendChild(selectedCard);
      selectedCard.classList.remove("chrono-item-selected");
      selectedCard = null;
    });

    slotsWrapper.appendChild(slot);
  });

  // SIDE-BY-SIDE LAYOUT: links slots, rechts pool
  const layout = document.createElement("div");
  layout.className = "chrono-layout";

  const left = document.createElement("div");
  left.className = "chrono-left";
  left.appendChild(slotsWrapper);

  const right = document.createElement("div");
  right.className = "chrono-right";
  right.appendChild(pool);

  layout.appendChild(left);
  layout.appendChild(right);

  container.appendChild(layout);
  puzzleContentEl.appendChild(container);
}

function readChronoOrder(puzzle) {
  const order = [];
  puzzle.correctOrder.forEach((_, index) => {
    const slot = document.getElementById(`chrono-${puzzle.id}-slot-${index}`);
    if (!slot) {
      order.push(null);
      return;
    }
    const item = slot.querySelector(".chrono-item");
    order.push(item ? item.dataset.photoId : null);
  });
  return order;
}

function isChronoCorrect(puzzle, currentOrder) {
  if (!Array.isArray(currentOrder)) return false;
  if (currentOrder.length !== puzzle.correctOrder.length) return false;
  for (let i = 0; i < currentOrder.length; i++) {
    if (currentOrder[i] !== puzzle.correctOrder[i]) {
      return false;
    }
  }
  return true;
}

function readSudokuGrid(puzzle) {
  const result = [];
  for (let r = 0; r < 9; r++) {
    result[r] = [];
    for (let c = 0; c < 9; c++) {
      const fixed = puzzle.sudokuGrid[r][c];
      if (fixed) {
        result[r][c] = fixed;
      } else {
        const id = `sudoku-${puzzle.id}-r${r}-c${c}`;
        const input = document.getElementById(id);
        const n = input ? parseInt(input.value, 10) : NaN;
        result[r][c] = isNaN(n) ? 0 : n;
      }
    }
  }
  return result;
}

function isValidSudokuGrid(grid) {
  const n = 9;

  const is1to9 = (arr) => {
    if (arr.some((v) => v < 1 || v > 9)) return false;
    const set = new Set(arr);
    return set.size === 9;
  };

  // Rijen
  for (let r = 0; r < n; r++) {
    if (!is1to9(grid[r])) return false;
  }

  // Kolommen
  for (let c = 0; c < n; c++) {
    const col = [];
    for (let r = 0; r < n; r++) {
      col.push(grid[r][c]);
    }
    if (!is1to9(col)) return false;
  }

  // 3x3 blokken
  for (let br = 0; br < 3; br++) {
    for (let bc = 0; bc < 3; bc++) {
      const block = [];
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          block.push(grid[br * 3 + r][bc * 3 + c]);
        }
      }
      if (!is1to9(block)) return false;
    }
  }

  return true;
}

function disableSudokuInputs() {
  const inputs = document.querySelectorAll(".sudoku-cell-input");
  inputs.forEach((input) => {
    input.disabled = true;
  });
}

function updateStatusPill(el, status) {
  el.classList.remove("status-open", "status-done");
  const isDone = status === "done";
  el.classList.add(isDone ? "status-done" : "status-open");
  el.textContent = isDone ? "Klaar" : "Open";
}

// ==== Event handlers ====

backButton.addEventListener("click", () => {
  clearMemoryTimer();
  clearFlashTimer();
  puzzleView.classList.remove("view--active");
  overviewView.classList.add("view--active");
  currentPuzzleId = null;
  setFeedback("", null);
});

function clearFlashTimer() {
  if (flashTimerId !== null) {
    clearTimeout(flashTimerId);
    flashTimerId = null;
  }
}

function handleCheckAnswer() {
  if (!currentPuzzleId) return;

  const puzzle = puzzles.find((p) => p.id === currentPuzzleId);
  if (!puzzle) return;

  // --- SUDOKU ---
  if (puzzle.type === "sudoku") {
    const grid = readSudokuGrid(puzzle);

    if (isValidSudokuGrid(grid)) {
      puzzle.status = "done";
      saveStateToStorage();
      updateStatusPill(puzzleStatusEl, puzzle.status);
      renderOverview();
      if (typeof updateSecretUI === "function") {
        updateSecretUI();
      }

      setFeedback("Perfect! De sudoku is helemaal goed. 🎉", "correct");
      disableSudokuInputs();
      checkAnswerButton.disabled = true;
      return;
    } else {
      setFeedback(
        "De sudoku klopt nog niet helemaal. Controleer rijen, kolommen en blokken.",
        "wrong"
      );
      return;
    }
  }

  // --- CHRONOLOGISCHE FOTO-PUZZEL ---
  if (puzzle.type === "chrono") {
    const currentOrder = readChronoOrder(puzzle);
    if (currentOrder.some((id) => id === null)) {
      setFeedback(
        "Niet alle vakjes zijn gevuld. Sleep alle foto's naar een plek.",
        "wrong"
      );
      return;
    }

    if (isChronoCorrect(puzzle, currentOrder)) {
      puzzle.status = "done";
      saveStateToStorage();
      updateStatusPill(puzzleStatusEl, puzzle.status);
      renderOverview();
      if (typeof updateSecretUI === "function") {
        updateSecretUI();
      }

      setFeedback("De volgorde klopt helemaal, mooi gedaan! 🎉", "correct");
      checkAnswerButton.disabled = true;
      return;
    } else {
      setFeedback(
      "Deze volgorde klopt nog niet helemaal. De foto's worden opnieuw geschud… 🔁",
      "wrong"
      );

    // puzzel resetten: content leegmaken en opnieuw opbouwen (met nieuwe shuffle)
    puzzleContentEl.innerHTML = "";
    renderChronoPuzzle(puzzle);
    return;
  }
}
    // --- FLASH QUIZ (3 seconden foto, dan vraag) ---
    if (puzzle.type === "flashQuiz") {
      const cards = puzzle.flashCards || [];
      if (!Array.isArray(cards) || cards.length === 0) return;

      const userAnswer = answerInput.value;
      if (!userAnswer.trim()) {
        setFeedback("Vul eerst een antwoord in.", "wrong");
        return;
      }

      // bepaal huidige kaart
      if (typeof puzzle._flashIndex !== "number") {
        puzzle._flashIndex = 0;
      }
      const idx = ((puzzle._flashIndex % cards.length) + cards.length) % cards.length;
      const current = cards[idx];

      const userNorm = normalizeAnswer(userAnswer);
      const isCorrect =
        Array.isArray(current.correctAnswers) &&
        current.correctAnswers.some((ans) => normalizeAnswer(ans) === userNorm);

      if (isCorrect) {
        puzzle.status = "done";
        saveStateToStorage();
        updateStatusPill(puzzleStatusEl, puzzle.status);
        renderOverview();
        if (typeof updateSecretUI === "function") {
          updateSecretUI();
        }

        clearFlashTimer();
        setFeedback("Goed opgelet! Deze puzzel is opgelost.", "correct");
        answerInput.disabled = true;
        checkAnswerButton.disabled = true;
        return;
      } else {
        // fout → volgende kaart in de cyclus
        puzzle._flashIndex = (idx + 1) % cards.length;
        setFeedback(
          "Helaas… De volgende foto komt eraan!",
          "wrong"
        );
        // opnieuw opbouwen (nieuwe foto, nieuwe timer)
        puzzleContentEl.innerHTML = "";
        renderFlashQuizPuzzle(puzzle);
        return;
      }
    }

  // --- NORMALE PUZZELS (text/audio/custom/imageZoom) ---
  const userAnswer = answerInput.value;

  if (!userAnswer.trim()) {
    setFeedback("Vul eerst een antwoord in.", "wrong");
    return;
  }

  if (isAnswerCorrect(puzzle, userAnswer)) {
    puzzle.status = "done";
    saveStateToStorage();
    updateStatusPill(puzzleStatusEl, puzzle.status);
    renderOverview();
    if (typeof updateSecretUI === "function") {
      updateSecretUI();
    }

    setFeedback("Helemaal goed! Deze puzzel is afgerond. 🎉", "correct");
    answerInput.disabled = true;
    checkAnswerButton.disabled = true;
  } else {
    setFeedback(
      puzzle.type === "imageZoom"
        ? "Dat is niet helemaal goed. De foto wordt iets duidelijker…"
        : "Dat is niet helemaal goed. Probeer het nog eens!",
      "wrong"
    );

    if (puzzle.type === "imageZoom") {
      if (typeof puzzle.currentStage !== "number") {
        puzzle.currentStage = 0;
      }
      if (
        Array.isArray(puzzle.images) &&
        puzzle.images.length > 0 &&
        puzzle.currentStage < puzzle.images.length - 1
      ) {
        puzzle.currentStage++;
        puzzleContentEl.innerHTML = "";
        renderPuzzleContent(puzzle);
      }
    }
  }
}

checkAnswerButton.addEventListener("click", handleCheckAnswer);

answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleCheckAnswer();
  }
});

// Geheime eindhint: pop-up openen
secretButton.addEventListener("click", () => {
  const allSolved = areAllPuzzlesSolved();

  if (allSolved) {
    // Laat alleen dan de echte tekst zien
    secretLockedMessage.style.display = "none";
    secretLocationEl.textContent = SECRET_LOCATION_TEXT.trim();
  } else {
    // Nog niet alles klaar → geen spoiler
    secretLockedMessage.style.display = "block";
    secretLocationEl.textContent = "";
  }

  secretModal.classList.add("modal--visible");
});

// Pop-up sluiten (kruisje en achtergrond)
secretModalClose.addEventListener("click", () => {
  secretModal.classList.remove("modal--visible");
});

secretModalBackdrop.addEventListener("click", () => {
  secretModal.classList.remove("modal--visible");
});

let itPietClickCount = 0;
let itPietClickTimer = null;

if (itPietTrigger) {
  itPietTrigger.addEventListener("click", () => {
    itPietClickCount++;

    if (itPietClickTimer) clearTimeout(itPietClickTimer);

    itPietClickTimer = setTimeout(() => {
      itPietClickCount = 0;
    }, 2000);

    if (itPietClickCount >= 5) {
      itPietClickCount = 0;
      clearTimeout(itPietClickTimer);
      resetAllPuzzles();
    }
  });
}

/*
window.addEventListener("beforeunload", (event) => {
  // Als nog niet alles is opgelost, warnen bij verlaten/herladen
  if (!areAllPuzzlesSolved()) {
    event.preventDefault();
    event.returnValue = ""; // verplicht voor sommige browsers
  }
});
*/

// ==== Init ====
loadStateFromStorage();
renderOverview();
updateSecretUI();