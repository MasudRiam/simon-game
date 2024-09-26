let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "green", "blue", "red"];
let h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("game is started")
        started = true;
        levelUp();
    }
});

function flashBtn(btn) {
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 350);
}



function userFlash(btn) {
    btn.classList.add("userFlash-btn");

    setTimeout(() => {
        btn.classList.remove("userFlash-btn");
    }, 250);
}




function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randBtn = Math.floor(Math.random() * 4); // Changed to 4 to include all colors
    let randColor = btns[randBtn];
    let btnsRand = document.querySelector(`.${randColor}`);


    gameSeq.push (randColor);
    console.log (gameSeq)
    flashBtn(btnsRand);
}


function checkLevel (idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout (levelUp, 750)
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to continue`;

        reset ();
    }
}



function pressBtn() {
    let btn = this;
    userFlash (btn);

    userColor = btn.getAttribute ("id");
    userSeq.push (userColor);

    checkLevel (userSeq.length -1);
}




let allBtn = document.querySelectorAll('.simon-btn');

for (selBtn of allBtn) {
    selBtn.addEventListener ("click", pressBtn);
}


function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



