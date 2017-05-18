*Template Literals*


Template literals allow you to create strings that include variables with an easier syntax.

Now we can complete our options function...

```javascript

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
          skip: ${randomInt(0,160)}
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

```

We also have the tools now to write the functions that will allow us to create new rules...

```javascript
import React, { Component } from 'react'
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from './styled'

class App extends Component {

  state = {
    editor: '',
    rules: 1,
    name0: '',
    begin0: '',
    end0: '',
    style0: '',
  }

  handleChange = (event) => {
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  rules = () => {
    let {rules} = this.state
    let array = []
    let fields = ['name', 'begin', 'end']
    for (let i = 0; i < rules; i++) {
      array.push(
        <Row
          key={i}
        >
          <Column>
            {fields.map( (field, index) => {
              return (
                <Column
                  key={`${field}${index}`}
                >
                  <RuleLabel>
                    {field}
                  </RuleLabel>
                  <RuleInput
                    value={this.state[`${field}${i}`]}
                    onChange={this.handleChange}
                    name={`${field}${i}`}
                  />
                </Column>
              )
            })}
          </Column>
          <StyleInput
            value={this.state[`style${i}`]}
            onChange={this.handleChange}
            name={`style${i}`}
          />
        </Row>
      )
    }


    return array
  }

  newField = () => {
    this.setState( (prevState) => {
      let {rules} = prevState
      let fields = ['name', 'begin', 'end', 'style']
      let inputValues = {}
      fields.forEach( (field) => {
        inputValues = {
          ...inputValues,
          [`${field}${rules}`]: ''
        }
      })
      rules++
      return {
        rules,
        ...inputValues
      }
    })
  }


  render() {
    let {handleChange} = this
    let {editor} = this.state
    return (
      <Container>
        <Column>
          {this.rules()}
          <Button
            onClick={this.newField}
          >
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
