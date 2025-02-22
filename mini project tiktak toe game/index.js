
// let Boxes = document.querySelectorAll(".Box");
// let clear = document.querySelector("#submit");
// let newgamebtn = document.querySelectorAll("#new-game");
// let mymsg = document.querySelectorAll("#msg");
// let msgcontainer = document.querySelectorAll(".container")
// let turnO = true;

// const winner = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const submit = () =>{
//     turnO = true;
//     enableBoxes();
//     msgcontainer.classlist.add("hide");
// }

// Boxes.forEach((Box) => {
//   Box.addEventListener("click", () => {
//     console.log("Box was clicked");
//     if (Box.innerText === "") {
//       if (turnO) {
//         Box.innerText = "O";
//       } else {
//         Box.innerText = "X";
//       }
//       Box.disabled = true;  
//       turnO = !turnO;
//       Checkwinner();
//     }
//   });
// });
// const disableBoxes = () =>{
//     for(let Box of Boxes){
//         Box.disabled = true;
//     }
// }

// const enableBoxes = () =>{
//     for(let Box of Boxes){
//         Box.disabled = false;
//         Box.innnerText = "";
//     }
// }
// const showwinner = (winner)=>{
//      msg.innerText =` Congratulation,Winner is ${winner}`;
//      msgcontainer.classlist.remove("hide");
//      disableBoxes();
// }

// const Checkwinner = () => {
//   for (let pattern of winner) {
//     let pos1val = Boxes[pattern[0]].innerText;
//     let pos2val = Boxes[pattern[1]].innerText;
//     let pos3val = Boxes[pattern[2]].innerText;

//     if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
//       if (pos1val === pos2val && pos2val === pos3val) {
//         console.log(`${pos1val} wins!`);
//          showwinner(pos1val);
//       }
//     }
//   }
// };

// newgamebtn.addEventListener("click",clear);
// submit.addEventListener("click",newgame);



let Boxes = document.querySelectorAll(".Box");
let clear = document.querySelector("#submit");
let newgamebtn = document.querySelector("#new-game");  // Use querySelector if there is only one button
let mymsg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".container");
let turnO = true;

const winner = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const submit = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

Boxes.forEach((Box) => {
  Box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (Box.innerText === "") {
      if (turnO) {
        Box.innerText = "O";
      } else {
        Box.innerText = "X";
      }
      Box.classList.add("clicked");  // Add 'clicked' class to mark the box as clicked
      turnO = !turnO;
      Checkwinner();
    }
  });
});

const disableBoxes = () => {
    for (let Box of Boxes) {
        Box.classList.add("clicked");
    }
}

const enableBoxes = () => {
    for (let Box of Boxes) {
        Box.classList.remove("clicked");
        Box.innerText = "";  // Fixed the typo here
    }
}

const showwinner = (winner) => {
    mymsg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const Checkwinner = () => {
  for (let pattern of winner) {
    let pos1val = Boxes[pattern[0]].innerText;
    let pos2val = Boxes[pattern[1]].innerText;
    let pos3val = Boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log(`${pos1val} wins!`);
        showwinner(pos1val);
      }
    }
  }
};

newgame.addEventListener("click", newgame);
clear.addEventListener("click", submit);
