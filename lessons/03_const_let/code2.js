
const toppings = ["sprinkles", "strawberries"]

toppings.push("fudge")

//no error!

console.log(toppings)

// ["sprinkles", "strawberries", "fudge"]

Object.freeze(toppings)

freeze.push('raisins')



var cat = "Bonkers"
let dog = "Spot"
const rabbit = "Arnold"


function indoorChecker(){

  console.log("cat", cat )
  console.log("dog",  dog)
  console.log("rabbit", rabbit )

  var cat = "Betty"
  let dog = "Steve"
  const rabbit = "Max"

  console.log("cat", cat )
  console.log("dog",  dog)
  console.log("rabbit", rabbit )

}

indoorChecker()
