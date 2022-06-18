<h1 style="text-align: center">从一个对象数组中过滤掉key值存在于第二个对象数组中的元素</h1>

### 我写了一个根据key值去重的工具函数，入参为两个对象数组、和相对应可比较的两个key（一般以string的形式作为入参）；前一个key来自于第一个对象数组的对象属性，后一个key来自于第二个对象数组的对象属性;返回值类型是第一个对象数组的类型；

### 解决的需求：有两个对象数组，两个数组的对象构造可能是不一样的——即是对象的字段名和类型都可能不一样，但是开发者可能需要根据第二个数组来过滤第一个数组，依据是如果第一个数组的某个字段的值跟第二个数组的某个字段值相同（字段名不一定跟第一个相同），那就排除掉；常用于搜索另一个表，但是只显示不存在于当前表的数据。
   
### 如果大家写出了更方便的函数，也可以分享出来；另外：关于对象数组去重，除了我说的这种的需求之外，还有很多种应用场景，欢迎大家讨论。

```typescript
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
```