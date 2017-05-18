/* ============================================ */
/*      ./MyComponentFile.js      */
export default class MyComponent extends Component {
  render() {
    return (
      //...
    )
  }
}



/* ============================================ */
/*      ./getImportantData.js      */

export default function() {
  //get the data
}


/* ============================================ */
/*      ./someConfigObject.js      */
export default const mySetup = {      //DOESNT WORK
  environment: 'tropical'
}



/* ============================================ */
/*      ./someConfigObject.js      */
const mySetup = {
  environment: 'tropical'
}

export default mySetup



/* ============================================ */
/*      ./aBunchOfStuff.js      */

export const widget = { /* ... */}

export function birthdayReminder () {
  /* ... */
  return 'Happy Birthday!'
}

let trees = []

class ShinyButton extends Component {
 render() {
   return (
     //...
   )
 }
}

export {trees, ShinyButton}
