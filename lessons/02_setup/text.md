Let's get set up so we can get to work. During this course, I'm going to be writing all of my code from within a demo project that we'll create with create-react-app.

From the terminal, I'm going to navigate to the directory where I want to create my project and input `create-react-app es2016-demo`.

Once this runs, you'll see your project. You can cd in and start it up using `npm start` or `yarn start`.

I'm going to delete some stuff out of the project.

An important thing to remember when writing es2016 it that, even though most of its features are widely accepted as part of the javascript syntax, there is still some variation across different specific language. It's good practice to make sure any language you're using is supported in all of the browsers you're targeting...

During this course we are going to be using some cool syntax that actually isn't even part of es2016 but is actually proposed syntax for the future. This means its definitely not supported everywhere.

To remedy this, we make sure to compile our language with another program. In our case, because we're working with React, we need to compile our jsx syntax anyways. Thankfully create-react-app comes preconfigured with babel and webpack so that we don't have to worry about configuring any babel or webpack scripts.

The first thing we're going to do is use our terminal to navigate to the directory where we want to create out project.

Then we are going to use create-react-app to create our project.

Once that's finished, I'm just going to go in and delete some things that we won't be using. And edit some of the code so that it fits my personal coding style.

I'm also going to install two packages that we're going to be using with this project. One is called `highlight.js` and it is useful for creating styled markup -- like if you have a website that you want to put code on and make that code look pretty.

And the other is `styled-components` this is great for styling our react components. I'll give instructions on how to use these packages as it comes up.

Finally, I'm going to copy and paste in a file from my exercise files that has some of the styled-components that I've already created. We'll talk more about the contents of this file later. 
