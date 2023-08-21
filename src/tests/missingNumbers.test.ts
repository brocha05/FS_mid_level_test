import { findMissingNumbers } from '../missingNumbers';

describe('findMissingNumbers method', () => {
  it('should return [5, 6] for [4, 3, 2, 7, 8, 2, 3, 1]', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([5, 6]);
  });

  it('should return [2] for [1, 1]', () => {
    const nums = [1, 1];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([2]);
  });

  it('should return [] if array es empty', () => {
    const nums: number[] = [];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([]);
  });

  it('should return [] for [1, 2, 3]', () => {
    const nums = [1, 2, 3];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([]);
  });

  it('should return [] if exists negative numbers', () => {
    const nums = [1, -2];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([]);
  });

  it('should return [] if num[i] is greater than n', () => {
    const nums = [1, 3];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([]);
  });

  it('should return [] if exist a number grater than 10000', () => {
    const nums = [1, 10002];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([]);
  });
});