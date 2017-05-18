*Arrow Functions*

Arrow functions are another notable addition that came with es5.

They are useful for two central reasons... the first is that they reduce boiler plate and are more succinct. That's a small thing but as you switch to more arrow functions you'll begin to see what a chore traditional function calls were.

90% of the time, it won't matter which kind of function call you make –– arrow or traditional –– so you'll probably just use the arrow for simplicity.

Remember, however, these two function definitions ARE different. And their use can matter in certain specific situations. This is because the arrow function does not bind this while the traditional function does.

This can be a bit confusing –– in part I think, just because of the word "this" -- so let's look at some code.

See how 'this' logs as different values based on which sort of function I use?

Let's write a function for our util file that I knkow we're going to want to use.

```javascript
let options = () => {
  return {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      //...our request
    })
  }
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


```
