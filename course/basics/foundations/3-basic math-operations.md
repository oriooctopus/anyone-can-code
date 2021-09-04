## Map

1. Adding two numbers together

In javascript, most numerical operations work as you would expect. In general, to be a successful programmer math skills beyond the basics are _not_ important. Still, it's useful to talk about the order of how things work, which is not just specific to numbers, but how all statements are evaluated in javascript.

```
var someMath = 4 + 5
```

The below code adds 4 + 5 together, and assigns it to the variable someMath. One important thing to note is that in javascript the right side of the expression will be run before the assignment. In order words, in the example above, the interpreter will first add together 4 + 5 and get 9, and then assign the variable someMath to be 9.

We can also see this in action in the below example:

```
console.log(4 + 5);
```

Here it might look like we are passing in two arguments, 4 and 5, into console.log. In reality, 4 + 5 is one statement, and we are only passinghin one argument because of the order of what is run. First, `4 + 5` is evaluated to be 9, then 9 is passed into console.log as the only argument.

```
exercise: declare a variable called sum and set it to 5 + 5
```

2. Subtracting two numbers

Below is an example of subtracting two numbers in javascript:

```
var subtractExample = 5 - 4;
```

```
exercise: have them console.log 8 - 9
```

3. Below is an example of multiplying two numbers in javascript:

```
var multiplyExample = 5 * 4;
```

```
exercise: have them console.log 10 * 10
```

4. Below is an example of dividing two numbers in javascript:

```
var multiplyExample = 20 * 4;
```

When using a computer, you may have used the letter `x` to act as the multiply operator (try typing in "5 x 4" into google if you don't know what we mean). However in javascript this will _not_ work and will throw an error. Only the `*` operator will work to multiply numbers.

```
exercise: fix the following code

var multiply = 7 x 5;
```

5. Now let's talk about an operator you might not have heard of, `%`, the remainder operator.

`%` gives the remainder of the division of two numbers. Let's use examples to demonstrate.

`9 / 3` is able to be divided without any remainders, so `9 % 3` is 0
`10 % 3` is 1 because now there is 1 left over
`11 % 3` is 2
`12 % 3` is 0, because it can be divided without any remainders
`13 % 3` is 1
and so on and so on

```
exercise: what is `5 % 2`?
exercise: declare a variable called remainder and set it equal to 10 remainder 4
```
