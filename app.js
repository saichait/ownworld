const categories = [
  {
    id: "movies",
    name: "Telugu Movies",
    emoji: "🎬",
    points: 1,
    prompts: [
      "Baahubali", "Pushpa", "RRR", "Eega", "Jalsa", "Bommarillu", "Dookudu",
      "Athadu", "Jersey", "Fidaa", "Rangasthalam", "Race Gurram",
      "Ala Vaikunthapurramuloo", "Arjun Reddy", "Sye", "Magadheera",
      "Maryada Ramanna", "Julayi", "Mirchi", "Gabbar Singh",
      "Oohalu Gusagusalade", "Pelli Choopulu", "Agent Sai Srinivasa Athreya",
      "Jathi Ratnalu", "Brochevarevarura", "Ee Nagaraniki Emaindhi",
      "Mathu Vadalara", "Sammohanam", "Kshanam"
    ]
  },
  {
    id: "characters",
    name: "Famous Characters",
    emoji: "⭐",
    points: 1,
    prompts: [
      "Chota Bheem", "Doraemon", "Shinchan", "Nobita", "Motu", "Patlu", "Tom",
      "Jerry", "Mickey Mouse", "Donald Duck", "Spider-Man", "Superman", "Batman",
      "Iron Man", "Hulk", "Captain America", "Thor", "Wonder Woman",
      "Black Panther", "Ant-Man", "Harry Potter", "Mr. Bean", "Jack Sparrow",
      "Charlie Chaplin", "Sherlock Holmes", "James Bond", "Rowan Atkinson",
      "Kung Fu Panda", "Mowgli", "Shaktimaan"
    ]
  },
  {
    id: "family",
    name: "Telugu Family Situations",
    emoji: "🏡",
    points: 2,
    prompts: [
      "Amma calling you for dinner", 'Amma saying "inka koncham tinu"',
      "Nanna asking about exam marks", "Nanna checking the electricity bill",
      "Searching for the TV remote", "Searching for your slippers",
      "Getting ready for a wedding", "Guest arriving unexpectedly",
      "Eating biryani when you're already full", "Trying to wake up early",
      "Mom asking you to clean your room", "Dad falling asleep while watching TV",
      "Kids fighting over the TV remote", "Hiding your report card",
      "Getting caught using your phone late at night",
      "Pretending to study when parents walk in",
      "Mom discovering you ate all the snacks", 'Dad asking "Who left the lights on?"',
      "Family trying to take a group photo",
      "Everyone fighting for the best seat in the car",
      "Someone taking too long in the bathroom",
      "Family waiting for one person to get ready",
      "Looking for car keys before leaving", "Forgetting where you parked the car",
      'Someone saying "5 minutes" and taking 30 minutes',
      "Kids refusing to get out of the swimming pool", "Trying to pack for a vacation",
      "Realizing you forgot something after leaving home",
      "Someone eating your favorite snack", "Family deciding where to eat",
      "Mom bargaining with a shopkeeper", "Dad checking the hotel room",
      "Everyone fighting over the AC temperature", "Someone snoring loudly",
      "Taking a selfie and someone blinking", 'Kids asking "Are we there yet?"',
      "Family getting lost while travelling",
      "Trying to wake someone who won't get up",
      'Someone saying "I\'m not hungry" and eating later',
      "Family rushing because the train is about to leave"
    ]
  },
  {
    id: "actions",
    name: "Funny Actions",
    emoji: "😄",
    points: 2,
    prompts: [
      "Trying to catch a mosquito", "Killing a cockroach", "Walking on hot sand",
      "Stepping on something sharp", "Seeing a snake unexpectedly",
      "Getting scared by a lizard", "Trying to open a stuck jar",
      "Trying to open a packet with your teeth", "Walking in heavy rain",
      "Getting caught without an umbrella", "Riding a roller coaster",
      "Riding a bicycle with a flat tyre", "Trying to start a scooter",
      "Trying to carry too many bags", "Carrying a sleeping child",
      "Trying to take a selfie with a monkey",
      "Taking a photo of someone who keeps moving",
      "Trying to balance on one leg", "Slipping but pretending nothing happened",
      "Trying to walk in very tight shoes", "Eating extremely spicy food",
      "Drinking something extremely hot", "Trying not to sneeze",
      "Trying not to laugh", "Trying to stay awake during a boring movie",
      "Waking up after a very short sleep",
      "Looking for something that is in your hand",
      "Trying to remember someone's name", "Getting a surprise birthday gift",
      "Opening a gift you don't like", "Trying to kill a fly",
      "Getting scared during a horror movie", "Dancing when nobody is watching",
      "Trying to sing but forgetting the lyrics", "Trying to whistle",
      "Trying to take a group selfie", "Pretending to be a famous actor",
      "Trying to sneak into the kitchen at night",
      "Trying to quietly eat chips", "Walking like a model on a fashion ramp"
    ]
  },
  {
    id: "kids",
    name: "Kids Topics",
    emoji: "🧒",
    points: 1,
    prompts: [
      "Chota Bheem", "Doraemon", "Shinchan", "Tom & Jerry", "Minecraft", "Roblox",
      "Pokémon", "Spider-Man", "Harry Potter", "Avengers", "Going to school late",
      "Forgetting homework", "Getting 100 marks", "Getting low marks",
      "Hiding a report card", "Teacher asking a difficult question",
      "Getting homework from teacher", "Playing during study time",
      'Parents saying "Go study!"', "Pretending to study",
      "Eating ice cream secretly", "Getting a surprise birthday gift",
      "Losing your school bag", "Fighting with your brother/sister",
      "Asking parents for a new toy", "Playing video games secretly",
      "Being told to stop playing", "Getting ready for school",
      "Waiting for the school bus", "Coming home after the last exam"
    ]
  },
  {
    id: "tricky",
    name: "Super Tricky Round",
    emoji: "🔥",
    points: 3,
    prompts: [
      'Amma asking "Did you eat?" when you just ate',
      "Trying to secretly eat a snack while everyone is sleeping",
      "Pretending you understood what the teacher said",
      "Trying to look busy when your boss walks past",
      "Someone calling you when your phone is on silent",
      "Trying to remember where you kept your phone",
      "Looking for your glasses while wearing them",
      "Trying to remember someone's name at a family function",
      "Pretending to recognize someone you don't remember",
      "Trying to escape from a long conversation",
      'Someone saying "Let\'s leave in 5 minutes"',
      'Waiting for someone who said "I\'m almost ready"',
      "Trying to take a family photo with everyone looking at the camera",
      "Trying to make kids sit quietly",
      "Trying to wake someone who is pretending to sleep",
      "Someone eating your food without asking",
      "Trying to secretly check your phone",
      "Trying to control your laughter in a serious situation",
      "Trying to hide that you broke something",
      "Pretending you didn't hear Mom calling you",
      "Dad asking who finished the snacks",
      "Trying to choose what to watch on TV",
      "Everyone blaming each other for losing the remote",
      "Trying to decide where the family should eat",
      "Someone changing the AC temperature",
      "Trying to fit everyone's luggage into the car",
      "Realizing you forgot your wallet after reaching the shop",
      "Trying to get everyone ready for a group photo",
      'Kids asking "Are we there yet?" repeatedly',
      "Running to catch a train"
    ]
  }
];

