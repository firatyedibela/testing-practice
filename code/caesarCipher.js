export { caesarCipher };

function caesarCipher(word, factor) {
  factor = factor % 26;
  // Convert string into array
  const charArray = word.split('');

  // Call convertLetter() for each letter in the array
  charArray.forEach((char, index) => {
    if (isLetter(char)) {
      charArray[index] = convertLetter(char, factor);
    }
  });

  // Convert the array back into a string
  return charArray.join('');
}

function isLetter(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function convertLetter(letter, factor) {
  // Find new ASCII position and return the corresponding letter
  const pos = letter.charCodeAt(0);
  let newPos = pos + factor;
  // If uppercase, wrap when it goes beyond 90
  if (pos <= 90 && pos >= 65) {
    if (newPos > 90) {
      newPos -= 26;
    }
  }
  // If lowercase, wrap when it goes beyond 122
  else if (pos <= 122 && pos >= 97) {
    if (newPos > 122) {
      newPos -= 26;
    }
  }
  return String.fromCharCode(newPos);
}
