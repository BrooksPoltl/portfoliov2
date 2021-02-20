---
title: "07: Evaluator and Logic Programming"
date: "2020-08-03T22:12:03.284Z"
description: "Part 7 of CS61A Structure and Interpretation of Computer Programs"
topic: "teachyourselfcs"
subCat: "programming"
---

This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00-getting-started/).

## LECTURES

### L40

Sometimes normal order is prefferable, you can modify evaluator to use normal order.
<br>
<br>

### L41

Analyzing evaluator: variant on metacircular evaluator, basically a compiler for scheme into scheme (transpiler like typescript).
<br>
<br>

### L42

declaritive programming or logic programming: not telling computer sequence of steps. Gives a set of sentences in logical form, to form rules to determine an output.
<br>
<br>

### L43

Unification: Variables on both sides (bindings), you can use unification to compute anything computable (Turing complete). Popular in database systems.
<br>
<br>

### L44

Programming Paradigms:
<br>
functional
<br>
object oriented
<br>
client/server
<br>
declarative/logic

<br>
<br>

Most programs use multiple paradigms, but are smart in how they implement each (not using concurrency for object oriented task).
<br>
<br>

Some languages only functional or OOP, but better for it to be in your head that way you can write programs taking advantage of multiple paradigms.
<br>
<br>
high level language: abstracts away the inner workings of the computer
<br>
low level language: exposes parts of the inner workings so you can manipulate the machine.

## READING

### 4.1.7

Evaluator is inefficient, analyzes syntax multiple times in an expression, it can be made more efficient by creating a procedure that analyzes the syntax and returns a procedure that can be executed.

### 4.2

applicative order: all arguments are evaluated when the procedure is applied.
<br>
<br>

Normal order: all arguments are evaluated when needed (AKA lazy evaluation).
<br>
<br>

These delayed arguments are not evaluated, they are turned into thunks (a procedure that returns a procedure), the thunk is then called whenever the argument is needed.
<br>
<br>

Process of evaluating the expression in a thunk is called forcing.

### 4.3

Nondeterministic computing: "generate and test"
<br>
<br>
generating possibilites, and then filtering those possibilities to the desired result.

### 4.4

Most programming langauges are unidirectional (computation with well defined inputs and outputs).
<br>
<br>
Unification: In order to handle rules in a query language you need a generalization of pattern matching since the rules contain variables.