const storageKey = "family-charades-game-v1";
const setupScreen = document.querySelector("#setup-screen");
const gameScreen = document.querySelector("#game-screen");
const teamCount = document.querySelector("#team-count");
const teamNameFields = document.querySelector("#team-name-fields");
const setupForm = document.querySelector("#setup-form");
const durationSelect = document.querySelector("#round-duration");
const categorySelect = document.querySelector("#category-select");
const scoreList = document.querySelector("#score-list");
const turnCount = document.querySelector("#turn-count");
const turnTeam = document.querySelector("#turn-team");
const readyState = document.querySelector("#ready-state");
const activeState = document.querySelector("#active-state");
const revealButton = document.querySelector("#reveal-button");
const promptCategory = document.querySelector("#prompt-category");
const promptPoints = document.querySelector("#prompt-points");
const promptText = document.querySelector("#prompt-text");
const timerDisplay = document.querySelector("#timer");
const notice = document.querySelector("#notice");
const newGameButton = document.querySelector("#new-game-button");

let game = loadGame();
let timerInterval = null;
let secondsLeft = 0;
let noticeTimeout = null;

function loadGame() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    if (!parsed || !Array.isArray(parsed.teams) || parsed.teams.length < 2 ||
        !Number.isInteger(parsed.currentTeam) || !Number.isInteger(parsed.turns) ||
        !Number.isInteger(parsed.duration) || !Array.isArray(parsed.usedPrompts)) return null;
    return parsed;
  } catch (error) {
    showNotice("This phone could not load the saved game. Start a new game to continue.");
    return null;
  }
}

