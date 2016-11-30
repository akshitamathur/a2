window.onload = function opening(){
alert("The javascript is loading");

// var username = prompt("Please enter your name: ");
// if (username !== "" && username !== " " && username !== null){
// //ensure something reasonable is in username
// 	alert("Hi, " + username + " .");
// }else {  //if something reasonable is not in username, set username to something
// 	alert("Okay, Anonymous!");
// 	username = "Anonymous";
// }

// setCookie("theusersname", username, 30);

// // var gender

// // alert("Please Select Gender:");


// // window.location.replace("file:///Users/Akshita/Desktop/Fall%202016/DATT%201939/a2/ottawa.html");
// };



// //Only edit the following function if necessary:
// function setCookie(cname,cvalue,exdays) {  // receives 3 values to set cookie
//     var d = new Date();
//     //d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     d.setTime(d.getTime() + (exdays*1000)); //sets in seconds, not days
//     var expires = "expires=" + d.toGMTString();
//     document.cookie = cname+"="+cvalue+"; "+expires;
//      //go to next page
// }


/* "The parameters of the function above are the name of the cookie (cname), the value of the cookie (cvalue) [which is the information you are saving in the cookie], and the number of days[/minutes/seconds] until the cookie should expire (exdays).

The function sets a cookie by adding together the cookiename, the cookie value, and the expires string." 
(from http://www.w3schools.com/js/js_cookies.asp)
*/
};
function submitFunction()
{
	
	var textstring = '';

	for (i=0;i<2;i++) {
		var box = document.forms["contestantForm"].elements[i];
		if (!box.value) {
			alert("Remember to fill in your" + box.name + "!");
			return;
		}
		textstring += box.name + ": " + box.value + "\n";
	}

	// Get value of the 'Why' radio buttons.

	user_input = '';
	for (i=0;i<document.forms['contestantForm'].why.length;i++) {
		if (document.forms['contestantForm'].why[i].checked) {
			user_input = document.forms['contestantForm'].why[i].value;
		}
	}
	textstring += 'I am taking the test because ' + user_input + '\n';

	// Get value of the 'How' select box.

	user_input = document.contestantForm.birthday.options[document.contestantForm.birthday.selectedIndex].value;
	textstring += 'My favourite season is the ' + user_input + '\n';

	// See what checkboxes are checked. They are elements 9-12

	textstring += 'My hobbies include ';
	for (i=7;i<13;i++){
		if (document.contestantForm.elements[i].checked) {
			textstring += document.contestantForm.elements[i].name + ' ';
		}
	}

	// Write textstring to the textarea.

	document.forms['contestantForm'].output.value = textstring;
}



