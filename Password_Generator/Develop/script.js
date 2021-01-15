// Assignment Code
var contBtn = document.querySelector("#Continue");
var modal = document.getElementById("MyModal");
// validate the length input
function validateLength(len) {
  var n = Number(len);
  if (Number.isInteger(n) && n >= 8 && n <= 128) {
    return true;
  } else {
    return false;
  }
}
// generate the password meeting the criteriaa
function generatePassword() {
  var lengthInput = document.getElementById("lenInput").value;
  var ifLowercase = document.getElementById("Lowercase").checked;
  var ifUppercase = document.getElementById("Uppercase").checked;
  var ifNumeric = document.getElementById("Numeric").checked;
  var ifSpecial = document.getElementById("Special").checked;
  // Both length input requirement and character type requirement are met
  if (validateLength(lengthInput) && (ifLowercase || ifUppercase || ifNumeric || ifSpecial)) {
    modal.style.display = "none";
  } else { // otherwise
    while (!validateLength(lengthInput)) { // while length input is invalid, repeatedly prompt for the valid length input
        lengthInput = prompt("Please enter a valid length (note: the length should be at least 8 and no more than 128)!");
      }
      document.getElementById("lenInput").value = lengthInput;
      // if no character type is chosen
      while (!ifLowercase && !ifUppercase && !ifNumeric && !ifSpecial) {
          alert("Please choose at least one character type!");
          ifLowercase = confirm("Would you like to include lowercase letters?");
          ifUppercase = confirm("Would you like to include uppercase letters?");
          ifNumeric = confirm("Would you like to include numeric characters?");
          ifSpecial = confirm("Would you like to include special characters?");
      }
      document.getElementById("Lowercase").checked = ifLowercase;
      document.getElementById("Uppercase").checked = ifUppercase;
      document.getElementById("Numeric").checked = ifNumeric;
      document.getElementById("Special").checked = ifSpecial;
      document.getElementById("Continue").onclick = function() {
        modal.style.display = "none";
      }
  }
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const digitArray = "0123456789".split("");
  const specialCharArray = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
  var password = "";
  var index = 0;
  // build the password
  while (index < lengthInput) {
    if (ifLowercase) {
      var randAlphabetIndex = Math.floor((Math.random() * alphabetArray.length) + 1) - 1;
      password += alphabetArray[randAlphabetIndex];
      index++;
    }
    if (ifUppercase && index < lengthInput) {
      var randIndex = Math.floor((Math.random() * alphabetArray.length) + 1) - 1;
      password += alphabetArray[randIndex].toUpperCase();
      index++;
    }
    if (ifNumeric && index < lengthInput) {
      var randDigitIndex = Math.floor((Math.random() * digitArray.length) + 1) - 1;
      password += digitArray[randDigitIndex];
      index++;
    }
    if (ifSpecial && index < lengthInput) {
      var randSpecialIndex = Math.floor((Math.random() * specialCharArray.length) + 1) - 1;
      password += specialCharArray[randSpecialIndex];
      index++;
    }
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
contBtn.addEventListener("click", writePassword);
