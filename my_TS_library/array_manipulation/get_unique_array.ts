


export const makeArrayUnique=<T,K extends keyof T>(arr:T[], uniId:K):T[]=>{
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}

/**
 *@desc
 *@author Richard Wang
 *@date 2022/6/18 16:32
 */

/**
 * Delete elements from the first argument(ObjectArray1) if its key value equals to the second(ObjectArray2's key value);
 * @notice The typeof comparableKeyOfArray1 must equal to the typeof comparableKeyOfArray1;
 *         And the ObjectArray1 and ObjectArray2 MUST be Object Arrays;
 * @param ObjectArray1
 * @param ObjectArray2
 * @param comparableKeyOfArray1
 * @param comparableKeyOfArray2
 * @return newArr typeof ObjectArray1
 * @example
 *          deleteElementIfKeyValueInSecondArray([{id: '1', lastName: 'Tom'},{id: '2', lastName: 'Jerry'}],
 *          [{identity: '2', firstName: 'Jack'},{identity: '3', firstName: 'Jerry'}],"id","identity");
 */
export const removeElementIfKeyValueInSecondArray = <U, T> (
  ObjectArray1: Array<U>,
  ObjectArray2: Array<T>,
  comparableKeyOfArray1: keyof U,
  comparableKeyOfArray2: keyof T): Array<U> =>
{
  let newArr: Array<U> = [];
  ObjectArray1.forEach((item: U) => {
    const checked: boolean = ObjectArray2.every((member: T) => {
      const value1 = item[comparableKeyOfArray1] as any;
      const value2 = member[comparableKeyOfArray2] as any;
      if (typeof value1 === typeof value2) {
        return value1 !== value2;
      } else {
        return false;
      }
    });
    checked && newArr.push(item);
  });
  return newArr;
};

