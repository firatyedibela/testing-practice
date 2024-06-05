import { analyzeArray } from '../code/analyzeArray';

describe('analyzeArray', () => {
  it('should return an object', () => {
    expect(typeof analyzeArray([1, 2])).toBe('object');
  });

  const input = [1, 8, 3, 4, 2, 6];
  const actual = analyzeArray(input);

  describe('average', () => {
    it('should return the average of the given number array', () => {
      expect(actual.average).toBe(4);
    });
  });

  describe('min', () => {
    it('should return the smallest number', () => {
      expect(actual.min).toBe(1);
    });
  });

  describe('max', () => {
    it('should return the biggest number', () => {
      expect(actual.max).toBe(8);
    });
  });

  describe('length', () => {
    it('should return the length of the array', () => {
      expect(actual.length).toBe(6);
    });
  });
});
