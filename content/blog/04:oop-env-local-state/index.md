---
title: "04: OOP, Environments, and Local State"
date: "2020-05-04T22:12:03.284Z"
description: "Part 4 of CS61A Structure and Interpretation of Computer Programs"
topic: "teachyourselfcs"
subCat: "programming"
---
This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00:getting-started/).
#### LECTURES
##### L18

OOP is a implementation of lambda.
<br>
<br>

class
<br>
instance
<br>
instantiation variable 
<br>
clause
<br>
method
<br>
instance-vars
<br>
Class variables
<br>
<br>

Anytime you change the value of something use a exclamation point to signify you are not doing functional programming.


##### L19

OOP implements inheritance through delegation (assigning to something else).
<br>
<br>
Child looks for the methods and if it can't find it the message is sent to the parent.
<br>
<br>
default-method: what to do when the parent can't handle the message.
<br>
<br>
initialize: method only used once to setup the class
<br>
<br>
dispatch procedure: takes message and returns a method.

##### L20

OOP: With every object you have the procedures that work on it.
<br>
<br>

Polymorphism: Ability to work with other types in the sending op messages.
<br>
<br>

Garbage collection: automatic storage management.

<br>

##### L21

global variables: available to anyone
<br>
class variables: available to that class
<br>
instance variables available to that instance
<br>

Persistent local state variables.
Lambda inside a let creates local state variables.
<br>
<br>

Can wrap lambda in parenthesis to invoke it after creating it.

<br>
<br>

Substitution model (eval exp):
<br>
Eval all sub expressions
<br>
apply procedure to arg list
<br>
substitute args for params in body
<br>
eval modified body
<br>
<br>

Environment model (eval exp in env):
<br>
Eval all sub expressions.
<br>
apply procedure to arg list
<br>
make an env with params bound to args
<br>
Eval body in new env.
<br>

##### L22
Environemnt:
<br>
frame
<br>
maps variables to values
<br>
pointer to "enclosing environment"
<br>
All evals are done in a environment.
<br>
<br>

Creates a new environment when you invoke a procedure.
<br>

Can create a pointer to another environment to inherit those variables. 
<br>
<br>
1.) look in current env, if found return value
<br>
2.) look in parent env, if found return value
<br>
3.) if not in parent env returne UNBOUND VARIABLE error.

Lexical scoping: extends lambda environment 
<br>
 
dynamic scope: extends specific environments.
<br>



##### L23

Professor out, more review on environments.
<br>


#### LABS
##### 4A
##### 4B

#### READINGS
##### 3.1
##### 3.2
