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



##### L27
##### L28
##### L29
##### L36
##### L37

#### LABS
##### Lab 5A
##### Lab 5B

#### READINGS
##### 3.3
##### 4.1.1 - 4.1.6


