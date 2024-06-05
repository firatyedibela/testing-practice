import { capitalize } from '../code/capitalize.js';

describe('capitalize', () => {
  it('should exist', () => {
    expect(capitalize).toBeDefined();
  });

  it('should capitalize the first letter of the given word', () => {
    // Test 1
    let input = 'hello';
    let actual = capitalize(input);
    let expected = 'Hello';

    expect(actual).toBe(expected);

    // Test 2 with different input
    input = 'odin';
    actual = capitalize(input);
    expected = 'Odin';

    expect(actual).toBe(expected);

    // Test 3 with different input
    input = 'harvard';
    actual = capitalize(input);
    expected = 'Harvard';

    expect(actual).toBe(expected);

    // Test 4 with different input
    input = 'webdev';
    actual = capitalize(input);
    expected = 'Webdev';

    expect(actual).toBe(expected);
  });

  it('should return an empty string if the input is an empty string', () => {
    let input = '';
    let actual = capitalize(input);
    let expected = '';

    expect(actual).toBe(expected);
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => capitalize(null)).toThrow(TypeError);
    expect(() => capitalize(NaN)).toThrow(TypeError);
    expect(() => capitalize(123)).toThrow(TypeError);
  });
});
