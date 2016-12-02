// function go() {
//     location.href = "chooseTest.html"
// }

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
    var cookiecontent=getCookie("confidence"); 
    //checking cookie called "pg2pgwhichtouch", putting contents into cookiecontent 
    
    if (cookiecontent == "novice") { //if that cookie has been set
        alert("You think you don't know anything at all.");  
    } else if (cookiecontent == "confident") { //if that cookie has been set
        alert("You think you're alright.");  
    } else if (cookiecontent == "genius") { //if that cookie has been set
        alert("You think you're a genius.");  
    } else {
     alert("It's not working :( ");
    }
       
}