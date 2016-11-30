function go() {
    location.href = "chooseTest.html"
}

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

 function checkCookie() {
     var username = getCookie("name"); //check cookie called "theusersname" 
 if (username != "" && username != " " && username != null){
     // if that cookie has been set 
         alert("Hello again " + name +"!");
     } else { //cookie not set, or has expired
         alert("username ERROR");
     }


 }

function load() {
    checkCookie();
    var element = document.getElementById("knowledge");
    element.innerHTML += document.cookie;
}