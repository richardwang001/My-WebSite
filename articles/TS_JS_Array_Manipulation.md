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
## 4. Two Object Array Based On Key
1. use forEach and some
```typescript
export const removeElementIfKeyValueInSecondArray = <U, T> (
  objectArray1: Array<U>,
  objectArray2: Array<T>,
  comparableKeyOfArray1: keyof U,
  comparableKeyOfArray2: keyof T
): Array<U> => {
  let newArr: Array<U> = [...objectArray1];
  newArr.forEach((item: U,index) =>
    objectArray2.some((member: T) =>
      item[comparableKeyOfArray1] === member[comparableKeyOfArray2] as any) && newArr.splice(index,1));
  return newArr;
};
```
2. use filter and some
```typescript
export const filterKeyValueNotInObjectArr = <U, T> (
  objectArray1: U[],
  objectArray2: T[],
  keyOfArray1: keyof U,
  keyOfArray2: keyof T
): U[] => (
  objectArray1.filter((item: U) =>
    !(objectArray2.map(member => member[keyOfArray2]).includes(item[keyOfArray1] as any)))
);
```
## 5. One Object Array And A String[]|Number[]

```typescript
export const filterKeyValueNotInArr = <U> (
  objectArray: U[],
  strOrNumArray: number[]|string[],
  keyOfArray: keyof U,
): U[] => (
  objectArray.filter((item: U) =>
    !(strOrNumArray.includes(item[keyOfArray] as never)))
);
```