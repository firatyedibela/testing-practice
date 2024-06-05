import { reverseString } from '../code/reverseString.js';

describe('reverseString', () => {
  it('should return a string', () => {
    expect(typeof reverseString('test')).toBe('string');
  });

  it('should return an empty string if the input is an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('should return the reversed version of the given string', () => {
    let input = 'hello';
    let actual = reverseString(input);
    let expected = 'olleh';

    expect(actual).toBe(expected);

    // Test with different input
    input = 'asd';
    actual = reverseString(input);
    expected = 'dsa';

    expect(actual).toBe(expected);
  });

  it('should throw type error if the input is not a string', () => {
    expect(() => reverseString(null)).toThrow(TypeError);
    expect(() => reverseString(NaN)).toThrow(TypeError);
    expect(() => reverseString(123)).toThrow(TypeError);
  });
});
