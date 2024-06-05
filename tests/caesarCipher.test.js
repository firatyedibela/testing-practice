import { caesarCipher } from '../code/caesarCipher';

describe('caesar cipher', () => {
  it('take a string and return its ciphered version', () => {
    const inputs = [
      {
        word: 'hello',
        factor: 1,
        expected: 'ifmmp',
      },
      {
        word: 'abc',
        factor: 10,
        expected: 'klm',
      },
      {
        word: 'odin',
        factor: 2,
        expected: 'qfkp',
      },
    ];

    inputs.forEach((test) => {
      const actual = caesarCipher(test.word, test.factor);
      expect(actual).toBe(test.expected);
    });
  });

  it('should not go beyond letters when factor => 26', () => {
    expect(caesarCipher('a', 26)).toBe('a');
    expect(caesarCipher('A', 26)).toBe('A');
    expect(caesarCipher('b', 34234)).toBe('t');
  });

  it('should wrap when new position is out of letter range', () => {
    expect(caesarCipher('z', 1)).toBe('a');
    expect(caesarCipher('zxyk', 15)).toBe('omnz');
    expect(caesarCipher('ZXYK', 5)).toBe('ECDP');
  });

  it('should preserve case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  it('should return non-letter characters as is', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});
