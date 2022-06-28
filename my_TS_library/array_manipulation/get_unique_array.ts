export const uniqueByKey = <T, K extends keyof T> (arr: T[], uniId: K): T[] => {
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
};

/**
 *@desc
 *@author Richard Wang
 *@date 2022/6/18 16:32
 */

/**
 * Delete elements from the first argument(objectArray1) if its key value equals to the second(objectArray2's key value);
 * @notice The typeof comparableKeyOfArray1 must equal to the typeof comparableKeyOfArray1;
 *         And the objectArray1 and objectArray2 MUST be Object Arrays;
 * @param objectArray1
 * @param objectArray2
 * @param comparableKeyOfArray1
 * @param comparableKeyOfArray2
 * @return newArr typeof objectArray1
 * @example
 *          removeElementIfKeyValueInSecondArray([{id: '1', lastName: 'Tom'},{id: '2', lastName: 'Jerry'}],
 *          [{identity: '2', firstName: 'Jack'},{identity: '3', firstName: 'Jerry'}],"id","identity");
 */
export const removeElementIfKeyValueInSecondArray = <U, T> (
  objectArray1: Array<U>,
  objectArray2: Array<T>,
  comparableKeyOfArray1: keyof U,
  comparableKeyOfArray2: keyof T
): Array<U> => {
  let newArr: Array<U> = [...objectArray1];
  newArr.forEach((item: U, index) =>
    objectArray2.some((member: T) =>
      item[comparableKeyOfArray1] === member[comparableKeyOfArray2] as any) && newArr.splice(index, 1));
  return newArr;
};

export const filterKeyValueNotInObjectArr = <U, T> (
  objectArray1: U[],
  objectArray2: T[],
  keyOfArray1: keyof U,
  keyOfArray2: keyof T
): U[] => (
  objectArray1.filter((item: U) =>
    !objectArray2.some((member: T) => member[keyOfArray2] === item[keyOfArray1] as any))
);

export const filterKeyValueNotInArr = <U> (
  objectArray: U[],
  strOrNumArray: number[] | string[],
  keyOfArray: keyof U,
): U[] => (
  objectArray.filter((item: U) =>
    !(strOrNumArray.includes(item[keyOfArray] as never)))
);