function saveGame() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(game));
  } catch (error) {
    showNotice("Your browser could not save this game. Keep this tab open so you don't lose the scores.");
  }
}

function showNotice(message) {
  notice.textContent = message;
  notice.hidden = false;
  clearTimeout(noticeTimeout);
  noticeTimeout = setTimeout(() => { notice.hidden = true; }, 6000);
}

function renderTeamFields() {
  const count = Number(teamCount.value);
  const oldNames = [...teamNameFields.querySelectorAll("input")].map(input => input.value);
  teamNameFields.replaceChildren();
  for (let index = 0; index < count; index += 1) {
    const label = document.createElement("label");
    label.className = "field-label";
    label.htmlFor = `team-${index}`;
    label.textContent = `Team ${index + 1} name`;
    const input = document.createElement("input");
    input.className = "input-control";
    input.id = `team-${index}`;
    input.name = `team-${index}`;
    input.maxLength = 24;
    input.autocomplete = "off";
    input.placeholder = `Team ${index + 1}`;
    input.value = oldNames[index] || "";
    teamNameFields.append(label, input);
  }
}

function populateCategories() {
  categorySelect.replaceChildren();
  const randomOption = document.createElement("option");
  randomOption.value = "random";
  randomOption.textContent = "🎲 Random category";
  categorySelect.append(randomOption);
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = `${category.emoji} ${category.name} · ${category.points} ${category.points === 1 ? "point" : "points"}`;
    categorySelect.append(option);
  }
}

function render() {
  const inGame = Boolean(game);
  setupScreen.hidden = inGame;
  gameScreen.hidden = !inGame;
  newGameButton.hidden = !inGame;
  if (!game) return;

  turnCount.textContent = `Turn ${game.turns + 1}`;
  const current = game.teams[game.currentTeam];
  turnTeam.textContent = current.name;
  scoreList.replaceChildren();
  game.teams.forEach((team, index) => {
    const row = document.createElement("div");
    row.className = `score-row${index === game.currentTeam ? " is-current" : ""}`;
    const name = document.createElement("span");
    name.className = "score-name";
    name.textContent = team.name;
    const points = document.createElement("span");
    points.className = "score-points";
    points.textContent = String(team.score);
    row.append(name, points);
    scoreList.append(row);
  });
}

function getNextPrompt() {
  let availableCategories = categories;
  const selected = categorySelect.value;
  if (selected !== "random") {
    availableCategories = categories.filter(category => category.id === selected);
  }
  let available = availableCategories.flatMap(category =>
    category.prompts.map((text, index) => ({ category, index, text }))
      .filter(prompt => !game.usedPrompts.includes(`${prompt.category.id}:${prompt.index}`))
  );
  if (!available.length) {
    game.usedPrompts = [];
    available = availableCategories.flatMap(category =>
      category.prompts.map((text, index) => ({ category, index, text }))
    );
    showNotice("That category's prompts have all been used. The category has been shuffled for another round.");
  }
  const prompt = available[Math.floor(Math.random() * available.length)];
  game.usedPrompts.push(`${prompt.category.id}:${prompt.index}`);
  return prompt;
}

