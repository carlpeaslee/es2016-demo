Finally we are going to make use of our randomcolor generator and do this:

```javascript
let newStyles = "".concat(styles)

while (newStyles.includes('random')) {
  newStyles = newStyles.replace('random', random.color())
}

```
