/* Spread Operator */


const sauces = ['bbq', 'buffaloe', 'honey mustard']

const dressings = ['ranch', 'balsamic', 'thousand island']

const superSecretSauce = [...sauces, ...dressings]

//technically this is not yet allowed for objects
//but you can do it in create react app


const favoriteToppings = {    //the object we will spread
  peanutButter: 'crunchy',
  jelly: 'strawberry'  //it has two key-value pairs
}

const sandwich = {  //we are going to add the properties
  breadSlices: 2,   // of condiments to this new object
  ...condiments    //by using an elipsis
}

console.log('sandwich = ', sandwich)
/*
    sandwich = {
      breadSlices: 2,
      peanutButter: 'crunchy',
      jelly: 'strawberry'
    }
 */

 //you can also do

 const sameSandwich = Object.assign({breadSlices: 2}, favoriteToppings)
