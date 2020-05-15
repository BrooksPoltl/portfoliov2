---
title: "05: Mutable Data and the Metacircular Evaluator"
date: "2020-05-15T22:12:03.284Z"
description: "Part 5 of CS61A Structure and Interpretation of Computer Programs"
topic: "teachyourselfcs"
subCat: "programming"
---

This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00:getting-started/).

#### LECTURES

##### L24

If sharing storage mutating may affect data, if not sharing storage it won't.
<br>
<br>

Can't mutate quoted list. Have to use cons or `list`.
<br>
<br>
eq? is when it is the same location in memory.
equal? is equality.

##### L25

Table: association between keys and values
<br>
<br>

put: if no key in the table, create new one.
<br>
<br>

2d table: a key that has a table structure as its cdr.
<br>
<br>

Runtime for 2d table: n + y where n is the size of the table and y is the size of the second table.
<br>
<br>

2 lookups for key value store. assoc and assq.
<br>
<br>
memoization: storing previous calculations to build a result.
<br>
<br>

If underlying calculation is not functional you can't use memoization.

##### L26

vector (array): indexed list
<br>
<br>
vector best if needing to access a certain element a lot, accessing a value is o(1) instead of o(n) (worse case).
<br>
<br>

if you need to build up a list element by element list are faster.

##### L27

streams: returns the first element, and a promise to compute the rest later.

<br>
<br>

Modern processers guess where the test is going to be and starts calculating the rest while still doing the test.

<br>
<br>

delay: constructor for promises.

```
(delay exp) => (lambda () exp)
```

<br>
<br>

promise remembers what it is returning to.

##### L28

Integers computes the next integer just in time for the next computation to be run.

<br>
<br>

Only use streams in functional programs.
Chapter three is about systems that change state over time.

<br>
<br>

Parallelism simple with functional programming, very hard with mutating variables.

<br>
<br>

Scheme uses normal order because it supports mutations.

<br>
<br>

Haskell is a purely functional language that uses applicative order.

##### L29

Your operating system can assign you a port number.

<br>
<br>

packet: burst of information you throw out and hope for the best.

<br>
<br>

internet: network of networks

<br>
<br>

Router connects to people outside your network.

<br>
<br>

worldwide unreliable packets, because the network traverses many computers that could crash.
<br>
<br>

TCP: Transmission control protocol, provides worldwide reliable streams.
<br>
<br>
socket: abstract data type holds port numbers and other stuff.
<br>
<br>

thunk: procedure with no arguments

<br>
<br>

thread: way of having many things happen at once in one program.

##### L36

Old systems: take in variable and computes function.

<br>
<br>

new systems: take in variable and function and compute function.

<br>
<br>

This means that one machine can compute a function.

<br>
<br>

read translates what you type into box and pointer form.

<br>
<br>

##### L37

This lecture went over the logo language.
<br>
<br>

lexical scope:
<br>
allows local state vars (OOP)
<br>
prevents capture bugs
<br>
faster compiled code
<br>
<br>

dynamic scope:
<br>
allows first class exprs
<br>
allows "semi-global" vars
<br>
better debugging environment

#### LABS

##### Lab 5A

5A mostly drawing diagrams.

##### Lab 5B

Need access to Berkeley's login for the resources for 5B.

#### READINGS

##### 3.3 Mutable Data

data objects that have a setter defined are known as mutable data objects.
<br>
<br>

You can build table by gluing box-pointers together. A table with a arbitrary value at the start of the table is called a headed table.
<br>
<br>

You can use a lookup procedure to get values out of the table given a key.
<br>
<br>

##### 4.1.1 - 4.1.6 Metalinguistic abstraction

Evaluator: A procedure that when applied to an expression can perform the action required for the expression.
<br>
<br>
The evaluator is just another program.
<br>
<br>

metacircular: An evaluator that is written in the language it evaluates.
<br>
<br>

eval: takes as arguments an argument and an expression. Then it classifies the expression and directs its evaluation. Eval also looks up variables within the expression.
<br>
<br>

Apply:
Apply takes a procedure and list of arguments. Constructs a environment for compound procedures.
