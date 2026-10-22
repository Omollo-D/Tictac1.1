const playerform = document.getElementById("playerform");
const player1form = document.getElementById("player1");
const player2form = document.getElementById("player2");

const player1text = document.getElementById("player1text");
const player2text = document.getElementById("player2text");
const turnEl = document.getElementById("turn");

let turn = "";

//.forEach((box, index) => {
//box = document.getElementById("box" + index);
// gridArr.push(box);
//  console.log("box" + index);
// console.log("gridArr");
// console.log("================");
//});
const gridArr = [];
for (let i = 0; i < 9; i++) {
  let box = document.getElementById("box" + i);
  gridArr.push(box);
  console.log("=================");
  console.log("box" + i);
  console.log("gridArr");
  console.log("================");
}

gridArr.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (gridArr[index].innerText !== "") {
      return;
    }

    if (turn === "") {
      turn = "X";
    } else if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
    box.innerText = turn;

    gridArr[index].innerText = turn;
  });
});

console.log(turn);

function showplayer() {
  event.preventDefault();
  player1text.innerText = "player1: " + player1form.value;
  player2text.innerText = "player2: " + player2form.value;
  turnEl.innerText = "Turn: " + turn;
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8][(0, 3, 6)], //horizontal
  [1, 4, 7],
  V[(2, 5, 8)], //vertical
  [0, 4, 8],
  V[(2, 4, 6)], //diagonal
];

function checkWinner() {
  let gridtexts = [];
  for (let i = 0; i < 9; i++) {
    gridtexts.push(gridArr[i].innerText);
    console.log(gridtexts);
  }
  winningcombos.forEach((winningArr) => {
    let a = "";
    let b = "";
    let c = "";
    winningArr.forEach((number) => {
      a = gridtexts[winningArr[0]];
      b = gridtexts[winningArr[1]];
      c = gridtexts[winningArr[2]];
    });
    if (a === b && a === c && a !== "") {
      console.log("Winner found!");
    }
  });
}
