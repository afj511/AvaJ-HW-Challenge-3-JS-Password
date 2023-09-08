// Assignment Code
var generateBtn = document.querySelector("#generate");
// Password characters
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberKeys = "1234567890";
var specialKeys = "!@#$%^&*()_+{}:|<>?/.,;'[]`-";
var passwordLength;
var uppercaseYes;
var numberYes;
var specialYes;
//Functions that ask the user what their preferred password requirements are.
function length() {
  var passwordLength = prompt ("How long would you like your password to be? (Choose between 8-128 characters)");

  if (passwordLength<8){
    alert("Your password must be between 8-128 characters long!");
    length();
  }else if (passwordLength>128){
    alert("Your password must be between 8-128 characters long!")
    length();
  }else if (isNaN(passwordLength)){
    alert("Your password must be between 8-128 characters long!")
  }else{
    alert("Next select the characters you would like in your password.")
  }
  return passwordLength;
  }

   //Function that asks the user if they would like to use uppercase.
   function uppercase() {
    uppercaseYes = prompt("Would you like to add uppercase to your password? \n(Yes or No)");  
    uppercaseYes = uppercaseYes.toLowerCase();
    
    if (uppercaseYes === null || uppercaseYes === ""){
      alert("Yes or No?")
      uppercase();
    }else if (uppercaseYes === "yes"){
      uppercaseYes = true;
      return uppercaseYes

    }else if (uppercaseYes === "no"){
      uppercaseYes = false;
      return uppercase;

    }else {
      alert("Yes or No?")
    }
    return uppercaseYes
    
   }
   
  //Function that ask the user if they would like numbers or not.
  function numbers() {
    numberYes = prompt("Would you like to add numbers to your password? \n(Yes or No)");  
    numberYes = numberYes.toLowerCase();
    
    if (numberYes === null || numberYes === ""){
      alert("Yes or No?")
      numbers();
    }else if (numberYes === "yes"){
      numberYes = true;
      return numberYes

    }else if (numberYes === "no"){
      numberYes = false;
      return numberYes;

    }else {
      alert("Yes or No?")
    }
    return numberYes

   }
   
   //Function that ask the user if they would like special characters or not.
   function special() {
    specialKeys = prompt("Would you like to add special characters to your password? \n(Yes or No)");  
    specialYes = specialYes.toLowerCase();
    
    if (specialYes === null || specialYes === ""){
      alert("Yes or No?")
      special();
    }else if (specialYes === "yes"){
      specialYes = true;
      return specialYes

    }else if (specialYes === "no"){
      specialYes = false;
      return special;

    }else {
      alert("Yes or No?")
    }
    return specialYes
    
   }

   //Function that gathers all the functions in order to generate password.
   function generatePassword(){
    length();
    console.log(passwordLength);
    numbers();
    console.log(numberYes);
    special();
    console.log(specialYes);
    uppercase();
    console.log(uppercaseYes);

    var characters = lowercaseLetters;
    var password ="";
    
    if (uppercaseYes && numberYes && specialYes){
      characters += uppercaseLetters + numberKeys + specialKeys;

    }else if (uppercaseYes && numberYes){
      characters += uppercaseLetters + numberKeys;

    }else if(uppercaseYes && specialYes){
      characters += uppercaseLetters + specialKeys;

    }else if (numberYes && specialYes){
      characters += numberKeys + specialKeys;

    }else if(uppercaseYes){
      characters += uppercaseLetters;
      
    }else if (numberYes){
      characters += numberKeys;

    }else if(specialYes){
      characters += specialKeys;
      
    }else{
      characters === lowercaseLetters;
    }
    
    for(var i=0; i<passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return password;
   }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
