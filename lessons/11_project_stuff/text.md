Before we get into some more es2016 stuff, lets fill out some more of our app's functionality so we can see it in action.

```javascript
import React, {Component} from 'react'
import hljs from 'highlight.js'
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from './styled'


export default class Hl extends Component {

  state = {
    editor: '',
    rules: 1,
    name0: '',
    begin0: '',
    end0: '',
    style0: '',
  }


  convertToMarkup = (value) => {
    let div = document.createElement("div")
    let text = document.createTextNode(value)
    div.appendChild(text)
    let {value: __html} = hljs.highlightAuto(div.innerHTML)
    return {
      __html
    }
  }

  tab = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault()
      e.target.value = e.target.value.concat('\t')
      this.handleChange(e)
    }
  }


  handleChange = (event) => {
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  language = (newRules) => {
    return () => ({
      contains: [
        ...newRules
      ]
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

  componentWillUpdate(nextProps, nextState) {
    this.registerLanguage(nextState)
  }

  registerLanguage = (state) => {
    let {rules} = state
    let ruleObjects = []
    for (let i = 0; i < rules; i++) {
      let newRule = {
        className: state[`name${i}`],
        begin: state[`begin${i}`],
        end: state[`end${i}`]
      }
      let {className, begin, end} = newRule
      if (
        className.length > 1 &&
        begin.length > 1 &&
        end.length > 1
      ) {
        begin = new RegExp(begin)
        end = new RegExp(end)
        ruleObjects.push(newRule)
      }
    }
    hljs.registerLanguage('language' , this.language(ruleObjects))
    hljs.configure({
      languages: ['language'],
      useBr: true
    })
  }

  prepareStyles = () => {
    let {rules} = this.state
    let styles = []
    for (let i = 0; i < rules; i ++) {
      styles.push(`
        .hljs-${this.state['name'+i]} {
          ${this.state['style'+i]}
        }
      `)
    }
    return "".concat(styles)
  }

  render() {
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
              name={"editor"}
              value={this.state.editor}
              onChange={this.handleChange}
              onKeyDown={this.tab}
            />
            <Markup
              dangerouslySetInnerHTML={this.convertToMarkup(this.state.editor)}
              customStyles={this.prepareStyles()}
            />
          </Document>
        </Column>
      </Container>
    )
  }
}
```
