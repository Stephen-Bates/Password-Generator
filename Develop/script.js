// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare and initialize different sets of characters for user to chose from
const upperCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCharset = 'abcdefghijklmnopqrstuvwxyz';
const numericCharset = '0123456789';
const specialCharset = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

// Minimum and maximum character lengths allowed
const minLen = 8;
const maxLen = 128;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // Declare and initialize return variable
  var password = '';

  // Declare and initialize character pool to pull from
  var charSet = '';
  
  // Declare variable to track desired password length
  var passLen;

  while(true){
    // Request desired length of password from user
    passLen = window.prompt("Password Length:");
    
    // Terminate function if user presses cancel
    if(passLen === null){
      //return an empty string
      return "";
    }

    // Proceed with function
    // IF{
    // passLen is a number
    // AND
    // passLen is greater than or equal to minLen
    // AND
    // passLen is less than or equal to maxLen}
    if(Number(passLen) !== NaN && passLen >= minLen && passLen <= maxLen){
      break;
    }

    // Alert user input was invalid and retry request
    window.alert(`Please enter a positive whole number between ${minLen} and ${maxLen}.`)
  }
  // Confirm with user to use upper case characters
  if(window.confirm("Include upper case characters?")){
    // Add upper case characters to pool of characters
    charSet += upperCharset;
  }

  // Confirm with user to use lower case characters  
  if(window.confirm("Include lower case characters?")){
    // Add lower case characters to pool of characters
    charSet += lowerCharset;
  }

  // Confirm with user to use numeric characters  
  if(window.confirm("Include numeric characters?")){
    // Add numeric characters to pool of characters
    charSet += numericCharset;
  }
  // Confirm with user to use special characters
  if(window.confirm("Include special characters?")){
    // Add special characters to pool of characters
    charSet += specialCharset;
  }

  // While return variable has less characters than desired
  while (password.length < passLen && charSet.length > 0)
  {
    // Add a character at random index in the pool of characters to the return variable
    password += charSet.charAt(Math.floor(Math.random()*charSet.length));
  }
  
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
