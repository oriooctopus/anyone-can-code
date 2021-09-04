1. Understanding "x is not defined"

In the previous part of this lesson, you may have run into an error that looks something like:

`Uncaught ReferenceError: Age is not defined`

In case you haven't, we've written some code in the editor that causes an error similar to this one:

```
var Name = "maria";
console.log(name);
```

As you can see in the console, we get the error `Uncaught ReferenceError: name is not defined`

Javascript is case sensitive, so `Name` is not the same as `name`. On line 2, the computer is trying to look for the variable `name` but can't it, so it throws the error `Uncaught ReferenceError: name is not defined` because `name` hadn't been defined, only `Name` had.

Let's first fix this error. In the editor, rename the variable declaration on line 1 from capital N `Name` to lowercase n `name`

2. Errors can help you fix your code

When coding, especially at first, errors can be scary and frustrating. If your code has a bug and you see an error message, you might be able to figure out what is wrong from the contents of that message. In the future, if you see an error like `x is not defined`, you now know that means that you are trying to use a variable that has not been declared. Try checking spelling mistakes and capitalization to see if the problem can be fixed there.

There are many errors in javascript, and this is just one. If you run into a different error, one of the best ways to understand what it is trying to tell you is to copy that error google it. Sites like stackoverflow.com can have very helpful (and short!) explanations that will help you understand the message
