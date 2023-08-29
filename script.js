// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // variable to store length of password from user input
  let length = parseInt(
    prompt ("How many characters would you like your password to contain?")
  )

  if(isNaN(length) === true) {

  }

  if(length < 10){
    alert('Password must be 10 or more characters');
    return;
  }

  if(length > 64){
    alert('Password must be less than 64 characters');
    return;
  }

  let hasSpecialCharacters = confirm(
    "Click OK to confirm inclsuion of special characters"
  )

  let hasUpperCasedCharacters = confirm(
    "Click OK to confirm inclsuion of uppercase characters"
  )

  let hasLowerCasedCharacters = confirm(
    "Click OK to confirm inclsuion of lowercase characters"
  )

  let hasNumericCharacters = confirm(
    "Click OK to confirm inclsuion of numeric characters"
  )

  if(hasLowerCasedCharacters === false &&
     hasUpperCasedCharacters === false &&
     hasSpecialCharacters === false &&
     hasNumericCharacters === false ) {
      alert ('Must select atleast one character type');
      return;
     }



  let passwordOptions = {
    length: length,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,

  }   





  return passwordOptions;








}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex];


  return randomElement;

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log (options);
let result=[]





let possibleCharacters = []



let guaranteedCharacters = []
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat (upperCasedCharacters);
 // guaranteedCharacter.push  (getRandom(upperCasedCharacters))
}

  if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat (specialCharacters);
  guaranteedCharacters.push  (getRandom(specialCharacters))
}

if (options.hasLowerCasedCharecters) {
  possibleCharacters = possibleCharacters.concat (lowerCasedCharacters);
guaranteedCharacters.push  (getRandom(lowerCasedCharacters))}

if (options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat (numericCharacters);
  guaranteedCharacters.push  (getRandom(numericCharacters))}
 
  console.log(possibleCharacters);


for (let index =0; index < options.length; index++ ){
 var generated = getRandom(possibleCharacters);
  console.log(generated);
  result.push(generated);
}
//for (let index = 0; index < guaranteedCharacters.length; index++){
  //result[index] = guaranteedCharacters[index]}

console.log(result);

return result.join("")



}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);