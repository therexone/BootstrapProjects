var num = 6;
var colors = colorsGen(num);
var squares = document.querySelectorAll(".square");
var rgbd = document.querySelector(".rgbd");
var status = document.querySelector(".stat");//status.textContent does not work (why?)
var pickedCol = colors[Math.floor(Math.random() * 6)];
var h1 = document.querySelector("h1");
var reset = document.querySelector(".reset");
var modes = document.querySelectorAll(".mode");
var sqcontainer = document.querySelector("#container");

//initial game mode
var hard = true;
modes[1].classList.add("activemode");

rgbd.textContent = pickedCol;

//add initial colors to game
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}
//add event listeners and handlers to the squares 
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        //picked color is the same as tile color
        if (this.style.backgroundColor === pickedCol) {
            //all tiles go pickedCol
            for (var j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = pickedCol;
            }
            document.querySelector(".stat").textContent = "Correct!";
            h1.style.backgroundColor = pickedCol;
            reset.textContent = "PLAY AGAIN?"

        }
        else {
            this.style.backgroundColor = "#232323";
            document.querySelector(".stat").textContent = "Try Again!";
        }

    })
}
//reset functionality
reset.addEventListener("click", function () {
    if (hard) {
        resetf(6);
    }
    else {
        resetf(3);
    }
})

//mode eventlisteners and handlers
for (var i = 0; i < modes.length; i++) {
    modes[i].addEventListener("click", function () {
        modes[0].classList.remove("activemode");
        modes[1].classList.remove("activemode");
        this.classList.add("activemode");
        if (this.textContent === "EASY") {
            hard = false;
            num = 3;
        }
        else {
            hard = true;
            num = 6;
        }
        resetf(num);
    })
}
//random color generation
function randCol() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

//generate required number of random colors
function colorsGen(num) {
    //store the generated colors in an array
    var colors = [];
    for (var i = 0; i < num; i++) {
        colors[i] = randCol();
    }
    return colors;
}

//reset fucntion
function resetf(num) {
    //new set of colors
    colors = colorsGen(num);
    //give new colors to the squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    //pick a color and display that
    pickedCol = colors[Math.floor(Math.random() * num)];
    rgbd.textContent = pickedCol;
    //reset h1 bg
    h1.style.backgroundColor = "#2C62B7";
    //change button text
    reset.textContent = "NEW COLORS";
    document.querySelector(".stat").textContent = "";
}

