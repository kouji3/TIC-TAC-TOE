const playBtns = document.querySelectorAll(".gameboard > *");
const column1 = document.querySelectorAll(".gameboard > .col1");
const column2 = document.querySelectorAll(".gameboard > .col2");
const column3 = document.querySelectorAll(".gameboard > .col3");
const row1 = document.querySelectorAll(".gameboard > .first");
const row2 = document.querySelectorAll(".gameboard > .second");
const row3 = document.querySelectorAll(".gameboard > .third");
const intrS1 = document.querySelectorAll(".gameboard > .s1");
const intrS2 = document.querySelectorAll(".gameboard > .s2");
const overlay = document.querySelector(".overlay");
const result = document.querySelector(".overlay > h1");
const noWinnerResult = document.querySelector(".no-winner");
const XorO = document.querySelector(".overlay > h1 > .player");
const btns = [...playBtns];



let firstAdded = false;
let hasOnePlayerWon = false;
let num = 0;



overlay.addEventListener("click", () => {
    reset();
})


window.onload = addMark();


function addMark(){
    btns.forEach((x) => {
        x.addEventListener("click", () => {
            
            if(x.textContent != "") return;
            
            if(firstAdded === false){
                num += 1;
                x.textContent = "X";
                checkTheWinner();
                
                x.style.cssText = "color: #BFD7EA;";
                let ooo = [...x.classList];
                console.log(ooo[0] === "first" && ooo[1] === "col1");
                firstAdded = true;

            } else {
                num += 1;
                x.textContent = "O";
                checkTheWinner();
                x.style.cssText = "color: #1f2937;";
                console.log(x.classList);
                firstAdded = false;
            }


        });
    });

}


function putXResult() {
    XorO.textContent = "X";
    XorO.style.cssText = "color: #BFD7EA; font-size: 60px;";
    
    overlay.classList.add("show")
    result.classList.add("show");
    hasOnePlayerWon = true;
}

function putOResult() {
    XorO.textContent = "O";
    XorO.style.cssText = "color: #1f2937; font-size: 60px;";
    
    overlay.classList.add("show");
    result.classList.add("show");
    hasOnePlayerWon = true;
}

function putTieResult(){
    

    console.log(num);

    if(num === 9 && hasOnePlayerWon === false){
        
        
        overlay.classList.add("show");
        noWinnerResult.classList.add("show");
    }
   
}

function checkTheWinner(){
    const col1 = [...column1];
    const col2 = [...column2];
    const col3 = [...column3];
    const r1 = [...row1];
    const r2 = [...row2];
    const r3 = [...row3];
    const s1 = [...intrS1];
    const s2 = [...intrS2];


    if(col1[0].textContent === "X" && col1[1].textContent === "X" && col1[2].textContent === "X" ){
        putXResult();
        
    }

    else if(col1[0].textContent === "O" && col1[1].textContent === "O" && col1[2].textContent === "O" ){
        putOResult();
    }

    else if(col2[0].textContent === "X" && col2[1].textContent === "X" && col2[2].textContent === "X" ){
        putXResult();
    }

    else if(col2[0].textContent === "O" && col2[1].textContent === "O" && col2[2].textContent === "O" ){
        putOResult();
    }

    else if(col3[0].textContent === "X" && col3[1].textContent === "X" && col3[2].textContent === "X" ){
        putXResult();
    }

    else if(col3[0].textContent === "O" && col3[1].textContent === "O" && col3[2].textContent === "O" ){
        putOResult();
    }

    else if(r1[0].textContent === "X" && r1[1].textContent === "X" && r1[2].textContent === "X" ){
       putXResult();
    }

    else if(r1[0].textContent === "O" && r1[1].textContent === "O" && r1[2].textContent === "O" ){
        putOResult();
    }
    else if(r2[0].textContent === "X" && r2[1].textContent === "X" && r2[2].textContent === "X" ){
        putXResult();
    }

    else if(r2[0].textContent === "O" && r2[1].textContent === "O" && r2[2].textContent === "O" ){
        putOResult();
    }
    else if(r3[0].textContent === "X" && r3[1].textContent === "X" && r3[2].textContent === "X" ){
        putXResult();
    }

    else if(r3[0].textContent === "O" && r3[1].textContent === "O" && r3[2].textContent === "O" ){
        putOResult();
    }

    else if(s1[0].textContent === "X" && s1[1].textContent === "X" && s1[2].textContent === "X" ){
        putXResult();
    }

    else if(s1[0].textContent === "O" && s1[1].textContent === "O" && s1[2].textContent === "O" ){
        putOResult();
    }

    else if(s2[0].textContent === "X" && s2[1].textContent === "X" && s2[2].textContent === "X" ){
        putXResult();
    }

    else if(s2[0].textContent === "O" && s2[1].textContent === "O" && s2[2].textContent === "O" ){
        putOResult();
    } 
    else {
        putTieResult();
    }
    

}

function reset(){
    num = 0;
    firstAdded = false;
    hasOnePlayerWon = false;
    overlay.classList.remove("show");
    result.classList.remove("show");
    noWinnerResult.classList.remove("show");
    btns.forEach(x => {
        x.textContent = "";
    });
}