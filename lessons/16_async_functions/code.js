
constructor(props){
  super(props)
  this.handleChange = this.handleChange.bind(this)
}


handleChange(e){
  let {name, value} = e.target
  this.myMessage = value
  this.setState( (prevState) => {
    return {
      [name]: value
    }
  })
}
