/* Source JS Credit for base of this example code:
http://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username 
*/

function getCookie(cname) { //Generally do not edit this function!
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) { //start of loop
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    } // end of loop
    return "";
}

/* Edit the following function, add things to it if needed (but also consider making other functions --possibly for this function to call, putting things you need to add into those functions.)
*/
function checkCookie() {
    var music = getCookie("musicScore");
    if (music !== "" && music !== " " && music !== null) {
        var musicScore = document.getElementById("musicPoints");
        musicScore.innerHTML = music;
	}else{
        alert("ERROR");
    }

    var social = getCookie("socialScore");
    if (social !== "" && social !== " " && social !== null) {
        var socialScore = document.getElementById("socialScore");
        socialScore.innerHTML = social;
    }else{
        alert("ERROR");
     }

    var logistics = getCookie("logisticsScore");
    if (logistics !== "" && logistics !== " " && logistics !== null) {
        var logisticsScore = document.getElementById("logisticsScore");
        logisticsScore.innerHTML = logistics;
    }else{
        alert("ERROR");
     }

    var linguistics = getCookie("linguisticsScore");
    if (linguistics !== "" && linguistics !== " " && linguistics !== null) {
        var linguisticsScore = document.getElementById("linguisticsScore");
        linguisticsScore.innerHTML = linguistics;
    }else{
        alert("ERROR");
     }

    var bonus = getCookie("bonusScore");
    if (bonus !== "" && bonus !== " " && bonus !== null) {
        var bonusScore = document.getElementById("bonusScore");
        bonusScore.innerHTML = bonus;
    }else{
        alert("ERROR");
     }

     var confidence = getCookie("confidenceLevel");
    if (confidence !== "" && confidence !== " " && confidence !== null) {
        var confidenceLevel = document.getElementById("smart");
        confidenceLevel.innerHTML = "You did alright! Not too shabby! Give yourself some more credit!";
    }else{
        alert("ERROR");
     }




     var finalScore = Number(music) + Number(social) + Number(linguistics) + Number(logistics) + Number(bonus);

     if(finalScore !== "" && finalScore !== " " && finalScore !== null){
     document.getElementById("smart").innerHTML = finalScore;
    }else{
        alert("ERROR FINAL");
    }


}



