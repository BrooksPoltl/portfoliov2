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
##### L17
##### L38
##### L39

#### LAB
##### lab 3

#### READINGS
##### 2.4
##### 2.5