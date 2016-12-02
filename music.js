window.onload = function opening(){
// alert("The javascript is loading");
};

var count = 1;
var answers = 5;
var totalScore = 0;


function start(){
	// delete description
	// count++;
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


for(var i = 0; i < result.length; i++) {
   
   if(result[i].checked == true) {
       var answer = result[i].value;
       alert(result[i].checked);

       points.innerHTML = totalScore + 10;
   		
		deleteQuestion.innerHTML = " ";
		deleteAnswer.innerHTML = " ";

       alert(answer);
       count++;
       question();

   }else if(result[i].checked === false){
   		alert("HA! That's wrong!");
   		var answer = result[i].value;
		deleteQuestion.innerHTML = " ";
		deleteAnswer.innerHTML = " ";
		count++;
		question();
		alert(answer);
		// alert(totalScore);

   }else if(result[i].value == null){
   		
   		alert("Your score is " + totalScore);
   }



 	

 }
	

	// document.getElementById("answer" + count).style.visibility = "hidden";

// console.log("count before: " + count);
// count++;
console.log("count after: " + count);




}


// function finalResults(){
// 	alert("it is inside finalResults");
// 	var deleteQuestion = document.getElementById("question" + count);
// 	var deleteAnswer = document.getElementById("answer" + count);
// 	deleteQuestion.innerHTML = " ";
// 	deleteAnswer.innerHTML = " ";

	
// 	var box = document.createElement("div");
// 	box.className = "questionBox";

// 	var para = document.createElement("p");
// 	para.className = "questionBoxText";

//     var text = document.createTextNode("How are you feeling? Your finished with a whopping " + totalScore + "!");
//     para.appendChild(text);

//     box.appendChild(para);

//     document.getElementById("results").appendChild(box);
//     document.getElementById("results").style.visibility = "visible";

    


// }