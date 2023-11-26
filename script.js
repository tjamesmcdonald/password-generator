// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();


}
function generatePassword() {
  var passwordLength = prompt('How many characters?')
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var allowableCharacters = ''
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numerals = "1234567890"
  var symbols = " !@#$%^&*()~.,'+-/:<>=[]_`{}|"

//lowercase
  var allowLowercase = confirm('Include lowercase characters?')
  if (allowLowercase) {
   allowableCharacters += lowercase
  }

//uppercase
  var allowUppercase = confirm('Include uppercase characters?')
  if (allowUppercase) {
   allowableCharacters += uppercase
  }


//numerals
  var allownumerals = confirm('Include numbers?')
  if (allownumerals) {
   allowableCharacters += numerals
  }
//symbols
  var allowsymbols = confirm('Include symbols?')
  if (allowsymbols) {
    allowableCharacters += symbols
  }
// generate password
  var password = ''
  for (var i = 0; i < passwordLength; i++) {
   var randomIndex = Math.floor(Math.random() * allowableCharacters.length)
   var randomCharacter = allowableCharacters[randomIndex]
   password += randomCharacter
  }
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

