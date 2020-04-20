---
title: "01: Introduction to Scheme Programming"
date: "2020-04-20T22:12:03.284Z"
description: "Week 1 of CS61A Structure and Interpretation of Computer Programs"
topic: "teachyourselfcs"
subCat: "programming"
---
This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](http://localhost:8000/teachyourselfcs/programming/00:getting-started/).

#### INTRO
I will be following the Summer 2010 [Calendar](http://inst.eecs.berkeley.edu/~cs61a/su10/index.html)
so each week will consist of 4 lectures and 2 labs.

#### READINGS
##### 1.1
##### 1.2
##### 1.3

#### LECTURES
##### L01

###### Mathmatical Operations

Class starts by going over some sytax for Scheme. Most languages do simple operations the same way we learned in grade school (infix notation):
<br>`2 + 2 + 3`<br> 
Scheme uses a different syntax where the operator is always on the left (prefix notation) and you can add as many numbers as you would like: 
<br>`(+ 2 2 3)`<br>
Now lets say we want to do something like:  <br>`2 + 2 +  3 - 4`<br>
In Scheme you can simply nest operators: 
<br>`(- (+ 2 2 3) 4)`<br>
<br>
When you first see this it looks way more complicated, but what is happening under the hood makes it a lot clearer. 
<br>
Scheme takes the arguments and then computes the expressions of the arguments until it gets down to a primitive value. 
`(+ 2 2 3)` is a expression and not a primitive value, so it calls `(+ 2 2 3)`. The left argument of the `-` is now 7 and both arguments are primitive values, meaning it can calculate the `-` to get 3.

###### Define
`define` is an interesting keyword. It can be used to create functions: 
```
(define (square x)
    (* x x))
```
<br>

The syntax is very different from other languages, but try to think of `define` as a function itself. 
<br>
<br>
Define's first parameter takes in a symbol (square) as it's first argument that will be the name of the procedure. The rest of the parameters are parameters for the body in this case `x`. 
<br>
<br>
The second parameter that `define` takes in is the body that the procedure will call `(* x x)`. 

<br> 

Define can also be used to store constants:
<br>
`(define pi 3.14159)`
<br>

This is the same thing as above but used in a different way. Since 3.14159 is a primitive no expression needs to be evaluated for the second parameter.

###### Conditionals

Here is the first example of a program we see in class:
```
(define (plural wd)
	(if (equal? (last wd) 'y)
	(word (bl wd) 'ies)
	(word wd 's)))
```
<br>

As you've probably already guessed, `if` is a function. 
<br>
<br>
The first parameter is the test case for example if we input fly `(equal? (last wd) 'y)` would be true, because fly ends in y. 
<br>
<br>
The third parameter `if` takes in is the expression if the test case is true.
<br>
<br>
The third parameter `if` takes in is the expression if the test case is false.
<br>
<br>
Also worth noting that names that return a boolean add a `?` to the end to show that the primitive returned is true or false. Like how equal is `equal?` in the code block above.

##### L02
##### L03
##### L04

#### LABS
##### Lab 1 
##### Lab 2 