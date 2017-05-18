console.group("var")

  iceCream = "salted caramel"
  console.log("hoisted?", iceCream)

  var iceCream = "chocolate"
  console.log("declared", iceCream)

  iceCream = "strawberry"
  console.log("reassigned?", iceCream)

  var iceCream = "vanilla"
  console.log("redeclared?", iceCream)

console.groupEnd()

console.group("const")

  // gelato = "mango"
  // console.log("hoisted?", gelato)

  const gelato = "lemon"
  console.log("declared", gelato)

  // gelato = "mint"
  // console.log("reassigned", gelato)

  // const gelato = "almond"
  // console.log("redeclared", gelato )

console.groupEnd()

console.group("let")

  // froYo = "brownie"
  // console.log("hoisted?", froYo)
  //
  // let froYo = "cherry"
  // console.log("declared", froYo)
  //
  // froYo = "cheese cake"
  // console.log("reassigned", froYo)
  //
  // let froYo = "passion fruit"
  // console.log("redeclared", froYo )

console.groupEnd()
