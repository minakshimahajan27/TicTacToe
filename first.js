// let boxes= document.querySelectorAll("#box");
// let reset_game= document.querySelector("#btn");
// let newbtn=document.querySelector("#new-btn");
// let msg1=document.querySelector(".msg1");
// let msg2=document.querySelector("#msg2");
// let turnO=true;
// const winpetterns=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
// ];
// const resetgame=()=>{
//     turnO=true;
//     enableBoxes();
//     msg1.classList.add("hide");
// }
// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("box was clicked");
//        if(turnO){
//            box.innerText="O";
//            turnO=false;
//        }
//        else{
//         box.innerText="X";
//         turnO=true;

//        }
//        box.disabled=true;
//        checkwinner();
//     });
// });
// const disableBoxes=()=>{
//     for(let box of boxes ){
//         box.disable=true;
// }
// };
// const enableBoxes=()=>{
//     for(let box of boxes){
//         box.disabled=false;
//         box.innerText="";
//     }
// }
// const showwinner=(winner)=>{
//     msg1.innerText=`Congratulation,winner is ${winner}`,style.backgrounColor="red",fontSize="20px";
//     msg1.classList.remove("hide");
//     disableBoxes();
// }
// const checkwinner=()=>{
//     for(pattern of winpetterns){
//     let pos1val=boxes[pattern[0]].innerText;
//     let pos2val=boxes[pattern[1]].innerText;
//     let pos3val=boxes[pattern[2]].innerText;
     
//     if(pos1val!=""&&pos2val!=""&&pos3val!=""){
//         if(pos1val==pos2val&&pos2val==pos3val){
//             console.log("winner");
//             showwinner(pos1val)
//         }
//     }
// }
// }
// reset_game.addEventListener('click',resetGame)
let boxes = document.querySelectorAll("#box");
let reset_game = document.querySelector("#btn");
let new_btn = document.querySelector("#new-btn");
let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector("#msg2");
let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msg1.classList.add("hide");
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg1.innerText = `Congratulations, winner is ${winner}`;
    msg1.style.backgroundColor = "red";
    msg1.style.fontSize = "20px";
    msg1.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showwinner(pos1val);
            return; // Exit the function if a winner is found
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

reset_game.addEventListener('click', resetgame);

// Define newgame function to reset the game
const newgame = () => {
    resetgame(); // Just reset the game using existing resetgame function
};

new_btn.addEventListener("click", newgame);
