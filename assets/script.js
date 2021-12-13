// Assignment code here
// Goal to randomly generate a password that meets certain criteria //

// Password Requirements //
// click the button to generate a password//
// series of prompts for password criteria//
// select which criteria to include in the password //
// length of password at least 8 characters and no more than 128 characters//
// character type to include like lowercase, uppercase, numeric, and/or special characters //
// with every prompt answered input shoudld be validated and at least one character type should be selected //
// password generated when all prompts are answered //
// password is either displayed in an alert or wirtten to the page //



// Get references to the #generate element

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!@#$%^&*_+";


var finalPass = []; // final password generated
var userSel = []; // user selection criteria

function generatePassword(){
  //alert("clicked") checking to make sure the function is running

  var length = prompt("choose length between 8 and 128");
  var uCaseSel = confirm("Do you want uppercase?");
  if(uCaseSel){
    userSel.push(...upperCase)
  }

  var lowCaseSel = confirm("Do you want lowercase?");
  if(lowCaseSel){
    userSel.push(...lowerCase)
  }

  var numSel = confirm("Do you want numbers?");
  if(numSel){
    userSel.push(...numbers)
  }

  var specialSel = confirm("Do you want special characters?");
  if(specialSel){
    userSel.push(...specialChar)
  }

  //start of for loop//
  for (let i = 0; i < length; i++) {
    finalPass.push(userSel[Math.floor(Math.random() * userSel.length)]);

    console.log(finalPass.join('+'))
    
  }

  document.querySelector("#password").value = finalPass.join('');
}

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);