*Async try / catch syntax*

If you've worked much with promises, it's possible you've seen people occasionally use a different syntax.

Instead of writing functions with .then() they'll use the `async` `await` `try` `catch` syntax

This is a feature that isn't technically part of the javascript spec so you need to make sure your babel is configured to compile this. But thankfully create-react-app works with `async` out of the box

Let's try it out:


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


async function waitingGame (seconds) {
  try {
    let successMessage = await waitUpToThreeSeconds(seconds)
    console.log(successMessage)
  } catch (e) {
    console.log(e)
  }
}

waitingGame(4)
waitingGame(2)


const doubleWaitingGame = async (firstTime, secondTime) => {
  try {
    let [
      firstResult, secondResult
    ] = await Promise.all([
      waitUpToThreeSeconds(firstTime),
      waitUpToThreeSeconds(secondTime)
    ])
    console.log("both promises succeeded!")
  } catch (e) {
    console.log("both promises failed")
  }
}

doubleWaitingGame(2, 1)

doubleWaitingGame(2, 6)

```
