1. Introduction to strings

So far, we've shown you how to create variables that hold numbers such as your age, but how would we store something like a name? In javascript, we can't just write something like

```
var myName = Oliver
```

Try this in the console and you'll notice an error. We'll talk more about why this doesn't work later, but first let's focus on how to correctly do this. The right way to write the above line of code is:

```
var myName = "Oliver"
```

Here we have surrounded Oliver with quotes, creating what's known in Javascript as a string. A string is the name for any textual data in Javascript. Let's look at a couple more examples of strings:

```
var birthplace = 'los angeles'
var favoriteFood = "ramen"
var funFacts = \`I play piano and love chess.\`
```

You might notice that we are using different types of quotation marks for each line. In javascript, there are three types of quotation marks we can choose from:

- Single Quotes 'text'
- Double Quotes "text"
- Backticks `text`

This even applies to numbers. We can wrap a number in quotes if we want it to be a string: `"2"`

In the previous lesson, we assigned the Let's use variables to store a name. ... Have them write their name

include different kinds of quotes, including backticks (make sure to have some good problems for backticks)

Single Quotes 'text'
Double Quotes "text"
Backticks `text`

```
let name = 'John';
let message = `Hello ${name}`;

console.log(greeting);
```

2. Combining strings

To combine a string with another, use the `+` symbol. Here's an example. Specifically, look at the last line:

```
var firstName = 'Oliver';
var middleName = 'Amore';
var lastName = 'Ullman';
var fullName = firstName + middleName + lastName;
```

the value of `fullName` will be `OliverAmoreUllman`.

3. Why do we need quotes?

4. How to google - using quotes inside - ON THE HOW TO GOOGLE HAVE THEM TRY IT FIRST

5. get the length of a string

6. Accessing characters at a certain index - THIS WILL BE LATER. HAVE IT BE NECESSARY IN A PROJECT, AND THEN HAVE A LINK TO A VIDEO OF IT

external resources - https://javascript.info/string

FOR EXTERNAL RESOURCES ADD A DESCRIPTION PROPERTY
