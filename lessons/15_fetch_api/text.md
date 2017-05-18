*Fetch Api*

As I mentioned in the last video, one of the most common use cases for promises is to promisify a function that makes an asynchronous request to a remote api.

Another neat addition to javascript is the `fetch` api. Fetch gives us an easy way to make promise enabled http requests without using an outside library.

This is how you use fetch:

```javascript
const url = 'https://myapi.com'
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    //your json stuff
  })
}

fetch(url, options)
  .then(response => response.json())
  .then(json => json).catch()

```
