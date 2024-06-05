export { capitalize };

function capitalize(word) {
  if (typeof word !== 'string') {
    throw new TypeError('Expecting a string');
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}
