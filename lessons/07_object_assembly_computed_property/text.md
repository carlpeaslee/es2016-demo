*Object Assembly Shorthand Computed Property Names*

In addition to giving us more succincy ways to take objects apart, es2015 also gave us some cool ways to put objects together.

Often times, programmers found that they were repeating the names of the key and the variable that stored the keys value over and over again when they were creating objects.

Object assembly short hand allows us to simply pass the variable and the key will automatically be set to that variables name.

We also have a new way of referencing the name of a key on an object. Previously we would have to set the name of a key after we'd created an object using the period or bracket syntax.

Now however, we can create new property names while we're assembling the rest of the variables information.

This can be particularly useful with React's setState method.

Let's create a handleChange function that we can use for all of our app's inputs.

```javascript
import React, { Component } from 'react'
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from './styled'

class App extends Component {

  state = {
    editor: ''
  }

  handleChange = (event) => {
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {handleChange} = this
    let {editor} = this.state
    return (
      <Container>
        <Column>
          <Button>
            New Rule
          </Button>
        </Column>
        <Column>
          <Button>
            Random Text
          </Button>
          <Document>
            <Editor
              value={editor}
              onChange={handleChange}
            />
            <Markup/>
          </Document>
        </Column>
      </Container>
    )
  }
}

export default App

```
