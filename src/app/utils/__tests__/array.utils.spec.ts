import { arrayToObjByKey } from '../array.utils';

describe('array utils', () => {
  describe('arrayToObjByKey', () => {
    it('should return object from array by prop', () => {
      const array = [
        { a: 12, b: '0propB' },
        { a: 34, b: '1propB' },
      ];

      expect(arrayToObjByKey(array, 'a')).toEqual({
        12: array[0],
        34: array[1],
      } as any);
    });
  });
});
