<h1 style="text-align: center">Get Unique Array</h1>

## 1. One Simple Array

1. With One Type

```typescript
const arr = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
const uniqueArr = Array.from(new Set(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

2. With Two Or More Types

```typescript
const arr = [1, '2', '3', true, false, true, 3, 3.1, 3.1, 4, 5, 6, 7, 8, 9];
const uniqueArr = Array.from(new Set(arr)); // [1, "2", "3", true, false, 3, 3.1, 4, 5, 6, 7, 8, 9]
```

## 2. Two Or More Simple Array At The Same Time
```typescript
const arr1 = [1, '2', '3', true, false, true, 3, 3.1, 3.1, 4, 5, 6, 7, 8, 9];
const arr2 = [1, 2, 3, true, true, 3, 3.1, 3.2, 4, 5, 6, 7, 8, 9];
const uniqueArr = Array.from(new Set(arr1.concat(arr2))); // [1, "2", "3", true, false, 3, 3.1, 4, 5, 6, 7, 8, 9, 2, 3.2]
```  
## 3. One Object Array With Same Construct

1. use filter and Map 🌟🌟🌟🌟🌟
```typescript
const uniqueArrBy=<T,K extends keyof T>(arr:T[], uniId:K):T[]=>{
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
```
2. use reduce 🌟🌟🌟🌟
```typescript
const uniqueArrBy=<T,K extends keyof T>(arr:T[], uniId:K)=>{
  return arr.reduce((accum,item) => {
  if(accum.findIndex(member=>member[uniId] ===item[uniId] )===-1){accum.push(item)}
  return accum;
  },[] as T[])
}
```
## 4. Two Or More Object Array At The Same Time
1. use forEach and every
```typescript
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
## 5. 