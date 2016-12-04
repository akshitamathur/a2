//Only edit the following function if necessary:
function setCookie(cname,cvalue,exdays) {  // receives 3 values to set cookie
    var d = new Date();
    //d.setTime(d.getTime() + (exdays*24*60*60*1000));
    d.setTime(d.getTime() + (exdays*1000)); //sets in seconds, not days
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
//  "The parameters of the function above are the name of the cookie (cname), the value of the cookie (cvalue) [which is the information you are saving in the cookie], and the number of days[/minutes/seconds] until the cookie should expire (exdays).

// The function sets a cookie by adding together the cookiename, the cookie value, and the expires string." 
// (from http://www.w3schools.com/js/js_cookies.asp)


//function that starts a sequence of questions to learn more about the user.
function introduce(){
	//hide the initial divs
	var initial = document.getElementById("initialBox");
	initial.innerHTML = "";
	var initialAnchor = document.getElementById("anchor1");
	initialAnchor.innerHTML = "";
	var initialTv = document.getElementById("tv1");
	initialTv.innerHTML = "";

	//set the name
	var yourname = prompt("Lets start with your name shall we?");
	var nameValue = document.getElementById("nameValue");

	if (yourname === "" || yourname === " " || yourname === null){
		alert("Right, how could I forget - you're smarty pants!");
		yourname = "Smarty Pants";
		nameValue.innerHTML = "Ladies and gentlemen! \n Give a warm welcome to " + yourname;
	}else{
		nameValue.innerHTML = "Ladies and gentlemen! Please welcome " + yourname;
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
		hobbyValue.innerHTML = "Some people count sheep, " + name + " counts potatoes! The entire collection!";
	}else if(hobby == 3){
		alert("Oh really?");
		var other = prompt("Do tell...what do you like to do?");
		hobbyValue.innerHTML = "An interestingly enough " + name + " likes to " + other;
	}else{
		alert("Nothing?");
		var otherOption = prompt("You really don't like going anything? There has to be something you like to do...");

		if(otherOption === "" || otherOption === " " || otherOption === null){
		hobbyValue.innerHTML = "Actually... " + name + " doesn't like doing anything at all! Aren't you just fascinating?";
		}else{
		hobbyValue.innerHTML = "And interestingly enough " + name + " likes to " + otherOption;
		}
	}

	// bring the introduction div into view 
	var tvImage = document.getElementById("tv2");
	tvImage.style.visibility = "visible";

	var anchorImage = document.getElementById("anchor2");
	anchorImage.style.visibility = "visible";

}

//function to hide the introduction text and pull up the final question
function next(){
	var tvImage = document.getElementById("intro");
	tvImage.style.visibility = "hidden";

	var anchorImage = document.getElementById("anchor2");
	anchorImage.style.visibility = "hidden";

	var finalBox = document.getElementById("pictures");
	finalBox.style.visibility = "visible";


}

//function to assign cookie based on how smart the user thinks they are
function finalQuestion(confidenceLevel){
	
    
    if (confidenceLevel == "novice" || confidenceLevel == "confident" || confidenceLevel == "genius") {
		setCookie("confidence", confidenceLevel, 1000); 
		window.location.replace("ChooseTest.html"); 
		
    } else {
    	confidenceLevel = "genius";
    	setCookie("confidence", confidenceLevel, 1000);
    	window.location.replace("ChooseTest.html");
    }    

}

