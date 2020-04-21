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

###### Recursion
```
(define (pigl wd)
	(if (pl-done? wd)
		(word wd 'ay)
		(pigl (word (bf wd) (first wd)))))

(define (pl-done? wd)
	(vowel? (first wd)))

(define (vowel? letter)
	(member? letter '(a e i o u)))
```
<br>

Recursion is when a procedures calls the same procedure that it is writing. Without a test case this will go on infinitely, but a recursive function continues to do the body of the procedure until it is told to end.
<br>
<br>
Notice in the above example from lecture the function calls pigl until `pl-done` is equal to true.
<br>
<br>
Lets say `pigl` gets called with `scheme`.
The conditional checks `pl-done` which checks the first letter in the word to see if it is a vowel. Since `pl-done` is false because `s` isn't a vowel it calls `pigl` again with the argument `chemes`. This is because `word` takes the arguments `cheme` and `s` and adds them together. `pigl` gets called repeatedly until 
it is called with a vowel as the first letter. When the first letter is a vowel the expression `(word wd 'ay)` is ran and the result is a primitive which means the procedure stops. 

###### Abstraction
Big Picture: 
```
Application                   (highest)
------------------------------
High level language (Scheme)
------------------------------
low level language  ( C )
------------------------------
machine language/ architecture
------------------------------
logic gates
------------------------------
transistors
------------------------------
quantum physics                 (lowest)
------------------------------
```
<br>

Abstraction is the layering of pieces on top of eachother. Little pieces are put together to form a layer that can be referenced as a whole.

###### Functional Programming
With the introduction of multi-core processers, parallelism has helped functional programming make a comeback. If everything is a function you won't run into race conditions created by dependencies.

###### Function vs. Procedure

Two functions are the same if they give the same output with given inputs.
<br>
<br>
A procedure is a sequence of steps for computing a function.
<br>  
Therefore `2x + 6` and `2(x + 3)` are the same function but different procedures.
<br>

###### Cond
```
(define (buzz n) 
    (cond ((equal? (remainder n 7) 0) 'buzz)
    ((member? 7 n) 'buzz)
    (else n)))
```
<br>
<br>

`cond` allows for multiple test cases, and will return 
the first clause that is true. 
<br>
<br>
Lets try `14`. Since `14 / 7` has a remainder of `0` the first clause is met and returns `buzz`. 
<br>
<br>
Now Lets try `17`. The first clause is not met, and therefore goes onto the next clause. `17` does have a 7 inside of it so `buzz` is returned. 
<br>
<br>
Now lets try `15`. The remainder is `1` so the first clause is not met, and `15`  does not have a `7` inside of it so the catch all `else` keyword returns the number `15`.
<br>
<br>
Important to note:
<br>
If a `cond` does not have an `else` statement it will return `unspecified`, which can be different depending on interpreted, so always have an else statement.

###### Applicative Order vs Normal Order
```
(def (f a b) (+ (g a) b))
(def (g x) (* 3 x))

(f (+ 2 3) (- 15 6))
```
Applicative Order:
<br>
    evaluates the sub expressions until they are primitive values, then passes the primitive results back up to the parent function.
    <br>
    `(f (+ 2 3) (- 15 6))`
    <br>
    `2 + 3` and `15 - 6` will be evaluated before the outside `f` is evaluated. Then `f` will be called with `(f 5 9)`.
<br>
Normal Order: 
<br>
    evaluates the outsides first, but instead of passing primitive values it passes the expressions. 
    <br>
`(f (+ 2 3) (- 15 6))` turns into `(+ (g (+ 2 3)) (- 15 6))`
<br>
Now `f` is done and the next expression can be evaluated.

Possible Problem:
<br>
```
(def (zero z) (- x x))
```
applicative 
```
(zero (random 10)) --->
(random 10) ==> 8
(zero 8) --->
(- 8 8) ==> 0
0
```
normal 
```
(zero (random 10)) --->
(+ (random 10) (random 10)) ==> 
    (random 10) ==> 8
    (random 10) ==> 1
(- 8 1) ==> 7
7
```
<br>
<br>

Since the `(random 10)` is split into 2 different function alls in normal order you get different results.

##### L03
##### L04

#### LABS
##### Lab 1 
##### Lab 2 