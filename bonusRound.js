//http://stackoverflow.com/questions/19845167/htmluse-quotes-within-quotes-within-quotes

//https://jsfiddle.net/pvk6p/1248/

//http://www.clipartbest.com/clipart-measuring-jug
    
//http://www.clipshrine.com/water-tap-16744-medium.html

window.onload = function() {
    document.getElementById("playArea").style.visibility = "hidden";
};

var seconds = 0, minutes = 0, t;
var h1;
var jugVals = {a: 0, b: 0};
var inFive = 0, inThree = 0;

function go() {
    var box = document.getElementById("knowledgeBoxText");
    box.innerHTML = "The rules of this game are simple. You will get 3 minutes to complete the following riddle: <br> Suppose you have 2 jugs. One can measure 5 L and one can measure 3 L. There is a running tap of water. How will you measure 4 L of water using these 2 jugs. You are allowed to fill the jugs using the tap, and transfer water between the jugs. You are constrained to filling up the jugs completely or transfer between jugs by however much is remaining in them. We hope these rules are clear...On your mark, get set..."
    
    box = document.getElementById("knowledgeBox").classList.add("knowledgeBoxLarge");
    
    var button = document.getElementById("goButton");
    button.innerHTML = "GO!";
    button.onclick = start;
    
}

function start() {
    console.log("woo");
 document.getElementById("knowledgeBox").classList.remove("knowledgeBoxLarge");
    document.getElementById("knowledgeBoxText").innerHTML = "<h1><time>00:00</time></h1>";
    
    document.getElementById("goButton").style.display = "none";
    document.getElementById("playArea").style.visibility = "visible";
    h1 = document.getElementsByTagName('h1')[0];
    
//    var threeT = document.getElementById("tap3");
//    var fiveT = document.getElementById("tap5");
//    var threeL = document.getElementById("jug3");
//    var fiveL = document.getElementById("jug5");
    
    timer();
}

function updateQty() {
    document.getElementById("qty5").innerHTML = inFive + "/5";
    document.getElementById("qty3").innerHTML = inThree + "/3";
}

function fill(tap) {
    if (tap == 5) {
        document.getElementById("jug5").src = "images/fullJug.png";
        inFive = 5;
    } else if (tap == 3) {
        document.getElementById("jug3").src = "images/fullJug.png";
        inThree = 3;
    }
    updateQty();
}

function transferToThree() {
    if (inThree == 3) {
        alert("Jug 3 is full!");
        return;
    } else {
        var tmp = inFive;
        for (var i = 1; i <= tmp; i++) {
            inThree++;
            inFive--;
            if (inThree == 3) {
                break;
            }
        } 
        changeJugImage();
    }
    updateQty();
}

function transferToFive() {
    if (inFive == 5) {
        alert("Jug 5 is full!");
        return;
    } else {
        var tmp = inThree;
        for (var i = 1; i <= tmp; i++) {
            inFive++;
            inThree--;
            if (inFive == 5) {
                break;
            }
        }       
        changeJugImage();
    }
    updateQty();
}

function changeJugImage() {
    var url;
    switch (inThree) {
        case 1:
            url = "images/jug3litre1.png";
            break;
        case 2:
            url = "images/jug3litre2.png";
            break;
        case 3:
            url = "images/fullJug.png";
            break;
        default:
            url = "images/Jug.png";
            break;
    }
        
    document.getElementById("jug3").src = url;
    
    switch (inFive) {
        case 1:
            url = "images/jug5litres1.png";
            break;
        case 2:
            url = "images/jug5litres2.png";
            break;
        case 3:
            url = "images/jug5litres3.png";
            break;
        case 4:
            url = "images/jug5litres4.png";
            win();
            break;
        case 5:
            url = "images/fullJug.png";
            break;
        default:
            url = "images/Jug.png";
            break;
    }
    
    document.getElementById("jug5").src = url;
}

function emptyJug(jug) {
    console.log(jug);
    if (jug == 3) {
        document.getElementById("jug3").src = "images/Jug.png";
        inThree = 0;
    } else if (jug == 5) {
        document.getElementById("jug5").src = "images/jug5litres.png";
        inFive = 0;
    }
    updateQty();
}

function win() {
    setTimeout(function() {
        alert("YAY!!!! YOU WON!!!");
        window.location = "end.html";
    }, 500);
}

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes == 3) {
            alert("TIME'S UP! YOU LOST...");
            window.location = "end.html";
        }
    }
    
    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}
