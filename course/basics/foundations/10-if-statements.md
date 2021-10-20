external resources:

- https://www.mikedane.com/web-development/javascript/if-statements/
- https://alligator.io/js/if-statements/

1. introducing if statements

if statements allow us to perform actions if something is true or false. For example:

- if it's after 1, tell the user to go to bed
- if the user is not logged in, say 'please log in first'

IMAGE GOES HERE

Try to guess what will happen if you paste the below code into the console.

```
let age = 20;

if (age > 16) {
  console.log('old enough to drive');
}

if (age > 21) {
  console.log('old enough to drink in the united states');
}
```

Here's what happens:

- the first statement will be true since 20 is larger than 16.
- because the first if statement is true, the code inside will run and 'old enough to drive' will be logged to the console
- the second statement is not true since 20 is smaller than 21.
- because the second if statement is false, the code inside will not run and

Finally, take a look at some different examples of conditions for if statements. They can sometimes be complex:

- `isLoggedIn && isOldEnough`
- `age < 16 && age > 10 && productInStock`
- 2 + 2 === 4

All of these are valid to put in as the condition for an if statement

challenge: do lots of 'what will be logged from this code?'

- code challenge: regular if statement

````
  let lovesPizza = false;

  if (lovesPizza) {
    console.log('i love pizza');
  }
  ```
  challenge frequency medium
````

function greetUser(isLoggedIn, name) {
if (isLoggedIn) {
return `Welcome back ${name}!`;
}

return `Welcome ${name}!`;
}

greetUser(false, 'priyantha');

```
  test options like 'welcome ${priyantha}!' and if both get logged
  frequency: low
```

let lovesPizza = true;
let isVegetarian = true;

if (lovesPizza && isVegetarian === true) {
console.log("would you like some cheese pizza?");
}

if (lovesPizza && isVegetarian === false) {
console.log("would you like some meat lovers pizza?");
}

```

```

function offerPizza(lovesPizza, isVegetarian) {
if (lovesPizza === true) {
if (isVegetarian === true) {
console.log("would you like some cheese pizza?");
}

    if (isVegetarian === false) {
      console.log("would you like some meat lovers pizza?");
    }

}
}

offerPizza(true, false);

```
rewrite that above one with only two if statements instead of 3
HAVENT WRITTE NTHESE OTHER CHALLENGES YET
challenge: one with nested if statements (hard b)
challenge: compound conditions
hard challenge: live life (take in multiple variables and decide whether to eat, go to sleep, waste time on social media)

```

2. else statements

else statements can be added to if statements to run code if the condition in the if statement is _not_ true. If the if statement _is_ true, then the else statement will never run.

```
let age = 17;

if (age > 16) {
  console.log('old enough to drive');
} else {
  console.log('sorry you cannot drive');
}
```

As you can see, there is not 'condition' to an else statement. It runs if the if statement does not run.

challenge: using an if statement and an else statement, create a function called canIVote that receives 1 parameter, age, and returns 'can vote' if age is above _or equal_ to 18, and returns 'can not vote' if age is below 18.
hard challenge: log if number is odd or even (give the hint that this requires a skill and to check the skill requirements)

3. else if statements

else if statements can be added on to if statements to provide additional checks if the original if statement did not 'pass' the condition. In terms of syntax they are the exact same as a regular if statement.

if (time < 10) {
greeting = "Good morning";
} else if (time < 20) {
greeting = "Good day";
} else {
greeting = "Good evening";
}

```

challenge: Create a function called 'getFeedback' that takes in a single parameter, rating. Based on the value of rating:
- if rating is above or equal to 8, return 'thanks for your amazing review!'
- if rating is above or equal to 6, return 'thanks for your kind words!'
- if rating is above or equal to 3. return 'what could have been better?'
- otherwise, return 'sorry for your bad experience!'

4. boolean conversion

In a previous lesson, we learned about the difference between `==` and `===`. Basically, `==` is less strict when comparing meaning that `0 == false`, `1 == true`, and many other surprising statements are considered *truthy*.

In the 'condition' part of if and else if statements, the less strict *truthy* value is the criteria for if the condition passes. For example:

```

if (1) {
console.log('this code will run because the condition above passes');
}

if ('some text') {
console.log('non empty strings are truthy, so this code will also run')
}

```

challenge: which of the following statements would pass the 'condition' of an if statement?

other notes: do users get confused by the implicit true instead of isLoggedIn === true?
```
