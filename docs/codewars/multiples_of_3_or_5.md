[Link](https://www.codewars.com/kata/514b92a657cdc65150000006)

# Multiples of 3 and 5
Just sum all the numbers that are multiples of 3 or 5 below the argument number

## My very stupid solution
```js
function solution(number){
  let sum = 0
  for(let i = number - 1; i >= 1; i --) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}
```

## Let's see the others

This I like. Its somehow confusing that they start with a condition, but other than that it's pretty readable.
Yes, creating an array with this syntax will probably be confusing for people
who haven't tried yet, but it's like the only way?

```js
function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()]
    .filter(n => n % 3 == 0 || n % 5 == 0)
    .reduce((a, b) => a + b);
}
```