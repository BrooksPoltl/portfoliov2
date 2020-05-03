---
title: "03: Data Driven Programming"
date: "2020-05-03T22:12:03.284Z"
description: "Part 3 of CS61A Structure and Interpretation of Computer Programs"
topic: "teachyourselfcs"
subCat: "programming"
---

#### LECTURES
##### L14
2 types of expressions:
```
                 expr
    _______________|___________________    
    |                                 |
    atomic                           list
    ___|__________                     |
    |            |            _______________________       
self-eval    variables        procedures special-forms
```

```
    (define (eval exp)
    (cond ((self-evaluating? exp) exp)
    ((symbol? exp) (look-up-global-value exp))
    ((special-form? exp) (do-special-form exp))
    (else (apply (eval (car exp))
    (map eval (cdr exp)) ))))
```
Above is the eval function for an interpreter in Scheme. Notice it attempts to determine the type of expression then has a function to handle them. If it is a list it recursively calls eval to break the list into primitives.
<br>
<br>
```
    (define (apply proc args)
        (if (primitive? proc)
            (do-magic proc args)
            (eval (substitute (body proc) (formals proc) args))))
```
apply takes a procedure and a list of arguments. In the else of `eval` apply gets the first argument which will always the procedure call, and then it maps the arguments.
<br>
<br>

If the procedure is a primitive it gets handled at the machine language level.

<br>
<br>

If the procedure is created by a lambda,
it has formal parameters and a body.
<br>
<br>
Scheme uses environmental model of evaluation, but we are building a substitution model interpreter right now. 
Substitution works for functional programming, but not all paradigms.
<br>
<br>

##### L15
Why use a scheme interpreter to build a new one? 
<br>
<br>
Helps understand model of evaluation
<br>
Experiment with modifications to scheme
<br>
Most of the original interpreter is written in scheme.
<br>
Conveys a big concept in cs which is universality.
<br>
<br>

universality is the concept of one machine that can run a large breadth of functions.
<br>
<br>
Applicative: argument values
<br>
Normal: argument expressions
<br>

Read: takes the input and turns it into box pointer diagrams. 
<br>
Quote: takes cadr of the next expression.
<br>


##### L16

concepts:
<br>
type tagging
<br>
data directed programming
<br>
message passing
<br>

type tagging: car is the symbol, cdr is the arguments.
<br>

data directed programming: write one operation that does everything.
<br>
Not functional programming if you call the same expression and get different results.
<br>
```
(get 'brian 'address)
; #f
(put 'brian 'address '(781 Soda))
; ok
(get 'brian 'address)
; (781 soda)
```

<br>
<br>

This is not functional because same expression returns different results.
You can still use these in a functional way by assigning at the beginning and never reassigning.
<br>



##### L17

Horizontal slices through the table: messaging. The name of the interface knows all the function.

<br>

Horizontal slicing good for making prototypes.

<br>

4 kinds of numbers:
<br>
integer
<br>
rational
<br>
real
<br>
complex
<br>
<br>
regular people: 1 operand = unary, 2 operands = binary
<br>
<br>
programmers: 1 operand = monadic, 2 operands = dyadic
<br>
<br>

#### LAB
##### lab 3
```
(define (count-change amount)
(cc amount '(50 25 10 5 1)))

(define (cc amount kinds-of-coins)
    (cond ((= amount 0) 1)
    ((or (< amount 0) (equal? kinds-of-coins '())) 0)
    (else (+ (cc amount
                (cdr kinds-of-coins))
    (cc (- amount 
    (first-denomination kinds-of-coins))
    kinds-of-coins)))))

(define (first-denomination kinds-of-coins)
(car kinds-of-coins))
```
This modifies the procedure on page 40-41 for count-change.
<br>
<br>
This replaces the amount of coins with a sentence of coin amounts. I modified it to check for an empty array instead of 0, then when all possibilities of a denomination are checked I switch it to the remaining denominations using `cdr`. Then all I have to do to find the `first-denomination` is return `car` of the list.


#### READINGS
##### 2.4
##### 2.5