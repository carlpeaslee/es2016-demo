
function withACallBack(options, callback) {
  callback(options)
}


let response

response = withACallBack('so long', function(options) {
    return options
  }
)

console.log(response)     //'so long'

response = withACallBack('a little shorter', (options) => {
    return options
  }
)

console.log(response)     //'a little shorter'

response = withACallBack('very short', options => options)

console.log(response)     //'very short'


const store = {
  address: '101 Main Street',
  what: function() {
    return this.address
  },
  arrow: () => {
    return this.address
  }

}

console.log(store.what())       // '101 Main Street'
console.log(store.arrow())      // undefined


function Welcome(){
  this.happy = 'yes'
  withACallBack('traditional function', function(option) {
    console.log(option)
    console.log(this)
  })
  withACallBack('arrow', (option) => {
    console.log(option)
    console.log(this)
  })
}

new Welcome()   // 'tradition function'
                // undefined
                // 'arrow'
                // {happy: 'yes'}
