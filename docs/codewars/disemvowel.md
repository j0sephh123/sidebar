[Link](https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript)
# Disemvowel Trolls

## My

```js
function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"]
  return str
    .split("")
    .filter(item => vowels.indexOf(item.toLowerCase()) === -1 )
    .join("")
}
```

## Others
```js
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```

```js
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
    return newStr;
};
```

```js
function disemvowel(str) {
  const vowels = 'aeiou';
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}
```