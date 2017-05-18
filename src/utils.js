
class Random {

  integerBetween(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
}

class RandomColor extends Random {

  constructor(type = "rgb") {
    super()
    if (this.types.includes(type)) {
      this.type = type
    } else {
      this.type = 'rgb'
    }
  }

  types = ['hex', 'rgb']

  color() {
    return`rgb(${super.integerBetween(0,255)},${super.integerBetween(0,255)},${super.integerBetween(0,255)})`
  }
}



export const random = new RandomColor()



const shakespeareApi = 'https://api.graph.cool/simple/v1/shakespeare'

let options = () => {
  return {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
        allPoems (
          first: 1
          skip: ${random.integerBetween(0,160)}
        ) {
          title
          author
          lines
          text
        }
      }`
    })
  }
}

export async function getRandomPoem() {
  try {
    let result = await fetch(shakespeareApi, options())
    let response = await result.json()
    let poem = response.data.allPoems[0]
    return poem.text.replace(/(<br[/]>)/g, '\n')
  } catch (e) {
    console.log("Error in getRandomPoem", e )
    throw e
  }
}
