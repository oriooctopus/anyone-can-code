## Map

1. Introduction/Declaring a function

Functions are containers for reusable code that allows us to divide our code into reusable parts. Dividing up our code and making it reusable is one of the fundamental building blocks of programming.

There are two steps to using a function:

1. Create the function
2. Use the function

Let's start with an example:

```
function myCoolFunction() {
  var age = 23;
  var name = "oliver";

  console.log('this is my age', age);
  console.log('this is my name', name);
}

myCoolFunction();
```

Confused? That's OK. To help this make sense we're going to break things down by starting with some regular code, and change it to be a function step by step:

FOR THIS NEXT PART THE SLIDES ARE IN THE EXERCISE WINDOW (which is for more than just exercises!)

Here our program is just one line of code, no functions exist here and this should look familiar to you. Notice that 'hello there' is logged to the console.

```
console.log("Hello there!");
```

Now let's declare a function:

```
function greeting() {

}

console.log("Hello there!");
```

Next, let's move the console.log into

console.log("Hello there!");

```

Include one more slide about how, even though our function has just one line of code in it, we can add as much as we want into it. This one doesn't need an exercise, but it would be funny to add in the log 10 times (automatically, not having them do it but just on the next slide it's in there 10 times)



One important thing to point out, the function invocation and the function name have to match exactly. So if we've declare a function called `greeting` we can't use it with `Greeting()` or `GREETING()`, only `greeting()` will work. Just like with variables, to use the function you've declared the name has to match exactly, otherwise the computer won't understand and will throw an error.

```

Exercise: fix the error in this code (if they click hint say that the answer for what is wrong is in the description)

function joke() {
console.log('why did the chicken cross the road?');
}

Joke();

```

Exercise: Have them declare a function named logMessage. Point out that the name is descriptive of what the function actually does.
Next: Have them console.log in the function and call it

Exercise: Have them, in one step, write a function that says goodbye or something

```

2. Argument

- Elsewhere on the internet, you may see this referred to as a parameter or argument

example: add 5 to the number that is passed in

```
exercise: have them refactor a function to log a message passed in
```

3. Multiple arguments

example: sum function

```
exercise: have them add a third argument to the sum function
```

6. Functions can be used more than once

The great thing about functions is that they allow us to reuse what we've wrote. We can write things once,To demonstrate, add two more `greetPerson` function invocations below the first one. Pass in any name you'd like!

```
function greetPerson(name) {
  console.log('hello ' + name + '. How are you?'); // USE AN EXAMPLE LIKE THIS ABOVE TO TO EMPHASIZE THAT THERE ARE MULTIPLE WAYS OF DOING MOST THINGS IN PROGRAMMING. AS YOU GET BETTER TRY TO LEARN AWAY FROM MEMORIZATION IN FAVOR OF FIGURING THINGS OUT FOR YOURSELF
}

greetPerson('Randy');

```

6. Returning a value

7. Many functions already exist to make programming easier for you. In this case, you don't have to create them again (step 1), all you have to do is call them (step 2) Console log is like a function, and point out that is why we use () for console log.

```

```
