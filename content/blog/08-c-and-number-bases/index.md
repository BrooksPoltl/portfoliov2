---
title: "08: C and Number Bases"
date: "2020-08-13T22:12:03.284Z"
description: "Part 1 of CS61C Great Ideas in Computer Architecture"
topic: "teachyourselfcs"
subCat: "computer-architecture"
---

This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00-getting-started/).

## LECTURES

### L1

Course concentrates on broad ideas in computer architecture. C is close to underlying hardware.

<br>
<br>

What is the cloud?
<br>
The cloud is a data center of computers in a warehouse. They need to be near a river (to cool the computers) and low power cost. Also need to be in a secret location to avoid malicious attacks. Server can have 12 to 16 processors. Even single core can do many instructions at once. Tons of Logic Gates running in parallel.

<br>
<br>

Abstraction:
<br>

hiding unnecessary details at the upper level.
<br>
Machine level, Assembly level, High level.
<br>
<br>
Moore's Law:
<br>
Designing through trends.
<br>
"Amount of transistors on a chip will double every 2 years"
<br>
This however is changing. They can make them smaller, but it is much more expensive to make them smaller.
<br>
<br>
principle of locality (memory hierarchy):
<br>
Speed on the computer dependent on locality.
Fastest memory is the registers. Chip Cache second closest, then Board Cache. Then Memory takes 10 times longer than cache. Disk are really slow (which is why they are gone now).

<br>
<br>

Parallelism:
<br>
ability to do multiple things at once. Parallelism is limited, performance gain is limited to how much has to be done sequentially.
<br>
<br>
Performance Measurement & improvement
<br>
Figuring how fast your code goes, and how to improve the performance.
<br>
<br>
Dependability via Redundancy
<br>
Coping with failures, You have to maintain backups for data stores that way you don't lose data.
<br>
<br>
bit terminology:
<br>

- 8-bit: byte
- 16-bit: half-words
- 32-bit: words
- 64-bit: double words

Integer and floating-point operations can load to results too big within their representation (overflow/underflow).
<br>
<br>
signed and unsigned integers:
<br>
signed integers: positive and negative numbers
<br>
unsigned integers: positive number
<br>
32-bit word: 2\*\*32 binary numbers
<br>
unsigned integers in 32 bit word: 4,294,967,295 (4giga)
<br>
signed integers: 1/2 positive, 1/2 negative, 1 0
<br>
<br>
Two's complement:
<br>
left most bit shows positive or negative (1 negative, 0 positive).
<br>
go from positive to negative
<br>
invert all bits and add 1

### L2

Compiled vs interpreted languages:
<br>
<br>
High level language compiles down to Assembly language, Assembler transfers to machine language.

C is lowest of high level langauge, also called universal assembler. Low level but not tied to machine.

C compiles code into specific machine code x86 vs arm.

.o extension is machine code object files.

Cannot use machine code in different architecture, must re compile if you want to switch machines.

Relying on architecture can create problems when porting to different architectures.

C is function oriented, c++ more object oriented.

unsigned means no negatives.
<br>
<br>
short: at least 16 bits

int: could be 16 but could be larger

long: greated than 32

all could be 64 bits
<br>
<br>
define runs the same speed as const.
<br>
<br>
functions have return type, if you dont need to return a type return void.

can create struct type that acts like a object.
<br>
<br>
pointer variable containing an address, aka a memory location
<br>
<br>
& is address operator.

\*x is value at address x.

\* called the dereference operator

### L3

Address is a value, uses unsigned numbers.

<br>

int \*x, means variable x is address of an integer.

x = &y, assign the address of y to x.

dereference operator gets the value of a pointer.

<br>

to change value of variable you pass a pointer to a function and increment the pointers value.

<br>

void \* generic pointer to anything. Can lead to bugs and security issues.

string is a array of characters or chars

to increment a pointer for an array you pass a pointer to a pointer. that way you arent operating on the copy.

### L4

in C arrays just point to first value in array.

<br>

You cant add 2 pointers, multipy or subtract pointer from integer.

<br>

4 regions of address space.
<br>
stack
<br>
heap
<br>
static data
<br>
code

<br>
<br>

stack- local variables inside functions. (grows downward)

heap - space requested for dynamic data, handled with malloc() resizes dynamically. (grows upward)

static data - variables outside of functions (loaded when program starts)

code - loaded when program starts
<br>

stack is last in first out.

<br>

heap uses 5 builtin functions

- malloc, allocate block of uninitialized memory
- calloc, allocate block of zeroed memory
- free, free previously allocated block of memory
- cfree, dont use (legacy)
- realloc, change size of previously allocated block

<br>

size_t is the size of the bytes in machine.

calling malloc multiple times in a row doesnt mean they will be continuous in memory.

free releases the memory you allocated.

## LABS

#### HW 0

https://github.com/BrooksPoltl/cs61c/blob/master/hw0/hw0.txt

## READINGS

### 2.4
