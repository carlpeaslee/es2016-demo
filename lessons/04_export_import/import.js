
const decision = "chocolate ice cream"

console.log(decision)

//"chocolate ice cream"


decision = "lemon sorbet"

//Warning 'decision' is a const, no reassign const

const toppings = ["sprinkles", "strawberries"]

toppings.push("fudge")

//no error!

console.log(toppings)

// ["sprinkles", "strawberries", "fudge"]

Object.freeze(toppings)

freeze.push('raisins')


const dropCone = function() {
  console.log("rats!")
}

console.log(dropCone)

/*
function() {
  console.log("rats!")
}
*/

dropCone()

//"rats!"
