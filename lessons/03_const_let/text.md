*Cont and Let*

Perhaps the most recognizable addition to es2015 was that of const and let, two new key words that allow us to declare variables which behave differently than var.

When it comes to choosing which javascript variable to use, there are a number of factors we have to weigh:

-What is the scope of the variable? -- that is, where will we be able to access that variable / worry about name collision

-Can that variable be reassigned? -- that is, can we change the variables value

-Can we redeclare the variable? -- what happens if we declare it again

-Is the variable hoisted? -- can we use the variable before we've actually declared it

Let's try checking some of these traits on const, let, and var.

 code1

One gotcha with const is that its arrays and objects are NOT actually immutable –– that is to say, even though you can't change them to something other than an object or array, you can change the contents.


Finally lets take one last look at the way const and let are scoped -- that is where you can access them.

Now that we have a decent idea of the way that const and let behave. Let's add a few const and let variables to our project.

Let's create a request file and in it, we will create a const. This will just be a string for the url of the api we are going to use.

And then lets also make a variable that will hold the request options we will be using...

```javascript

const shakespeareApi = 'https://api.graph.cool/simple/v1/shakespeare'

let options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    //our request body
  })
}
```
