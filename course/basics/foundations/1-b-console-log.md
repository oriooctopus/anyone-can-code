1. Introduction

> “A computer lets you make more mistakes faster than any other invention with the possible exceptions of handguns and Tequila.”
> \― Mitch Ratcliffe

As long as you are a programmer, _it is likely that you will spend the majority of your time debugging_

One of the best ways to save time while debugging is to use `console.log`. The console displays information that is logged to it such as errors, warnings, and general info. `console.log` falls into this last category, "general info". We can log any value to the console through `console.log`.

This is `extremely` useful when debugging because it allows us to discover more about what is going on in our program

As a convenience, whenever you run code in the editor, we will display anything logged to the console at the bottom of the editor. Try this out by pasting this code into the editor:

```
console.log('a really really cool message')
```

you should now see "a really really cool message" in the bottom panel.

Whatever value we want to log goes in between the two parenthesis. The value doesn't have to be as string. For example:

```
console.log(12)
```

logs the number 12 to the console.

Early on in this course, you might not know how `console.log` can help you save time. At the beginning of this course, our code is simple. As our code gets more complex, `console.log` will really shine. For now, we'll often use `console.log` as part of our code challenges, and later on, in the debugging sections of this course, we'll show you tons of real world example that showcase how crucial `console.log` is.

2. A practical use of console.log
   have minimal explanation, just like, "the following challenge will show how it can be useful".
   Then the challenge is to have a fullname from a first and last, but the starting code will forget the space. Have them add a console log to find the problem, and then have them fix it
