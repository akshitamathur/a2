window.onload = function opening(){
// alert("The javascript is loading");
};

var count = 1;
var answers = 5;
var totalScore = 0;


function start(){
	//hiding elements - solution(s) provided by Ali Sharabiani (3rd answer) and Ben Osborne (4th answer)
	//http://stackoverflow.com/questions/6242976/javascript-hide-show-element

	var description = document.getElementById("description");
	description.innerHTML = " ";
	question();
}

function question(){
	// shows score
	document.getElementById("score").style.visibility = "visible";

	// shows question
	document.getElementById("question" + count).style.visibility = "visible";

    // shows answer options
	document.getElementById("answer" + count).style.visibility = "visible";
}


function check(){
var result = document.getElementsByName("answer" + count);

var points = document.getElementById("score");

var deleteQuestion = document.getElementById("question" + count);

var deleteAnswer = document.getElementById("answer" + count);

//how to calculate value of radio button
//http://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button

//keeping score
//http://stackoverflow.com/questions/10642671/javascript-increment-by-more-than-1

for(var i = 0; i < result.length; i++) {
   
   if(result[i].checked === true){
       var answer = result[i].value;
       alert(answer);

       if(answer == "yes"){
		totalScore += 10;
       	points.innerHTML = totalScore;
		deleteQuestion.innerHTML = " ";
		deleteAnswer.innerHTML = " ";
       	count++;
       	question();
   }else if(answer == "no"){
   		totalScore -= 10;
   		points.innerHTML = totalScore;
		deleteQuestion.innerHTML = " ";
		deleteAnswer.innerHTML = " ";
       count++;
       question();
   }

}else if(result[i].checked === null){
 	alert("Don't know the answer? Take a guess!");
 }

}

if(count == 6){
	finalResults();
}else{
	question();
}
	
}


function finalResults(){
	alert("it is inside finalResults");
	var deleteQuestion = document.getElementById("question" + count);
	var deleteAnswer = document.getElementById("answer" + count);
	var score = document.getElementById("score");
	deleteQuestion.innerHTML = " ";
	deleteAnswer.innerHTML = " ";
	score.style.visibility = "hidden";

	
// creating elements 
//http://www.w3schools.com/jsref/met_document_createelement.asp

	var box = document.createElement("div");
	box.className = "resultsBox";

	var para = document.createElement("p");
	para.className = "resultsBoxText";

    var textline1 = document.createTextNode("How are you feeling?");
    para.appendChild(textline1);

    var space = document.createElement("br");
    para.appendChild(space);
    var space2 = document.createElement("br");
    para.appendChild(space2);

    var textline2 = document.createTextNode("Does your brain hurt?");
    para.appendChild(textline2);

    var space3 = document.createElement("br");
    para.appendChild(space3);

    var textline3 = document.createTextNode("You finished with a whopping");
    para.appendChild(textline3);

    var space4 = document.createElement("br");
    para.appendChild(space4);
    var space5 = document.createElement("br");
    para.appendChild(space5);

    var textline4 = document.createTextNode(totalScore + " points!");
    para.appendChild(textline4);

    box.appendChild(para);

    document.getElementById("results").appendChild(box);
    document.getElementById("results").style.visibility = "visible";

}

function nextPage(){
	setCookie("socialScore", totalScore, 80);
	window.location.replace("file:///Users/Akshita/GitHub/a2/chooseTest3.html");
}




//Only edit the following function if necessary:
function setCookie(cname,cvalue,exdays) {  // receives 3 values to set cookie
    var d = new Date();
    //d.setTime(d.getTime() + (exdays*24*60*60*1000));
    d.setTime(d.getTime() + (exdays*1000)); //sets in seconds, not days
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}