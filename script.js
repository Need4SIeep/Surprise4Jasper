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
    title: "Muzikale Memory",
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
    title: "Snoepgoed Rebus",
    theme: "Snoepgoed",
    status: "open",
    type: "text",
    shortDescription: "Los de rebus op en ontdek het favoriete snoepje.",
    introHtml:
      "<p>Onderstaande rebus leidt naar een typisch Sinterklaas-lekkernij. Vul het eindwoord hieronder in.</p>",
    html: `
      <p><strong>Rebus:</strong></p>
      <ul>
        <li>📦 minus 'x'</li>
        <li>🐟 minus 's'</li>
        <li>🍫</li>
      </ul>
      <p>Welk snoepgoed komt eruit?</p>
    `,
    correctAnswers: ["pepernoot", "pepernoten"]
  },
  {
    id: "p3",
    title: "Rijmraadsel",
    theme: "Rijmen",
    status: "open",
    type: "text",
    shortDescription: "Vul het ontbrekende rijmwoord in.",
    introHtml:
      "<p>Lees het versje en vul het ontbrekende rijmwoord hieronder in.</p>",
    html: `
      <p>
        Sinterklaas zat te denken<br/>
        wat hij Martijn dit jaar zou <span style="border-bottom:1px dashed #f2c14f;">________</span>.<br/>
        Iets met puzzels, slim en fijn,<br/>
        dat moet vast voor <em>...?</em>
      </p>
      <p>Vul één rijmwoord in dat mooi past.</p>
    `,
    correctAnswers: ["schenken", "bedenken"]
  },
  {
    id: "p4",
    title: "De Sint ziet alles",
    theme: "Route",
    status: "open",
    type: "custom",
    introHtml: "<p>Ja ook dat weet hij</p>",
    html: `
      <p>Wat voor auto raakte Jasper tijdens het wedrijden bij de Antwerpenstraat op 5 augustus 2025?</p>

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
    correctAnswers: ["toyota aygo", "aygo"]
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
  }
];

const SECRET_LOCATION_TEXT = `
Je cadeau ligt in de kast in de woonkamer,
achter de stapel spelletjes, in de rode doos met gouden strik.
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

// Huidig geselecteerde puzzel
let currentPuzzleId = null;

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
  const puzzle = puzzles.find((p) => p.id === puzzleId);
  if (!puzzle) return;

  currentPuzzleId = puzzleId;

  puzzleTitleEl.textContent = puzzle.title;
  updateStatusPill(puzzleStatusEl, puzzle.status);

  puzzleIntroEl.innerHTML = puzzle.introHtml || "";

  puzzleContentEl.innerHTML = "";
  renderPuzzleContent(puzzle);

  answerInput.value = "";
  answerInput.disabled = puzzle.status === "done";
  checkAnswerButton.disabled = puzzle.status === "done";
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
  } else if (puzzle.type === "text" || puzzle.type === "custom") {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = puzzle.html || "<p>Geen content ingesteld.</p>";
    puzzleContentEl.appendChild(wrapper);
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

function updateStatusPill(el, status) {
  el.classList.remove("status-open", "status-done");
  const isDone = status === "done";
  el.classList.add(isDone ? "status-done" : "status-open");
  el.textContent = isDone ? "Klaar" : "Open";
}

// ==== Event handlers ====

backButton.addEventListener("click", () => {
  puzzleView.classList.remove("view--active");
  overviewView.classList.add("view--active");
  currentPuzzleId = null;
  setFeedback("", null);
});

function handleCheckAnswer() {
  if (!currentPuzzleId) return;

  const puzzle = puzzles.find((p) => p.id === currentPuzzleId);
  if (!puzzle) return;

  const userAnswer = answerInput.value;

  if (!userAnswer.trim()) {
    setFeedback("Vul eerst een antwoord in.", "wrong");
    return;
  }

  if (isAnswerCorrect(puzzle, userAnswer)) {
    puzzle.status = "done";
    updateStatusPill(puzzleStatusEl, puzzle.status);
    renderOverview();
    updateSecretUI();

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

    // Extra logica voor imageZoom: een stap verder uitzoomen
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

// ==== Init ====
renderOverview();
updateSecretUI();