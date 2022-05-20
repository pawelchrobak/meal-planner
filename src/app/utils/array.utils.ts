import Rhas from 'ramda/es/has';

export const arrayToObjByKey = <T>(
  array: T[],
  prop: string
): {
  [key in keyof string | number]: T;
} =>
  array.reduce((acc, item) => {
    if (Rhas(prop, item)) {
      const key = item[prop] as string | number;
      acc[key] = item;
    }
    return acc;
  }, {} as any);
