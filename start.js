// <<<<<<< Updated upstream
window.onload = function opening(){
// alert("The javascript is loading");

};


// Only edit the following function if necessary:
 function setCookie(cookieString,exdays) {  // receives 3 values to set cookie
     var d = new Date();
     //d.setTime(d.getTime() + (exdays*24*60*60*1000));
     d.setTime(d.getTime() + (exdays*1000)); //sets in seconds, not days
     var expires = "expires=" + d.toGMTString();
     document.cookie = cookieString;
      //go to next page
 }



function introduce(){

	var initial = document.getElementById("initialBox");
	initial.innerHTML = "";
	var initialAnchor = document.getElementById("anchor1");
	initialAnchor.innerHTML = "";
	var initialTv = document.getElementById("tv1");
	initialTv.innerHTML = "";

	//set the name
	var name = prompt("Lets start with your name shall we?");
	var nameValue = document.getElementById("nameValue");

	if (name === "" || name === " " || name === null){
		alert("Right, how could I forget - you're smarty pants!");
		name = "Smarty Pants";
		nameValue.innerHTML = "Ladies and gentlemen! \n Give a warm welcome to " + name;
	}else{
		nameValue.innerHTML = "Ladies and gentlemen! Please welcome " + name;
		// setCookie("name", name, 30);
	}
	
	//set the reason why
	var why = prompt("What made you decide to take the test? (Enter number.)\n 1 - My mother made me. \n 2 - To prove I'm the best. \n 3 - It's a dare.");
	var whyValue = document.getElementById("whyValue");

	if (why == 1){
		whyValue.innerHTML = name + "'s joined us here today because good old mom wanted to cheer for her baby.";
	}else if (why == 2){
		whyValue.innerHTML = name + "'s joined us here today because there's  no one better.";
	}else if (why == 3){
		whyValue.innerHTML = name + "'s joined us here today because someone dared them - and " + name + "is brave enough to go through with it! That's commitment!";
	}else{
		alert("For a genius, you don't answer questions quite right...");
		whyValue.innerHTML = "They're not entirely sure why they are here, but they have a whole bunch of hobbies they like to participate in during their spare time.";
	}

	//set their hobbies
	var hobby = prompt("What do you like to do during your spare time? Any hobbies? (Enter number.)\n 1 - Coding like a pro. \n 2 - Counting my collection of potatoes. \n 3 - Other");
	var hobbyValue = document.getElementById("hobbyValue");


	if (hobby == 1){
		hobbyValue.innerHTML = "Their favourite hobby is...coding like a pro. If that doesn't tell you how smart they are - nothing will!";
	}else if(hobby == 2){
		hobbyValue.innerHTML = "Their favourite hobby is...coding like a pro. If that doesn't tell you how smart they are - nothing will!";
	}else if(hobby == 3){
		alert("Oh really?");
		var other = prompt("Do tell...what do you like to do?");
		hobbyValue.innerHTML = "An interestingly enough " + name + " likes to " + other;
	}else{
		alert("Nothing?");
		var otherOption = prompt("You really don't like going anything? There has to be something you like to do...");

		if(otherOption === "" || otherOption === " " || otherOption === null){
		hobbyValue.innerHTML = "Actually... " + name + "doesn't like doing anything at all! Isn't she just fascinating?";
		}else{
		hobbyValue.innerHTML = "And interestingly enough " + name + " likes to " + otherOption;
		}
	}



	var tvImage = document.getElementById("tv2");
	tvImage.style.visibility = "visible";

	var anchorImage = document.getElementById("anchor2");
	anchorImage.style.visibility = "visible";

}



// function finalQuestion(){
// 	var level = prompt("On a scale of 1 - 10, just how smart do you think you are?");

