/**
 *@desc
 *@author Richard Wang
 *@date 2022/6/18 18:52
 */
import _ from 'lodash';

let array1 = [1, 2, 3, 4];
let evens = _.remove(array1, function(n) {
  return n % 2 == 0;
});

console.log(array1);
// => [1, 3]

console.log(evens);
// => [2, 4]