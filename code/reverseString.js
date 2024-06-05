export { reverseString };

function reverseString(word) {
  if (typeof word !== 'string') {
    throw new TypeError('Expecting a string');
  }

  return word.split('').reverse().join('');
}
