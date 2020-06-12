[Link](https://www.codewars.com/kata/54da5a58ea159efa38000836)

Find the odd int

## My

```js
function findOdd(array) {
  // 1. Count the number of occurences of an item in an array
  let obj = array.reduce((start, item) => {
    start[item] ? start[item] += 1 : start[item] = 1;

    return start;
  }, {});

  for(let key in obj) {
    if(obj[key] % 2 !== 0) {
      return +key
    }
  }
}
```

## Others

### Never seen that

[I had never met this one before](https://stackoverflow.com/questions/3618340/javascript-what-does-the-caret-operator-do)
```js
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
```

### More standard one?

```js
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
```