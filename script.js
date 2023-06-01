// 1. Store each input as a variable (there should be two input boxes - one for each answer) [x]
// 2. Store the button as a variable (there should be ONE button) [x]
// 3. Create a click handler [x]
// 4. Use the .value property to store user input [x]
// 5. Add console.log to test if the code is being stored [x]
// 6. Write a conditional statement with else-if to include all 4 possible results [x]
// 7. Write a compound conditional statement that uses input from both questions to provide the user with a result [x]
// 8. Write a sentence using string concatenation using the data stored in the user input variables [ ]
// 9. Add a next level feature! [ ]

let SubmitButton = document.querySelector(".SubmitButton");
let result = document.querySelector(".result");
let Endings = document.querySelector(".Endings");
let Whole = document.querySelector(".Whole");


SubmitButton.onclick=function(){
  let input1 = document.querySelector(".input1").value;
  let input2 = document.querySelector(".input2").value;

  if ((input1 === "Yes") && input2 === "Bruno Mars"){
    result.innerHTML="Because you Picked " + input1 + " and " + input2 + " You are a Dancing Dumpling!" 
    SubmitButton.style.display="none"
    Whole.style.display="none"
    Endings.style.display="block"
    Endings.src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" //The day of finishing, Mr dumbleton was not here so theres no pictures of him//
    
  }

  else if ((input1 === "No") && input2 === "Bruno Mars"){
     result.innerHTML="Because you Picked "  + input1 + " and " + input2 + " You are a Quiet Dumpling!"
    SubmitButton.style.display="none"
    Whole.style.display="none"
    Endings.style.display="block"
    Endings.src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" //The day of finishing, Mr dumbleton was not here so theres no pictures of him// 
  }

  else if ((input1 === "Yes") && input2 === "Miles Davis"){
     result.innerHTML="Because you Picked "  + input1 + " and " + input2 + " You are a Caring Dumpling!"
    SubmitButton.style.display="none"
    Whole.style.display="none"
    Endings.style.display="block"
    Endings.src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" //The day of finishing, Mr dumbleton was not here so theres no pictures of him//
  }

  else if ((input1 === "No") && input2 === "Miles Davis"){
     result.innerHTML="Because you Picked "  + input1 + " and " + input2 + " You are a Serious Dumpling!"
    SubmitButton.style.display="none"
    Whole.style.display="none"
    Endings.style.display="block"
    Endings.src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" //The day of finishing, Mr dumbleton was not here so theres no pictures of him//
  }

  else {
    result.innerHTML="You did not do the test properly, try again dodo!" 
  }
    
};