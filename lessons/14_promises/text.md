*Promises*

In this video we are going to look at the Javascript Promise. You can now use promises in vanilla javascript without an outside library.

Because Javascript is a single threaded language, it can only do one thing at a time. This can make it difficult for us as developers to write our code to handle asynchronous actions and events –– like, for instance, making a request to a remote server.

One of the most common strategies for using Promises to create a function that returns a promise. Let's try a simple example.

```javascript
function waitUpToThreeSeconds(seconds) {
  return new Promise( (resolve, reject) => {

    console.log(`I'll wait up to three seconds. You asked me to wait for ${seconds} seconds.`)

    setTimeout(
      () => {
        reject('3 seconds are up! You asked me to wait too long!')
      },
      3000
    )

    setTimeout(
      () => {
        resolve(`${seconds} seconds are up! What a pleasure!`)
      },
      seconds * 1000
    )


  })
}

waitUpToThreeSeconds(2000)
  .then(successMessage => {
    console.log(successMessage)
  })
  .catch(errorMessage => {
    console.log(errorMessage)
  })

waitUpToThreeSeconds(4000)
  .then(successMessage => {
    console.log(successMessage)
  })
  .catch(errorMessage => {
    console.log(errorMessage)
  })
```