function startTurn() {
  if (!game) return;
  const prompt = getNextPrompt();
  promptText.textContent = prompt.text;
  promptCategory.textContent = `${prompt.category.emoji} ${prompt.category.name}`;
  promptPoints.textContent = `+${prompt.category.points} ${prompt.category.points === 1 ? "point" : "points"}`;
  secondsLeft = game.duration;
  updateTimer();
  readyState.hidden = true;
  activeState.hidden = false;
  categorySelect.disabled = true;
  game.activeCategory = prompt.category.id;
  game.phase = "active";
  saveGame();
  timerInterval = setInterval(() => {
    secondsLeft -= 1;
    updateTimer();
    if (secondsLeft <= 0) finishTurn(false, true);
  }, 1000);
}

function updateTimer() {
  timerDisplay.textContent = String(secondsLeft);
  timerDisplay.classList.toggle("is-low", secondsLeft <= 10);
}

function finishTurn(correct, timedOut = false) {
  if (!game || game.phase !== "active") return;
  clearInterval(timerInterval);
  timerInterval = null;
  let pointsAdded = false;
  if (correct) {
    const category = categories.find(item => item.id === game.activeCategory);
    if (category) {
      game.teams[game.currentTeam].score += category.points;
      pointsAdded = true;
    } else {
      showNotice("This turn's category could not be verified, so no points were added.");
    }
  }
  game.turns += 1;
  game.currentTeam = (game.currentTeam + 1) % game.teams.length;
  game.phase = "ready";
  delete game.activeCategory;
  saveGame();
  promptText.textContent = "";
  activeState.hidden = true;
  readyState.hidden = false;
  categorySelect.disabled = false;
  render();
  if (timedOut) showNotice("Time's up! No points this turn. Pass the phone to the next team.");
  else if (pointsAdded) showNotice("Great guess! Points added. Pass the phone to the next team.");
}

function startNewGame(event) {
  if (event) event.preventDefault();
  const names = [...teamNameFields.querySelectorAll("input")]
    .map((input, index) => input.value.trim() || `Team ${index + 1}`);
  game = {
    teams: names.map(name => ({ name, score: 0 })),
    currentTeam: 0,
    turns: 0,
    duration: Number(durationSelect.value),
    usedPrompts: [],
    phase: "ready"
  };
  saveGame();
  populateCategories();
  categorySelect.value = "random";
  render();
}

teamCount.addEventListener("change", renderTeamFields);
setupForm.addEventListener("submit", startNewGame);
revealButton.addEventListener("click", startTurn);
document.querySelector("#correct-button").addEventListener("click", () => finishTurn(true));
document.querySelector("#skip-button").addEventListener("click", () => finishTurn(false));
newGameButton.addEventListener("click", () => {
  if (window.confirm("Start a new game? The current teams and scores will be cleared.")) {
    clearInterval(timerInterval);
    game = null;
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      showNotice("The saved game could not be cleared from this browser.");
    }
    renderTeamFields();
    render();
  }
});

renderTeamFields();
populateCategories();
render();
if (game?.phase === "active") {
  game.phase = "ready";
  delete game.activeCategory;
  saveGame();
  showNotice("The interrupted turn was ended when this page reopened. Scores have been kept.");
}

if ("serviceWorker" in navigator && window.isSecureContext &&
    location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    const offlineStatus = document.querySelector("#offline-status");
    offlineStatus.textContent = "Preparing offline play. Keep this page open and stay connected...";
    const updateOfflineStatus = () => {
      offlineStatus.textContent = "Ready for offline play. Install to your home screen, then play without internet or your PC.";
    };
    navigator.serviceWorker.addEventListener("controllerchange", updateOfflineStatus);
    navigator.serviceWorker.register("./sw.js")
      .then(registration => {
        if (registration.active && navigator.serviceWorker.controller) updateOfflineStatus();
        const installing = registration.installing;
        if (installing) {
          installing.addEventListener("statechange", () => {
            if (installing.state === "redundant") {
              offlineStatus.textContent = "Offline setup failed. Reconnect and reload to try again.";
            }
          });
        }
      })
      .catch(error => {
        console.error("Offline support could not be enabled.", error);
        offlineStatus.textContent = "Offline setup failed. Reconnect and reload to try again.";
      });
  });
}
