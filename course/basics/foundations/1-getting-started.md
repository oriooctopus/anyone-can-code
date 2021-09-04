### Other Map

1. A variable is like a label

Please memorize the following facts:

- My name is Oliver
- My age is 23

Now that you've memorized my name and age, I won't have to repeat them. Literally, you'll remember that when I say my age, I'll be referring to 23, and when I say my name, I'll be referring to oliver.

In this example the terms, "my age" and "my name" work the same way javascript variables do. "My age" is a _label_ that refers to a particular _value_

```
var age = 23;
```

Let's break down this line of code

`var` is a keyword we use to create a new variable.
`age` is the name of our variable
`23` is the value we assign to it

```
## Exercise: Have them declare a variable named age and put in their age. Have some sort of check that tells them that they can't use Age if they try
```

2. A variable can be any name

Now the variable age refers to the number 23. Note that it was my choice to call it age. I could have called it myAge, I could have called it something silly like gobblegoop. In javascript, you can give your variable any name as long as it doesn't break these rules:

- It should be one word - my age doesn't work because it is two words
- The first character must be a letter or an underscore (\_). You can't use a number as the first character.
- The rest of the variable name can include any letter, any number, or the underscore. You can't use any other characters, including spaces, symbols, and punctuation marks.
- It cannot be any of [these](https://www.w3schools.com/js/js_reserved.asp) reserved names. No need to memorize this list, as this is almost never a problem.

However, just because you _can_ give a variable any name doesn't mean you should. Good programming means writing helpful variable names. The variable `age` is much more useful than `gooblegop` because we imedietely understand what it's purpose is.

```
Exercise: Have them change the name to any valid variable name
Exercise: Which of these variable names is invalid? Maybe have one or two of theses
```

3. Strings

In the previous exercise, we set the `var name = 'Oliver'`. You may notice that the word Oliver is surrounded by quotation marks, `'`. We use quotation marks to work with strings. A string is any piece of text that is surrounded by quotes. Below are 3 examples of strings:

```
'The quick brown fox jumped over the lazy dog'
'Oliver Ullman'
"happy"
```

You may have noticed that our final example, `"happy"`, used a different type of quotation marks, `"`. We can use either `'`, `"`, or ` \`` to surround a string. **The important thing is that whatever quotation mark we choose to open a string must be the same quotation mark that closes it**. So  `"happy'`would be invalid because the opening quotes,`"`, do not match the closing quotes, `'`.

```
Exercise: Declare a variable called name and set it to your name.
Exercise: Declare a variable called description and write a sentence about yourself, this time try to use a different pair of quotes than before.
Exercise: Select which strings are invalid
```

4. Reassigning variables

Javascript variables can also change. If I code

```
var name = 'Oliver';
```

name refers to 'Oliver'. Then, I come along and code the line

```
name = 'Ace';
```

A variable can have different values, but only one at a time.

You may be wondering why, in the statement above that assigns "Ace" to _name_, the keyword var is missing. It's because the variable was declared earlier, in the original statement that assigned "Oliver" to it. Remember `var` is the keyword that creates a variable - the keyword that _declares_ it. Once a variable has been declared, you don't have to declare it again, you can just assign a new value to it.

5. Case sensitivity

The computer is a harsh task manager

- First have them declare a variable with no value called age
- On the next exercises, have them on the next line assign age to their age
- On the next one have them do it on the same line
- then, to introduce strings, have them do it by name
- then, do reassignment
- then, show how a variable's value starts as undefined when its initialized on its own line, then becomes something
- wrapping up

### Map

3. A function is like a special variable

- With the memorization example. Point out that this may remind them of functions. Talk about how functions are variables in javascript, which is one thing that makes it so powerful

/\*
Please memorize the following facts:

- My name is Oliver
- My age is 23

Now that you've memorized my name and age, I won't have to repeat them. Literally, if I tell you

```

var age;
age = 23;
console.log(age);

```

we could call this anything, we could call it snorky. Observe:

```

var snorky;
snorky = 23;
console.log(snorky);

```

\*/

/\*
Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself.

Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.

We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

`var ourName;`

creates a variable called ourName. In JavaScript we end statements with semicolons.

Variable names can be made up of numbers, letters, and $ or \_, but may not contain spaces or start with a number.

\*/

/_
! We could gradually introduce them to more and more types!
_/

// declare a variable called happy

// MULTIPLE CHOICE: which is not a valid variable name? (we could have many of these kinds of questions)

// what does the word initialize mean?

// given the following code:
var test;
// what is the value of test? (multiple choice)

/\*

THIS MIGHT BE WITHIN INTRODUCTION TO VARIABLES WE'LL SEE

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

`MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

Best Practice -- (BEST PRACTICE WOULD BE IN THE TERMINOLOGY DICTIONARY AND THEY WOULD SEE THE DEFINITION IF THEY HOVERED OVER IT)

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

ALSO CLARIFY THAT A VARIABLE CAN'T HAVE A SPACE OR DASHES

\*/

// reassigning variables
/\*
In JavaScript, you can store a value in a variable with the assignment operator (=).

```

var user;
user = 'oliver';

```

here we are assigning the name 'oliver' to the variable named user. Now, if the variable user appears again in our code, our program will treat it as if it is 'oliver'

-- Here, if the user has enabled extra explanation, you could add an analogy to a dictionary

If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator. Take the following code as an example:

```

var randomVariableName;
randomVariableName = 1 + 3 ;

```

javascript will first run the code to the right of the operator, adding up 1 + 3 to equal 4. Then that value will be assigned to the variable randomVariableName, which will equal 4.

\*/

// declare a variable called age and set its value to 23 IN THE SAME LINE

/\*

After a value is assigned to a variable using the assignment operator, you can reassign it

```

var myVar;
myVar = 'hello';
myVar = 'goodbye';

```

The value of myVar was initally set to 'hello' but in the next line we changed its value to goodbye.

You can also assign the value of a variable to another variable using the assignment operator.

```

var myVar;
myVar = 5;
var myNumber;
myNumber = myVar;

```

\*/

// PROBLEM: Assign the contents of a to variable b.

/\*

```

// Setup
var a;
a = 7;
var b;

// Only change code below this line

```

\*/

// given the following code:
var name;
name = 'oliver';
name = 'john';
// what is the value of name?

// given the following code:
var lastName = 'ullman';
var firstName = 'oli';
firstName = 'jack';
// what is the value of lastName?

// initialize variables with the assignment operator
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/initializing-variables-with-the-assignment-operator

```

```
