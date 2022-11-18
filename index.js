let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

let isX = true;

function checkIfWin() {
    let button1Text = button1.innerHTML;
    let button2Text = button2.innerHTML;
    let button3Text = button3.innerHTML;
    let button4Text = button4.innerHTML;
    let button5Text = button5.innerHTML;
    let button6Text = button6.innerHTML;
    let button7Text = button7.innerHTML;
    let button8Text = button8.innerHTML;
    let button9Text = button9.innerHTML;

    //First row horizontal
    if(button1Text === "x" && button2Text === "x" && button3Text === "x")
    {
        alert("You win!");
    }

    //second row horizontal
    if(button4Text === "x" && button5Text === "x" && button6Text === "x")
    {
        alert("you win!");
    }

    //third row horizontal
    if(button7Text === "x" && button8Text === "x" && button9Text === "x")
    {
        alert("you win!");
    }

    //first column vertical
    if(button1Text === "x" && button4Text === "x" && button7Text === "x")
    {
        alert("you win!");
    }

    //second column vertical
    if(button2Text === "x" && button5Text === "x" && button8Text === "x")
    {
        alert("you win!");
    }

    //third column vertical
    if(button3Text === "x" && button6Text === "x" && button9Text === "x")
    {
        alert("you win!");
    }
    //right diagonal
    if(button1Text === "x" && button5Text === "x" && button9Text === "x")
    {
        alert("you win!");
    }

    //left diagonal
    if(button3Text === "x" && button5Text === "x" && button7Text === "x")
    {
        alert("you win!");
    }

    //THE O'S

    //First row horizontal
    if(button1Text === "o" && button2Text === "o" && button3Text === "o")
    {
        alert("Os win!");
    }

    //second row horizontal
    if(button4Text === "o" && button5Text === "o" && button6Text === "o")
    {
        alert("Os win!");
    }

    //third row horizontal
    if(button7Text === "o" && button8Text === "o" && button9Text === "o")
    {
        alert("Os win!");
    }

    //first column vertical
    if(button1Text === "o" && button4Text === "o" && button7Text === "o")
    {
        alert("Os win!");
    }

    //second column vertical
    if(button2Text === "o" && button5Text === "o" && button8Text === "o")
    {
        alert("Os win!");
    }

    //third column vertical
    if(button3Text === "o" && button6Text === "o" && button9Text === "o")
    {
        alert("Os win!");
    }
    //right diagonal
    if(button1Text === "o" && button5Text === "o" && button9Text === "o")
    {
        alert("Os win!");
    }

    //left diagonal
    if(button3Text === "o" && button5Text === "o" && button7Text === "o")
    {
        alert("Os win!");
    }
}

//mark a box where you're going to move
function markBox(event) {
    if(isX && event.target.innerHTML === "") {
        event.target.innerHTML = "x";
        isX = !isX;
    } else if(event.target.innerHTML === "") {
        event.target.innerHTML = "o";
        isX = !isX;
    } else {
        alert("Can't move there!");
    }

    checkIfWin();
}

button1.addEventListener("click", markBox);

button2.addEventListener("click", markBox);

button3.addEventListener("click", markBox);

button4.addEventListener("click", markBox);

button5.addEventListener("click", markBox);

button6.addEventListener("click", markBox);

button7.addEventListener("click", markBox);

button8.addEventListener("click", markBox);

button9.addEventListener("click", markBox);
