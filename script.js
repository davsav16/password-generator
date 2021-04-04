// Assignment code here
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    Symbol: getRandomSymbol
  }
  var promptOne = null;
  var promptTwo = null;
  var promptThree = null;
  var promptFour = null;
  var promptFive = null;
  
  function getRandomLower (){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
  }
   
  function getRandomUpper (){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
  }
  
  function getRandomNumber (){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
  }
  
  function getRandomSymbol (){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random()*symbols.length)]
  }
  
  
  var questionOne = function() {
    //ask player how long they would like their password to be
    promptOne = window.prompt('How long would you like your password to be? Please choose a number between 8 and 128');
    
    if (!promptOne) {
      window.alert('You need to provide a valid answer! Please select a number between 8 and 128.');
      return questionOne();
    }
  
    if (isNaN(promptOne)) {
        window.alert('You need to provide a valid answer! Please select a number between 8 and 128.');
        return questionOne();
    }
  
    if (promptOne < 8 || promptOne > 128){
      window.alert('You need to provide a valid answer! Please choose a number between 8 and 128.');
      return questionOne();
    }

    characterTypes();
  
  }
  
  var characterTypes = function() {
    promptTwo = window.confirm('Would you like to use lowercase letters?');
  
    promptThree = window.confirm('Would you like to use uppercase letters?');
  
    promptFour = window.confirm('Would you like to include numbers?');
  
    promptFive = window.confirm('Would you like to include symbols?');
   
    if (!promptTwo & !promptThree & !promptFour & !promptFive) {
      window.alert('You need to pick at lease one Character Type!')
      return characterTypes();
    } else {
      window.alert('Here is your password!');
      writePassword();
    }
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
        
    passwordText.value = password; 
  }

  function generatePassword() {
    var passwordNew = "";
    while (promptOne > passwordNew.length){
      if (promptTwo && promptOne > passwordNew.length){
        passwordNew = passwordNew + getRandomLower();
      }
      if (promptThree && promptOne > passwordNew.length){
        passwordNew = passwordNew + getRandomUpper();
      }
      if (promptFour && promptOne > passwordNew.length) {
        passwordNew = passwordNew + getRandomNumber();
      }
      if (promptFive && promptOne > passwordNew.length){
        passwordNew = passwordNew + getRandomSymbol();

      }
    }
    return passwordNew;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", questionOne);
  