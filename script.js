//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var johnbScore = 0;
var jjScore = 0;
var kiaraScore = 0;
var sarahScore = 0;


//variable to restart the quiz
var refresh = document.getElementById("refresh");

//#TODO: Use the DOM to create variables for the first quiz question.

// variables for answer choice buttons for question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// variables for answer choice buttons for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// variables for answer choice buttons for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");


// new variable called RESULT
var result = document.getElementById("result");


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", sarah);
q1a2.addEventListener("click", johnb);
q1a3.addEventListener("click", kiara);
q1a4.addEventListener("click", jj);

q2a1.addEventListener("click", sarah);
q2a2.addEventListener("click", jj);
q2a3.addEventListener("click", kiara);
q2a4.addEventListener("click", johnb);

q3a1.addEventListener("click", kiara);
q3a2.addEventListener("click", johnb);
q3a3.addEventListener("click", jj);
q3a4.addEventListener("click", sarah);

q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);
q1a3.addEventListener("click", disableBtn1);
q1a4.addEventListener("click", disableBtn1);

q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);
q2a3.addEventListener("click", disableBtn2);
q2a4.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);
q3a3.addEventListener("click", disableBtn3);
q3a4.addEventListener("click", disableBtn3);

refresh.addEventListener("click", restart);


//#TODO: Define quiz functions here
function johnb(){
  johnbScore += 1;
  questionCount += 1;
  
  //alert("One point to John B!");
  
  if (questionCount >= 3){
      updateResult();
  }
}

function jj(){
  jjScore += 1;
  questionCount += 1;
  
  //alert("One point to JJ!");i
  if (questionCount >= 3){
      updateResult();
  }
}

function kiara(){
  kiaraScore += 1;
  questionCount += 1;
  
  //alert("One point to Kiara!");
  if (questionCount >= 3){
      updateResult();
  }
}

function sarah(){
  sarahScore += 1;
  questionCount += 1;
  
  //alert("One point to Sarah!");
  if (questionCount >= 3){
      updateResult();
  }
}

//update result
function updateResult(){
 if (johnbScore >= 2){
         result.innerHTML = "You are John B!";
 }
 else if(jjScore >=2){
        result.innerHTML = "You are JJ!";
 }
 else if(kiaraScore >=2){
    result.innerHTML = "You are Kiara!";
 }
 else if (sarahScore>= 2){
    result.innerHTML = "You are Sarah!";
 }
 else{
    result.innerHTML = "You are a mix! Hmm.. The Sorting Hat is confused. Try again later.";
 }
}



//Function that disables all the answer buttons for a given question//
function disableBtn1(){
  document.getElementById ("q1a1") .disabled = true;
  document.getElementById ("q1a2") .disabled = true;
  document.getElementById ("q1a3") .disabled = true;
  document.getElementById ("q1a4") .disabled = true;
}
  function disableBtn2(){
  document.getElementById ("q2a1") .disabled = true;
  document.getElementById ("q2a2") .disabled = true;
  document.getElementById ("q2a3") .disabled = true;
  document.getElementById ("q2a4") .disabled = true;
  }
  function disableBtn3(){
  document.getElementById ("q3a1") .disabled = true;
  document.getElementById ("q3a2") .disabled = true;
  document.getElementById ("q3a3") .disabled = true;
  document.getElementById ("q3a4") .disabled = true;
  }
//Function to restart Personality Quiz after it has ended//
function restart(){
  result.innerHTML = "Your result is...";
  questionCount = 0;
  johnbScore = 0;
  jjScore = 0;
  kiaraScore = 0;
  sarahScore = 0;
  document.getElementById ("q1a1") .disabled = false;
  document.getElementById ("q1a2") .disabled = false;
  document.getElementById ("q1a3") .disabled = false;
  document.getElementById ("q1a4") .disabled = false;
  document.getElementById ("q2a1") .disabled = false;
  document.getElementById ("q2a2") .disabled = false;
  document.getElementById ("q2a3") .disabled = false;
  document.getElementById ("q2a4") .disabled = false;
  document.getElementById ("q3a1") .disabled = false;
  document.getElementById ("q3a2") .disabled = false;
  document.getElementById ("q3a3") .disabled = false;
  document.getElementById ("q3a4") .disabled = false;
}