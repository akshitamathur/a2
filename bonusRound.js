window.onload = function() {
    document.getElementById("playArea").style.visibility = "hidden";
};

function go() {
    var box = document.getElementById("knowledgeBoxText");
    box.innerHTML = "The rules of this game are simple. You will get 5 minutes to complete the following riddle: <br> Suppose you have 2 jugs. One can measure 5 L and one can measure 3 L. There is a running tap of water. How will you measure 4 L of water using these 2 jugs. You are allowed to fill the jugs using the tap, and transfer water between the jugs. You are constrained to filling up the jugs completely at a time or HINT: by however much is remaining in them. We hope these rules are clear...On your mark, get set..."
//http://stackoverflow.com/questions/19845167/htmluse-quotes-within-quotes-within-quotes
    
    box = document.getElementById("knowledgeBox").classList.add("knowledgeBoxLarge");
    
    var button = document.getElementById("goButton");
    button.innerHTML = "GO!";
    button.onclick = start;
    
}

function start() {
    console.log("woo");
 document.getElementById("knowledgeBox").classList.remove("knowledgeBoxLarge");
    document.getElementById("knowledgeBoxText").innerHTML = "5:00";
    
    document.getElementById("goButton").style.display = "none";
    document.getElementById("playArea").style.visibility = "visible";
    
    var threeT = document.getElementById("tap3");
    var fiveT = document.getElementById("tap5");
    var threeL = document.getElementById("jug3");
    var fiveL = document.getElementById("jug5");
}

//http://www.clipartbest.com/clipart-measuring-jug