//window.onload = function opening(){
//alert("The javascript is loading");
//
// var username = prompt("Please enter your name: ");
// if (username !== "" && username !== " " && username !== null){
// //ensure something reasonable is in username
// 	alert("Hi, " + username + " .");
// }else {  //if something reasonable is not in username, set username to something
// 	alert("Okay, Anonymous!");
// 	username = "Anonymous";
// }
//
//
// // var gender
//
// // alert("Please Select Gender:");
//
//
// // window.location.replace("file:///Users/Akshita/Desktop/Fall%202016/DATT%201939/a2/ottawa.html");
// };



 //Only edit the following function if necessary:
 function setCookie(cookieString,exdays) {  // receives 3 values to set cookie
     var d = new Date();
     //d.setTime(d.getTime() + (exdays*24*60*60*1000));
     d.setTime(d.getTime() + (exdays*1000)); //sets in seconds, not days
     var expires = "expires=" + d.toGMTString();
     document.cookie = cookieString;
      //go to next page
 }

function startGame() {
    submitFunction();
    window.location.replace("begin.html");
}

function submitFunction()
{
	
	var textstring = '';
    var cookieString = '';
	for (i=0;i<2;i++) {
		var box = document.forms["contestantForm"].elements[i];
		if (!box.value) {
			alert("Remember to fill in your" + box.name + "!");
			return;
		}
		textstring += box.name + ": " + box.value + "\n";
        cookieString += box.name+"="+box.value+"; ";
	}

	// Get value of the 'Why' radio buttons.

	user_input = '';
    var why = document.forms['contestantForm'].why;
	for (i=0;i<why.length;i++) {
		if (why[i].checked) {
			user_input = why[i].value;
            cookieString += "val"+i+"="+why[i].value+"; ";
		}
        
	}
	textstring += 'I am taking the test because ' + user_input + '\n';

	// Get value of the 'How' select box.

	user_input = document.contestantForm.birthday.options[document.contestantForm.birthday.selectedIndex].value;
	textstring += 'My favourite season is the ' + user_input + '\n';
    cookieString += "season="+user_input+"; ";

	// See what checkboxes are checked. They are elements 9-12

	textstring += 'My hobbies include ';
    var elements = document.contestantForm.elements;
	for (i=7;i<13;i++){
		if (elements[i].checked) {
			textstring += elements[i].name + ' ';
            cookieString += "hobby"+i+"="+elements[i].name+"; ";
		}
	}

	// Write textstring to the textarea.
    setCookie(cookieString, 5000);

	document.forms['contestantForm'].output.value = textstring;
}



