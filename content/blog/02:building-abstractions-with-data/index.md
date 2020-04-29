---
title: "02: Building Abstractions With Data"
date: "2020-04-29T22:12:03.284Z"
description: "Week 2 of CS61A Structure and Interpretation of Computer Programs"
topic: "teachyourselfcs"
subCat: "programming"
---
This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](http://localhost:8000/teachyourselfcs/programming/00:getting-started/).

#### LECTURES
##### User Interface Lectures
These lectures are in week 3 of the Calendar, but lecture 5 and 6 for spring 2010 so I'll just list them here since order doesn't matter for them.
##### L05
This lecture goes over "User interface design" a lecture by Alan Kay. Alan Kay is the inventor of every aspect of the modern computer environment.
<br>
<br>

Dynabook was a computer that looks like a calculator.

##### L06
This lecture goes over part 2 of "User interface design". This specific lecture goes over the psychology of UI.
##### L07
###### Time Efficiency and Order of Growth

Measure efficiency by how many constant time expressions are used.
<br>
<br>

`se` runtime is dependent on how it is used.
<br>
<br>
Range: what does it return.
<br>
Calculate runtime for best and worst case scenarios.
<br>
<br>
Constant factors not very valuable in runtime because of Moore's law. Also as `n` grows constants become less significant.
<br>
<br>
Highest power of `n` is the one that counts.

##### L08
###### Recursion and Iteration

```
O(1) -------|
O(log N)----| Searching
O(N)--------|

O(N log N)--|
O(N**2) ----| Sorting

O(2 ** N) --|
O(N!)-------| Intractable
O(N**N)-----|
```

Theoretically impossible to do better than O(N log N) for sorting. 
<br>
<br>
intractable: You can run them, but with large n they will never stop running. 
<br>
<br>
most of these algorithms have to be approximated to find a viable algorithm.
<br>
<br>
O(N ** 3):
<br>
- matrix multiply

###### space complexity

Since a recursive process has to wait for the nested process to finish the space complexity is O(n) for a O(n) runtime procedure.
<br>
<br>
Iterative process takes constant time complexity.

##### L09
###### Data abstraction

Abstract data type: doesn't exist in scheme, created by the programmer.
<br>
<br>
List don't have to be treated as abstract data type.
<br>
<br>
Sentence is a list constrained to only using words.
Box diagrams: 
<br>
start arrow: beginning of diagram
arrows point to box, not item in box.
<br>
<br>
List procedures:
<br>
cons: add new element to the front of a list
<br>
list: creates a new list with arguments as items.
<br>
append: put together elements of lists.

##### L10
###### Lisp Higher Order Functions:

Every: computes function on every word in sentence.
<br>
Keep: Returns subset of a predicate if predicate is true.
<br>
accumulate: combines things in list/sentence and returns result.
<br>
map: applies function to each list in nested list, can return list of list still.

##### L11
3 pieces to interpreter: 
<br>
the read-eval-print loop aka repl (I just learned this is the reason for https://repl.it).
The last thing in a repl is a call to itself making it infinite.
example: 
<br>
```
(define (calc)
    (display "calc: ")
    (flush)
    (print (calc-eval (read)))
    (calc))
```
flush: adds an end of line character 
<br>
<br>
Scheme has 4 kinds of expressions: 
<br>
self-evaluating (23 prints 23)
<br>
variables
<br>
function calls
<br>
special-forms


##### L12
##### L13

#### LABS
##### Lab 2A
##### Lab 2B

#### READINGS
##### 2.1
##### 2.2
##### 2.3


