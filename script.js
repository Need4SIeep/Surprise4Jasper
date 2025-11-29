// Hier kun je makkelijk je puzzels aanpassen
const puzzles = [
  {
    title: "Puzzel 1 – Wie ben jij?",
    description:
      "We beginnen simpel. Vul je eigen voornaam in, volledig in kleine letters.",
    answer: "jasper",
  },
  {
    title: "Puzzel 2 – Rekenwerk",
    description:
      "Wat is (5 × 8) + 4? Vul alleen het getal in.",
    answer: "44",
  },
  {
    title: "Puzzel 3 – Codewoord",
    description:
      "Neem de eerste letter van je voornaam, de eerste letter van je achternaam, en dan je lievelingsgetal (tip: vraag het aan Martijn ;)).",
    answer: "jm7", // voorbeeld, pas dit aan
  },
];

const finalClueText =
  "Je cadeaus liggen verstopt in de kast onder de trap, achter de doos met kerstversiering. 🎄";

let currentPuzzleIndex = 0;

const introSection = document.getElementById("intro");
const puzzleSection = document.getElementById("puzzleSection");
const finalSection = document.getElementById("finalSection");

const startButton = document.getElementById("startButton");
const puzzleTitle = document.getElementById("puzzleTitle");
const puzzleDescription = document.getElementById("puzzleDescription");
const answerInput = document.getElementById("answerInput");
const submitAnswerButton = document.getElementById("submitAnswer");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progressBar");
const currentPuzzleNumber = document.getElementById("currentPuzzleNumber");
const totalPuzzles = document.getElementById("totalPuzzles");
const finalClue = document.getElementById("finalClue");

function showPuzzle(index) {
  const puzzle = puzzles[index];
  puzzleTitle.textContent = puzzle.title;
  puzzleDescription.textContent = puzzle.description;
  answerInput.value = "";
  feedback.textContent = "";
  feedback.className = "feedback";

  currentPuzzleNumber.textContent = index + 1;
  totalPuzzles.textContent = puzzles.length;

  const progressPercent = ((index) / puzzles.length) * 100;
  progressBar.style.width = progressPercent + "%";
}

function finishGame() {
  puzzleSection.classList.add("hidden");
  finalSection.classList.remove("hidden");
  finalClue.textContent = finalClueText;
  progressBar.style.width = "100%";
}

startButton.addEventListener("click", () => {
  introSection.classList.add("hidden");
  puzzleSection.classList.remove("hidden");
  currentPuzzleIndex = 0;
  showPuzzle(currentPuzzleIndex);
});

submitAnswerButton.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = puzzles[currentPuzzleIndex].answer.toLowerCase();

  if (!userAnswer) {
    feedback.textContent = "Vul eerst iets in 😉";
    feedback.className = "feedback error";
    return;
  }

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Yes! Goed gedaan 🎉";
    feedback.className = "feedback ok";

    setTimeout(() => {
      currentPuzzleIndex++;
      if (currentPuzzleIndex < puzzles.length) {
        showPuzzle(currentPuzzleIndex);
      } else {
        finishGame();
      }
    }, 700);
  } else {
    feedback.textContent = "Dat is niet helemaal goed... probeer het nog eens!";
    feedback.className = "feedback error";
  }
});

// Enter-toets ook laten werken
answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitAnswerButton.click();
  }
});
