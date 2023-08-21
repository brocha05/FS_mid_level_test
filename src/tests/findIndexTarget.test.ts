import { findIndexTarget } from './../findIndexTarget';

describe('findIndexTarget method', () => {
  it('should return [0, 1] for input [2, 7, 11, 15] and target 9', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(findIndexTarget(nums, target)).toEqual([0, 1]);
  });

  it('should return [1, 2] for input [3, 2, 4] and target 6', () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(findIndexTarget(nums, target)).toEqual([1, 2]);
  });

  it('should return [0, 1] for input [3, 3] and target 6', () => {
    const nums = [3, 3];
    const target = 6;
    expect(findIndexTarget(nums, target)).toEqual([0, 1]);
  });

  it('should return [] for input [1, 2, 3] and target 7', () => {
    const nums = [1, 2, 3];
    const target = 7;
    expect(findIndexTarget(nums, target)).toEqual([]);
  });

  it('should throw error when array length < 2', () => {
    const nums = [1];
    const target = 7;
    expect(() => findIndexTarget(nums, target)).toThrowError('Array length must be >= 2');
  });
});