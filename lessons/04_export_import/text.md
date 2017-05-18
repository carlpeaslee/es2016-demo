*Exports and Imports*

Another great addition to javascript was the ability to import and export information from one javascript file to another.

There are actually a number of different ways to import and export information -- and a few gotchas, as well -- so lets go over them.


//Go through the import export files.

Then in our project...

Let's see already how we are importing and exporting variables and functions in our project. If we look in our styled file, you can see that I'm exporting all of these components. Let's import them into our App and put them on the screen.


```javascript
import React, { Component } from 'react'
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from './styled'

class App extends Component {
  render() {
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
            <Editor/>
            <Markup/>
          </Document>
        </Column>
      </Container>
    )
  }
}

export default App
```
