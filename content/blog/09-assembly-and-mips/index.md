---
title: "09: Assembly and MIPS"
date: "2020-08-14T22:12:03.284Z"
description: "Part 2 of CS61C Great Ideas in Computer Architecture"
topic: "teachyourselfcs"
subCat: "computer-architecture"
---

This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00-getting-started/).

## LECTURES

### L5

Assembly language below high level language (MIPS)
<br>
Assebler turns assembly code into machine code
<br>
job of cpu: execute lost of instructions (primitive operations that the cpu can execute)
<br>
Example instruction set architectures:
<br>

- ARM
- x86
- mips
- risc-v
- ibm/motorola powerPC
- intel IA64

<br>

Assembly Variables: Registers
<br>
since registers are in hardware there is a limited number, 32 registers in MIPS

<br>

32 bits in a register, groups of 32 bits called a word in mips.

Number refererences: ($0, $1, \$2)

or

name references: ($s0-$s7, \$t0-\\\$t7) c variables and temporary variables (preffered because easier to debug)

<br>

add in assembly
<br>
`add $s0, $s1, $s2` = `a = b + c`
<br>

subtract in assembly
<br>
`sub $s3, $s4, $s5` = `d = e - f`
<br>

how to do a = b + c + d - e

```
  add $t0, $s1, $s2 # temp = b + c
  add $t0, $t0, $s3 # temp = temp + d
  sub $s0, $t0, $s4 # a = temp - e
```

<br>

Immediates:
<br>
Immediates are numerical constants, they appear often in code, so there are special instructions for them.

```
  addi $s0, $s1, -10 #mips
  f =  g - 10 #c
```

you have a special register for zero cases

```
  add $s0, $s1, $zero #mips
  f = g #c
```

Overflow handling in mips:
<br>
Detect overflow:

- add
- add immediate
- subtract

do not detect overflow:

- add unsigned
- add immediate unsigned
- subtract unsigned

<br>

only 32 registers, if you dont have space in registers you have to go to memory.
<br>

transfer from memory to register:

C code:

```
  int A[100];
  g = h + A[3];
```

mips:

lw = load word

```
  lw $t0, 12 ($s3) #Temp reg $t0 gets A[3]
  add $s1, $s2, $t0 # g = h + A[3]
```

<br>

s3 is a pointer to the beginning of the A array

offset is 12 (offset is in bytes) so it fast fowards 12 bytes in array or 96 bits 96/32 = 3 (32 is size of int) , have to increment base by the size of the datatype.

<br>

transfer from register to memory:

C code:

```
  int A[100];
  A[10] = h + A[3];
```

mips:
sw = store word

```
  lw $t0, 12 ($s3) #Temp reg $t0 gets A[3]
  add $t0, $s2, $t0 # temp reg $t0 gets h + A[3]
  sw $t0, 40 ($s3) # A[10] = h + A[3]
```

<br>

In addition to word data transfers
mips has byte data transfers:

-load byte: lb
-store byte: sb

same format as lw, sw

lbu for unsigned.

<br>

speed of registers vs. memory

smaller is faster with registers.
registers are 100-500 times faster than memory.

mips if statement:

```
  beq register1, register2, L1
```

means: go to statement L1 if value in register1 == value in register2

otherwise got to next statement

beq = branch if equal

<br>

branch - change of control flow

conditional branch - change control flow depending on outcome of comparison

<br>

branch if equal (beq) or branch if not equal (bne)

<br>

unconditional branch - always branch

jump (j)

### L6

### L7

### L8

## LABS

### LAB 2

### LAB 3

### HW 1

### HW 2

### READINGS

#### 2.1

### 2.2

### 2.3

### 2.5

### 2.6

### 2.7

### 2.8

### 2.9

### 2.10

### 2.12

### A.1-A.4

### A.6
