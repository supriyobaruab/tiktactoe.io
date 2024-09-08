let boxes = document.querySelectorAll(".box");
let hide = document.querySelector(".hide");
let rr = document.querySelector(".newgame");
let tt = document.querySelector(".rstbtn");
let turn0 = true;
let winnerPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = ()=>{
  turn0 =true;
  enableBoxes();
  hide.classList.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("the box was clicked");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const disableBoxes = () =>{
  for (let box of boxes){
    box.disabled = true;
  }
}
const enableBoxes = () =>{
  for (let box of boxes){
    box.disabled = false;
    box.innerText ="";
  }
}

const checkWinner = () => {
  for (let pattern of winnerPattern) {
    console.log(pattern[0], pattern[1], pattern[2]);
    //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

    let prn1 = boxes[pattern[0]].innerHTML;
    let prn2 = boxes[pattern[1]].innerHTML;
    let prn3 = boxes[pattern[2]].innerHTML;
    console.log(prn1, prn2, prn3);

    if (prn1 != "" && prn2 != "" && prn3 != "") {
      if (prn1 === prn2 && prn2 == prn3) {
        console.log("winner");
        hide.classList.remove("hide");
        disableBoxes();
      }
    }
  }
};

rr.addEventListener("click",resetGame);
tt.addEventListener("click",resetGame);