const ticTac = document.querySelector(".ticTac");

const boxes = document.querySelectorAll(".box");
const h1 = document.querySelector("h1");
const rbtn = document.querySelector("#rbtn");

let currentPlayer = "X";
let count = 0;

let winingCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startGame(e) {
  if (e.target.className !== "ticTac") {
    if (e.target.innerText === "") {
      e.target.innerText = currentPlayer;
      count++;
      winner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
  if (count === 9) {
    h1.innerText = "Match is draw";
  }
}

ticTac.addEventListener("click", startGame);

function winner() {
  winingCondition.forEach((item) => {
    let index0 = item[0];
    let index1 = item[1];
    let index2 = item[2];

    let val0 = boxes[index0].innerText;
    let val1 = boxes[index1].innerText;
    let val2 = boxes[index2].innerText;
    // console.log(index0, val0);

    if (val0 !== "" && val1 !== "" && val2 !== "") {
      if (val0 === val1 && val1 === val2) {
        boxes[index0].classList.add("classWinner");
        boxes[index1].classList.add("classWinner");
        boxes[index2].classList.add("classWinner");

        count = 0;
        h1.innerText = "Winner is " + val0;
        ticTac.removeEventListener("click", startGame);
      }
    }
  });
}

rbtn.addEventListener("click", () => {
  count = 0;
  currentPlayer = "X";
  h1.innerText = "Tic Tac Toe";
  boxes.forEach((item) => {
    item.innerText = "";
    item.classList.remove("classWinner");
  });
  ticTac.addEventListener("click", startGame);
});
