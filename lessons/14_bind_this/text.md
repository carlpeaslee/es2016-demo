*Bind this*

Let's look now at another aspect of classes that can get a bit confusing.

Bind this. The javascript bind function can be called on a function to tell it to use a different value for this.

Most often in the context of react, we see bind(this) being used when functions are called within other functions..

The this phrase is always complicated but look here and see what happens with I create my handleChange function without the arrow syntax.

It now has its own value for this inside it. That means when I call it from render and handleChange tries to access 'this' -- its actually look at its own this, not that of my larger component.

To remedy this, I have two options.

I can use the arrow syntax OR I can use the bind function in the constructor.
