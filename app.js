//создаем массив объектов - карточек (каждая повторяется по 2 раза)
const cardArray = [
  {
    name: "violet cat",
    img: "images/violetcat.png",
  },
  {
    name: "blue dog",
    img: "images/bluedog.png",
  }, 
  {
    name: "orange cat",
    img: "images/orangecat.png",
  },
  {
    name: "pink dog",
    img: "images/pinkdog.png",
  },
  {
    name: "yellow dog",
    img: "images/yellowdog.png",
  },
  {
    name: "green cat",
    img: "images/greencat.png",
  },
  {
    name: "violet cat",
    img: "images/violetcat.png",
  },
  {
    name: "blue dog",
    img: "images/bluedog.png",
  },
  {
    name: "orange cat",
    img: "images/orangecat.png",
  },
  {
    name: "pink dog",
    img: "images/pinkdog.png",
  },
  {
    name: "yellow dog",
    img: "images/yellowdog.png",
  },
  {
    name: "green cat",
    img: "images/greencat.png",
  },
];

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];


cardArray.sort(() => 0.5 - Math.random());

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {

    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);

    card.addEventListener("click", flipCard); 

    gridDisplay.append(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  
  if (optionOneId === optionTwoId) {
    alert(`Your clicked the same card`);
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  } else if (cardsChosen[0] === cardsChosen[1]) {

    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  }


  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;


  if (cardsWon.length === cardArray.length / 2) {
    alert(`Congratulations! You found them all`);
  }
}


function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name); 
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
