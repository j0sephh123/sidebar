[Link](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

# Count the number of vowels

## My solution/s

```js
function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  
  return str.split("").filter(letter => {
    return vowels.indexOf(letter) > -1
  }).length
}
console.log(getCount("aaaabracadabra"), 5)
```

## Other solutions

### Probably the most classical one with **regex**
```js
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```

### another one with replace and regex
```js
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
```

### Similar to mine but with includes
```js
function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
```

### Verbose !
```js
function getCount(str) {
  var vowelsCount = 0;
  str.split("").forEach(function(x){
    if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
      vowelsCount += 1;
    }
  });  
  return vowelsCount;
}
```

### Classic !
```js
function getCount(str) {
  var vowelsCount = 0;
  for (index in str){
    switch (str[index]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    vowelsCount++;
    break;
    }   
  }
  return vowelsCount;
}
```