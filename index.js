/*
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
*/

let buttonList = document.getElementsByTagName("button");

for(let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", updateGame);
}

function checkIfWin() {
    let button1Text = buttonList[0].innerHTML;
    let button2Text = buttonList[1].innerHTML;
    let button3Text = buttonList[2].innerHTML;
    let button4Text = buttonList[3].innerHTML;
    let button5Text = buttonList[4].innerHTML;
    let button6Text = buttonList[5].innerHTML;
    let button7Text = buttonList[6].innerHTML;
    let button8Text = buttonList[7].innerHTML;
    let button9Text = buttonList[8].innerHTML;

    //First row horizontal
    if(button1Text === "x" && button2Text === "x" && button3Text === "x")
    {
        alert("You win!");
        return true;
    }

    //second row horizontal
    if(button4Text === "x" && button5Text === "x" && button6Text === "x")
    {
        alert("you win!");
        return true;
    }

    //third row horizontal
    if(button7Text === "x" && button8Text === "x" && button9Text === "x")
    {
        alert("you win!");
        return true;
    }

    //first column vertical
    if(button1Text === "x" && button4Text === "x" && button7Text === "x")
    {
        alert("you win!");
        return true;
    }

    //second column vertical
    if(button2Text === "x" && button5Text === "x" && button8Text === "x")
    {
        alert("you win!");
        return true;
    }

    //third column vertical
    if(button3Text === "x" && button6Text === "x" && button9Text === "x")
    {
        alert("you win!");
        return true;
    }
    //right diagonal
    if(button1Text === "x" && button5Text === "x" && button9Text === "x")
    {
        alert("you win!");
        return true;
    }

    //left diagonal
    if(button3Text === "x" && button5Text === "x" && button7Text === "x")
    {
        alert("you win!");
        return true;
    }

    //THE O'S

    //First row horizontal
    if(button1Text === "o" && button2Text === "o" && button3Text === "o")
    {
        alert("Os win!");
        return true;
    }

    //second row horizontal
    if(button4Text === "o" && button5Text === "o" && button6Text === "o")
    {
        alert("Os win!");
        return true;
    }

    //third row horizontal
    if(button7Text === "o" && button8Text === "o" && button9Text === "o")
    {
        alert("Os win!");
        return true;
    }

    //first column vertical
    if(button1Text === "o" && button4Text === "o" && button7Text === "o")
    {
        alert("Os win!");
        return true;
    }

    //second column vertical
    if(button2Text === "o" && button5Text === "o" && button8Text === "o")
    {
        alert("Os win!");
        return true;
    }

    //third column vertical
    if(button3Text === "o" && button6Text === "o" && button9Text === "o")
    {
        alert("Os win!");
        return true;

    }
    //right diagonal
    if(button1Text === "o" && button5Text === "o" && button9Text === "o")
    {
        alert("Os win!");
        return true;
    }

    //left diagonal
    if(button3Text === "o" && button5Text === "o" && button7Text === "o")
    {
        alert("Os win!");
        return true;
    }
}

let isX = true;

function updateGame(event) {
    //Mark a box where you clicked
    if(isX && event.target.innerHTML === "") {
        event.target.innerHTML = "x";
        isX = !isX;
    } else if(!isX && event.target.innerHTML === "") {
        event.target.innerHTML = "o";
        isX = !isX;
    } else {
        alert("Can't move there!");
    }

    if(checkIfWin()) {
        for(let i = 0; i < buttonList.length; i++) {
            buttonList[i].innerHTML = "";
            isX = true;
        }
    }
}

/*
button1.addEventListener("click", updateGame);

button2.addEventListener("click", updateGame);

button3.addEventListener("click", updateGame);

button4.addEventListener("click", updateGame);

button5.addEventListener("click", updateGame);

button6.addEventListener("click", updateGame);

button7.addEventListener("click", updateGame);

button8.addEventListener("click", updateGame);

button9.addEventListener("click", updateGame);
*/