// 	if(level <= 3){
// 		setCookie("easyLevel", level, 30);
// 		window.location.replace("file:///Users/Akshita/Desktop/Fall%202016/DATT%201939/a2/easyChooseTest.html");
// 	}else if(level > 3 && level <= 7){
// 		setCookie("mediumLevel", level, 30);
// 		window.location.replace("file:///Users/Akshita/Desktop/Fall%202016/DATT%201939/a2/mediumChooseTest.html");
// 	}else if(level > 7 && level <= 10){
// 		setCookie("hardLevel", level, 30);
// 		window.location.replace("file:///Users/Akshita/Desktop/Fall%202016/DATT%201939/a2/hardChooseTest.html");
// 	}else if(level > 10){
// 		setCookie("hardestLevel", level, 30);
// 		window.location.replace("file:///Users/Akshita/Desktop/Fall%202016/DATT%201939/a2/hardChooseTest.html");
// 	}

// }




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
// window.location.replace("file:///Users/Akshita/Desktop/Fall%202016/DATT%201939/a2/ottawa.html");
// };



 //Only edit the following function if necessary:
//  function setCookie(cookieString,exdays) {  // receives 3 values to set cookie
//      var d = new Date();
//      //d.setTime(d.getTime() + (exdays*24*60*60*1000));
//      d.setTime(d.getTime() + (exdays*1000)); //sets in seconds, not days
//      var expires = "expires=" + d.toGMTString();
//      document.cookie = cookieString;
//       //go to next page
//  }
// // =======
// window.onload = function opening(){
// alert("The javascript is loading");

// var username = prompt("Please enter your name: ");
// if (username !== "" && username !== " " && username !== null){
// //ensure something reasonable is in username
// 	alert("Hi, " + username + " .");
// }else {  //if something reasonable is not in username, set username to something
// 	alert("Okay, Anonymous!");
// 	username = "Anonymous";
// }

// setCookie("theusersname", username, 30);



// window.location.replace("file:///Users/Akshita/GitHub/a2/chooseTest.html");



//Only edit the following function if necessary:
// function setCookie(cname,cvalue,exdays) {  // receives 3 values to set cookie
//     var d = new Date();
//     //d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     d.setTime(d.getTime() + (exdays*1000)); //sets in seconds, not days
//     var expires = "expires=" + d.toGMTString();
//     document.cookie = cname+"="+cvalue+"; "+expires;
//      //go to next page
// }

// >>>>>>> Stashed changes

// function startGame() {
// // <<<<<<< Updated upstream
//     submitFunction();
//     window.location.replace("begin.html");
// // =======
//     // location.href = "file:///Users/Akshita/GitHub/a2/chooseTest.html";
// // >>>>>>> Stashed changes
// }



//Validation function

// function submitFunction()
// {
	
// 	var textstring = '';
//     // var cookieString = '';
// 	for (i=0;i<2;i++) {
// 		var box = document.forms["contestantForm"].elements[i];
// 		if (!box.value) {
// 			alert("Remember to fill in your " + box.name + "!");
// 			return;
// 		}
// 		textstring += box.name + ": " + box.value + "\n";
//         // cookieString += box.name+"="+box.value+"; ";
// 	}

// 	// Get value of the 'Why' radio buttons.

// 	user_input = '';
//     var why = document.forms['contestantForm'].why;
// 	for (i=0;i<why.length;i++) {
// 		if (why[i].checked) {
// 			user_input = why[i].value;
//             // cookieString += "val"+i+"="+why[i].value+"; ";
// 		}
        
// 	}
// 	textstring += 'I am taking the test because ' + user_input + '\n';

// 	// Get value of the 'birthday' select box.

// 	user_input = document.contestantForm.birthday.options[document.contestantForm.birthday.selectedIndex].value;
// 	textstring += 'My favourite season is the ' + user_input + '\n';
//     // cookieString += "season="+user_input+"; ";

// 	// See what elements are checked. Between 7-12.

// 	textstring += 'My hobbies include ';
//     var elements = document.contestantForm.elements;
// 	for (i=7;i<13;i++){
// 		if (elements[i].checked) {
// 			textstring += elements[i].name + ' ';
//             // cookieString += "hobby"+i+"="+elements[i].name+"; ";
// 		}
// 	}

// 	// Write textstring to the textarea.
//     // setCookie(cookieString, 5000);

// 	document.forms['contestantForm'].output.value = textstring;
// }






