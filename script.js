let boxes = document.querySelectorAll(".box");

let restart = document.querySelector(".reset");

 let toper = document.querySelector(".top");
 let para = document.querySelector(".para");
 let newbtn = document.querySelector(".new");

let turn0 = true;



const winPatt = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



let start = () => {
    turn0 = false;
    enable();
    toper.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button wass clicked!");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWin();
    });
});


let disale = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}



let enable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}



let showWin = (winer) => {
    para.innerText = `Congratulation's winer is ${(winer)}\n : )`;
toper.classList.remove("hide");
}


let checkWin = () => {
    for (let patt of winPatt) {
        let pos1 = boxes[patt[0]].innerText;
        let pos2 = boxes[patt[1]].innerText;
        let pos3 = boxes[patt[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winer", pos1);
               showWin(pos1);
                disale();
            }
        }
    }
}


restart.addEventListener("click", start);
newbtn.addEventListener("click", start);