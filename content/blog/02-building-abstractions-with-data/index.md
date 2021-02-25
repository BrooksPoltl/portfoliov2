---
title: "02: Building Abstractions With Data"
date: "2020-05-02T22:12:03.284Z"
description: "Part 2 of CS61A Structure and Interpretation of Computer Programs"
topic: "teachyourselfcs"
subCat: "programming"
---

This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00-getting-started/).

## LECTURES

### User Interface Lectures

These lectures are in week 3 of the Calendar, but lecture 5 and 6 for spring 2010 so I'll just list them here since order doesn't matter for them.

### L05

This lecture goes over "User interface design" a lecture by Alan Kay. Alan Kay is the inventor of every aspect of the modern computer environment.
<br>
<br>

Dynabook was a computer that looks like a calculator.

### L06

This lecture goes over part 2 of "User interface design". This specific lecture goes over the psychology of UI.

### L07

#### Time Efficiency and Order of Growth

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

### L08

#### Recursion and Iteration

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
O(N \*\* 3):
<br>

- matrix multiply

#### space complexity

Since a recursive process has to wait for the nested process to finish the space complexity is O(n) for a O(n) runtime procedure.
<br>
<br>
Iterative process takes constant time complexity.

### L09

#### Data abstraction

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

### L10

#### Lisp Higher Order Functions:

Every: computes function on every word in sentence.
<br>
Keep: Returns subset of a predicate if predicate is true.
<br>
accumulate: combines things in list/sentence and returns result.
<br>
map: applies function to each list in nested list, can return list of list still.

### L11

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

### L12

trees: hierarchical data structure
<br>
<br>
binary search tree: node to left smaller, node to right bigger.
<br>
<br>
parse tree: branch node is operator, leaf nodes are operands
<br>
<br>
leaf node: no children
<br>
<br>
branch node: node with children
<br>
<br>
deep list: only the leafs have data.

### L13

Two recursive calls (that run, if it is conditionally running one of two recursive calls it isn't) in a procedure shows that you are dealing with tree recursion.
<br>
<br>
Breadth first search: when traversing the tree it gets as wide as possible before continuing down the tree. Useful for searching. Think chess, the amount of possible chess moves are so large that it is better to search for the best possibilities with a lower degree of separation.
<br>
<br>
Depth first search: when traversing the tree it gets as deep as possible before continuing. Usually the information is more useful because it list out the parents and children relationships close together.
<br>
<br>
parse tree: computes Datum, then left, then right.

## LABS

### Lab 2A

2.2
<br>

```
(define (make-point x y)
    (cons x y))

(define (make-segment a b)
    (cons a b))

(define (start-segment pln)
(car pln))
(define (end-segment pln)
(cdr pln))

(define (x-point pnt)
(car pnt))

(define (y-point pnt)
(cdr pnt))

; compute the average between two x coords
;compute the average between two y coords
(define (midpoint-segment pln)
(print-point (make-point (/ (- (x-point (start-segment pln)) (x-point (end-segment pln))) 2) (/ (- (y-point (start-segment pln)) (y-point (end-segment pln))) 2))))

(define (plane x1 x2 y1 y2)
(make-segment (make-point x1 y1) (make-point x2 y2)))

(define (print-point p)
(newline)
(display "(")
(display (x-point p))
(display ",")
(display (y-point p))
(display ")"))
```

2.3
<br>

```
(define (make-rect s1 s2 s3 s4)
(cons s1 (cons s2 (cons s3 (cons s4 s1))))
)

(define (rect x1 y1 x2 y2 x3 y3 x4 y4)
(make-rect
(plane x1 x2 y1 y2)
(plane x2 x3 y2 y3)
(plane x3 x4 y3 y4)
(plane x4 x1 y4 y1)
))

(define (perimeter rect)
(define lw (make-lw (car rect) (car (cdr (cdr rect)))))
(+ (* 2 (car lw)) (* 2 (cdr lw)))
)

(define (area rect)
(define lw (make-lw (car rect) (car (cdr (cdr rect)))))
(* (car lw) (cdr lw))
)


(define (make-lw p1 p2)
(cons (- (x-point (start-segment p2)) (x-point (start-segment p1))) (- (y-point (start-segment p2)) (y-point (start-segment p1)))))


; (0,0) (0,2) (2,2) (2,0)
```

to find area and perimeter all you need is the bottom left and top left points.
<br>
<br>
perimeter = 2l + 2w
<br>
area = l\*w

### Lab 2B

2.27

```
(define (reverse l)
  (if (equal? '() l)
     '()
     (append (reverse (cdr l)) (list (car l)))
  )
)
(define (deep-reverse l)
  (if (equal? '() l)
     '()
     (append  (deep-reverse (reverse (cdr l))) (list (reverse (car l))))
  ))
```

This uses the function from reverse to do a deep reverse of list of list.

## READINGS

### 2.1 Introduction to data abstraction

Abstract data can have a set of procedures known as an interface. These commonly require selectors and constructors.
<br>
example:

```
(make-rat n d)
; makes a rational number with numerator(n) and
;denomimator (d) this procedure is the constructor
(numer x) ; this fetches the numerator of the rational
;data structure (x)
; This is the selector

```

<br>

#### cons, car, cdr

A cons cell is a pointer to two parts in memory.
<br>
A car is a operation that extracts the first value of memory, cdr extracts the second.
<br>
<br>
Data objects constructed from pairs are called list-structured data.

### 2.2 Hierarchical Data and the Closure Property

`(cons 1 2)` notation is known as box-and-pointer notation.
<br>
<br>
Closure property of cons: The ability for cdr to point to another cell. This allows the creation of hierarchical structures.
<br>
<br>
This section goes over a lot of list procedures and tree stuff that was covered in lecture.

### 2.3 Symbolic Data

In order to manipulate symbols we need to be able to represent data by their values instead of symbol. Lisp allows you to quote using `'`.
