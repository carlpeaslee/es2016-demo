*Classes Super*

Here we are in our App file and we're going to start modifying our App component. Perhaps we want to do something when our app is constructed.

We are going to add the constructor function here in our app.

```javascript
constructor(props){
  super(props)
}
```

And notice here that we're passing props to our constructor and then also passing those props on to super. We do this because internally, the  React component class's constructor is expecting to have props given to it and we want to make sure our App component can access those.


To test this we can do this:
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App
    hello={"look at this"}
  />,
  document.getElementById('root')
)
```

Notice the difference between this


```javascript
constructor(){
  super()
  console.log(this.props)
}
```

and this:

```javascript
constructor(props){
  super(props)
  console.log(this.props)
}
```

Here we use a getter and a setter in a component

```javascript
import React, { Component } from 'react'



class App extends Component {

  state = {
    myForm: ''
  }


  message = 'Hello  Hello'

  get myMessage() {
    return (
      <h3>
        {this.message}
      </h3>
    )
  }

  set myMessage(newMessage) {
    this.message = newMessage
  }


  handleChange = (e) => {
    let {name, value} = e.target
    this.myMessage = value
    this.setState( (prevState) => {
      return {
        [name]: value
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Es2016</h1>
        <textarea
          name="myForm"
          value={this.state.myForm}
          onChange={this.handleChange}
        />
        {this.myMessage}
      </div>
    )
  }
}

export default App
```

Finally, classes also have something called `static` methods. These are values or functions that are available from the class WITHOUT make an instance of the class.

In react, we can set default props using the static syntax in two different ways:

```javascript

App.defaultProps = {
  cheese: 'cheddar'
}

console.log(App.defaultProps)
```

or like this:

```javascript
static defaultProps = {
  bonkers: 'wowowow'
}
```
