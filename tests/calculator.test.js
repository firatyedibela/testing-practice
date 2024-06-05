import { Calculator } from '../code/calculator';

describe('calculator', () => {
  it('should be an object', () => {
    expect(typeof Calculator).toBe('object');
  });

  describe('add method', () => {
    it('should be a function', () => {
      expect(typeof Calculator.add).toBe('function');
    });

    it('should return the sum of given numbers', () => {
      const input = [
        {
          a: 1,
          b: 2,
          expected: 3,
        },
        {
          a: 5,
          b: 10,
          expected: 15,
        },
        {
          a: 0,
          b: 5,
          expected: 5,
        },
      ];

      input.forEach((test) => {
        let actual = Calculator.add(test.a, test.b);
        expect(actual).toBe(test.expected);
      });
    });
  });

  describe('subtract method', () => {
    it('should be a function', () => {
      expect(typeof Calculator.subtract).toBe('function');
    });

    it('should return the subtraction of given numbers', () => {
      const input = [
        {
          a: 5,
          b: 2,
          expected: 3,
        },
        {
          a: 10,
          b: 5,
          expected: 5,
        },
        {
          a: 4,
          b: 9,
          expected: -5,
        },
      ];

      input.forEach((test) => {
        let actual = Calculator.subtract(test.a, test.b);
        expect(actual).toBe(test.expected);
      });
    });
  });

  describe('multiply method', () => {
    it('should be a function', () => {
      expect(typeof Calculator.multiply).toBe('function');
    });

    it('should return the product of the given numbers', () => {
      const input = [
        {
          a: 2,
          b: 2,
          expected: 4,
        },
        {
          a: 5,
          b: 10,
          expected: 50,
        },
        {
          a: 345345,
          b: 0,
          expected: 0,
        },
      ];

      input.forEach((test) => {
        const actual = Calculator.multiply(test.a, test.b);
        expect(actual).toBe(test.expected);
      });
    });
  });

  describe('divide method', () => {
    it('should be a function', () => {
      expect(typeof Calculator.divide).toBe('function');
    });

    it('should return the division of the given numbers', () => {
      const input = [
        {
          a: 2,
          b: 2,
          expected: 1,
        },
        {
          a: 5,
          b: 10,
          expected: 0.5,
        },
        {
          a: 0,
          b: 345,
          expected: 0,
        },
      ];

      input.forEach((test) => {
        const actual = Calculator.divide(test.a, test.b);
        expect(actual).toBe(test.expected);
      });
    });

    it('should throw range error if the divisor is zero', () => {
      expect(() => Calculator.divide(5, 0)).toThrow(RangeError);
    });
  });
});
