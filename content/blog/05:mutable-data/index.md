---
title: "05: Mutable Data and the Metacircular Evaluator"
date: "2020-05-06T22:12:03.284Z"
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
##### L37

#### LABS
##### Lab 5A
##### Lab 5B

#### READINGS
##### 3.3
##### 4.1.1 - 4.1.6


