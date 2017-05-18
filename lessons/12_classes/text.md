*Classes*

In the next view videos, we are going to talk about classes. As you may have noticed that our Application is using the class syntax to create our components.

Declaring a class is like declaring a special kind of function that returns a specially configured object.

You declare a class like this... and then you need to instantiate it later on like this...

```javascript

class Random {

  version = 0.1

  getIntegerBetween(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

}

let rando = new Random()

console.log("version", rando.version)

console.log("rando.getIntegerBetween(1,5)", rando.getIntegerBetween(1,5))

console.log("rando.getIntegerBetween(1,5)", rando.getIntegerBetween(1,5))
```

Classes also make it easier for us to make subclasses that extend existing classes. Before we get into that though.

We can use the constructor method to enable our class to accept arguments when its instantiated. And we can use those arguments inside the constructor...


```javascript
class Random {

  constructor(signature){
    this.signature = signature
  }

  version = 0.1

  getIntegerBetween(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

}

let rando = new Random('-Carl Peaslee')

console.log(rando.signature)
```

In the next lesson, we'll see how we can extend a class and access its parents properties specifically within react. 
