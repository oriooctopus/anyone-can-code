## Map

1. combining string

(this is taken from freecodecamp)
In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

_Note_: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

```
exercise: build `myStr` from concatenating `This is the start. ` and `This is the end.` using the `+` operator
exercise: (multiple choice) what will be the value of myVar (show them combining two strings, but don't put in the space)
```

2. combining variables

We can use the `+` operator to concatenate existing variables with strings

```
var name = 'Oliver';
var ourStr = "Hello, my name is " + ourName + ", how are you?";
```

the value of `ourStr` will be "Hello, my name is Oliver, how are you?"

The variable we are combining can also be a number. Here is an example:

```
var name = "Oliver";
var age = 23;
console.log("My name is " + name ", I am " + age + 'years old');
```

"My name is Oliver, I am 23 years old" will be logged to the console. Notice that when age was combined to form ourStr, and was converted from a number into a string. When a number is added to a string, it will always convert to a string.

```
exercise: What will the result of the following code be? Basically have a simple variable string combination, but have one of the multiple choice options be what would happen if the variable name was added instead of the value.
exercise: using the provided variable `capital`, console.log the message "The capital of Indonesia is Jakarta!" using concatenation
exercise: declare a variable called numberOfSquares and set it to 64. Then, use that variable to log the message "There are 64 squares on a chess board" to the console.
```
