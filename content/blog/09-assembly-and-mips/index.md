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

Machine code is lowest level of software.

words and vocabulary are called instructions and instruction sets respectively

mips is example RISC instruction set

rigid format 1 operation, 2 operands, 1 destination

example operations:

- add
- sub
- mul
- div
- and
- or
- sll
- srl
- sra

operations to move data around registers and memory:

- lw
- sw
- lb
- sb

operations for decision/ flow control:

- beq
- bne
- j
- slt
- slti

program is stored as a bunch of bytes

mips instruction 32 bits or 4 bytes

Assembler converts assembly to machine code.

assembly code has .S extension machine code object has .o extension

machine code executable file has a .out extension

<br>

if a branch is false you go to next instruction else you jump to the given instruction (conditional branch).

unconditional branch: Always go to the "label"

<br>

C code

```
  if (i == j)
    f = g + h;
```

mips code

```
  bne $s3, $s4, Exit # notice this is not equal, if false this goes to next line which is add
  add $s0, $s1, $s2
```

<br>

C code

```
if (i == j)
  f = g + h;
else
  f = g - h;
```

mips code

```
  bne $s3, $s4, Else
  add $s0, $s1, $s2
  j Exit
  Else: sub $s0, $s1, $s2
  Exit:
```

<br>

The jump is needed to jump over the else code, and go to whatever the next line of code is.

interpreted: compiled at run time, so as a line of code is being executed it compiles to assembly.

<br>

C code

```
  if (g < h)
    goto Less;
```

mips code

```
  slt $t0, $s0, $s1
  bne $t0, $zero, Less
```

<br>

slt = set on less than

set means change to 1.

reset means change to 0.

sltu = treats registers as unsigned

slti = immediates

<br>

Six Fundamental Steps in Calling a Function:

1. Put parameters in a place where function can access them
2. Transfer control to function
3. Acquire (local) storage resources needed for function
4. Perform desired task of the function
5. Put result value in a place where calling code can access it and restore any registers you used
6. Return control to point of origin since a function can be called from several points in a program.

Function call conventions

- Registers faster than memory, so use them
- $a0 - $a3: four argument registers to pass parameters
- $v0-$v1: two value registers to return values
- \$ra: one return address register to return to the point of origin

C code

```
  int sum (int x, int y) {
    return x + y;
  }
```

mips code

```
  address (shown in decimal)
  1000 add $a0, $s0, $zero          # x = a
  1004 add $a1, $s1, $zero          # y = b
  1008 addi $ra, $zero, 1016        # $ra = 1016
  1012 j sum                        # jump to sum
  2000 sum: add $v0, $a0, $a1
  2004 jr $ra #new instruction
```

jal = jump and link

laj = link and jump

link = form an address or link that points to calling site to allow function to return to
proper address.

jr = jump register

\$sp = stack pointer

Where are old register values saved to restore them after function call?

ideally they are in the stack.

<br>

push: placing data onto stack

pop: removing data from stack

stack in memory so need register to point to it (\$sp register 29 in mips)

when adding \$sp decrements to add more space

when removing \$sp increases to decrease space.

<br>

C code

```
  int leaf_example (int g, int h, int i, int j)
  {
    int f;
    f = (g + h) - (i + j);
    return f;
  }
```

paramerter variables g,h,i,j in $a0, $a1, $a2, $a3

f in \$s0

1 temp register \$t0

<br>

mips code

```
  addi $sp, $sp, -8      # adjust stack for 2 items
  sw $t0, 4($sp)         # save $t0
  sw $s0, 0($sp)         # save $s0

  add $s0, $a0, $a1      # f = g + h
  add $t0, $a2, $a3      # t0 = i + j
  sub $v0, $s0, $t0      # return value (g+h)-(i+j)

  lw $s0, 0($sp)         # restore register $s0 for caller
  lw $t0, 4($sp)         # restore register $t0 for caller
  addi $sp, $sp, 8       # adjust stack to delete 2 items
  jr $ra                 #jump back to calling routine
```

<br>

What if function calls another function?

have to save the outer functions return address so the inner function can return there.

<br>

in C there are 3 import memory areas:

- static
- heap
- stack

<br>

mips divides registers into 2 categories:

1. Preserved across function call ($ra, $sp, $gp, $ , "saved registers" $s0-$s7)
2. Not preserved ($v0, $v1), argument registers $a0-$a3, temp $t0-$t9

c has 2 storage classes:

automatic: variables are local to function and discarded
staic: variables exist across exits from and entries to procedures

<br>

use stack for automatic (local) variables that dont fit registers

<br>

procedure frame or activation record: segment of stack with saved registers and local variables.

### L7

C has 2 storage classes: automatic and static

- Automatic: variables are local to function and discared when function exits
- Static: vairables exist across exits from and entries to procedures

use stack for automatic (local) variables taht dont fit in registers

procedure frame or activation record: segment of stack with saved registers and local variables

some mips compilers use a frame pointer (\$fp) to point to first word of frame.

\$gp: global pointer points to start of static data.

heap: dynamic data, grows and shrinks depending on when you allocate and free memory.

<br>

![mips registers](/mipsRegisters.png)

<br>

26 and 27 used by the operating system.

register 1 is used by assembler.

<br>

stored-program computer

- instructions are represented as bit patterns - can think of these as numbers
- therfore, entire programs can be stored in memory to be read or written just like data.
- can reprogram quickly (seconds), dont have to rewire computer (days)
- know as the "von neumann" computers after widely distributed tech remort on EDVAC project

<br>

Everything addressed

- since all instructions are stored in memory everything has a memory address: instructions, data words
- c pointers are just memory addresses: they can point to anything in memory

- one register keeps address of instruction being executed: "Program Counter" (PC)

### L8

MARS - mips simulator, allows you to run mips code on x86 or other architecture machine.

<br>

#### Running a program (compiling, assembling, linking, loading)

Interpreter: program that executes other programs.

Language translation gives us another option.

In general we interpret a high level language when efficiency is not critical and translate to a lower-level language to up performance.

interpreter executes program in the source langauge

translator converts a program from source language to an equivalent program in another langauge

example of interpreted language: python, javascript

Can be useful to interpret machine language for learning/debuging.

Translated/compiled code almost always more efficient.

![compilation steps](/compilationSteps.png)

<br>

compiler takes high level code and returns assembly

assembler turns assembly code to object code

<br>

multiplication: 32 bit \* 32 bit = 64 bit value (in mips)

`mult register1, register2`

puts result in special result register

puts upper half in hi, lower half in lo

hi and lo are 2 registers separate from 32 general purpose registers.

use mfhi register and mflo register to move from hi, lo

C code

```
a = b * c
```

mips code

```
  mult $s2, $s3
  mfhi $s0
  mflo $s1
```

division:

`div register1, register2`

C code

```
  a = c / d;
```

mips code

```
  div $s2, $s3
  mflo $s0
  mfhi $s1
```

assembler goes through assembly code twice,
first to get labels, second to setup code

## LABS

### LAB 2

### LAB 3

### HW 1

### HW 2

## READINGS

### 2.1 Introduction

instruction sets are very similar to each other. Similar to SQL in that if you
learn one instruction set it is very easy to pick up another.

<br>

computer designers are focused on writing instruction sets that are easy
as well as cost and energy efficient.

<br>

stored-program concept: many data types can be stored as a number.

### 2.2 Operations of the Computer Hardware

Every computer must be able to perform arithmetic. You can chain aritmetic operations
for example since add is stored to a variable you can set that variable again with the
sum of the previous operation plus the next value.

<br>

Design principle 1: simplicity favors regularity.

Java compilation done later than C compilation (just in time compilation or JIT).
s

### 2.3 Operands of the Computer Hardware

Operands are limited in instructions, they must be a part of the register which is 32 bits also known as a "word". There are 32 32 bit registers.

<br>

Design principle 2: smaller is faster.

<br>

The farther electronic symbols have to travel the longer it takes.

<br>

There is also a need to move data from registers to memory, these are called data transfer instructions. Memory is just a large sigle dimensional array with the
address being the index.

<br>

Words must start at addresses that are multiples of 4.
This is common and called an alignment restriction.

<br>

Many programs use more variables than there are registers so more frequently used variables are stored in registers and less frequent are stored in memory. This is called "spilling registers".

### 2.5 Representing Instructions in the Computer

Format for instructions in decimal:

```
add $t0, $s1, $s2
#decimal
0 | 17 | 18 | 8 | 0 | 32
#binary
000000 | 10001 | 10010 | 01000 | 00000 | 100000
```

the left and right indicate the instruction to perform.

<br>

Notice that the left and right are both 6 bits instead of 5. The sum of all of these bits
is 32 to represent the size of a single word. Each one of these columns in a single row represents a "field". The second and third field represents the operands which are $s1 and $s2 respectively. The fourth represents the register that receives the output. The fifth is unused here which is why it is set to 0.

<br>

To distinguish from assembly the numeric representation of the instruction is called
"machine language".

<br>

Hexadecimal is very easy to convert to binary. Since hexadecimal is base 16 and binary is base 2. You convert by grouping together 4 bits and converting it to its hexadecimal equivalent.

```
11100001 = E1
1110 = E # first four
0001 = 1 # last four
```

C and Java use 0xnnnn notation for hexadecimal.

<br>

Further breakdown of instructions:

```
# register format or r-type or r-format

op | rs | rt | rd | shamt | funct

# op: Basic operation of the instruction aka opcode.
# rs: first register source operand
# rt: second register source operand
# rd: register destination operand
# shamt: shift amount
# funct: function or function code, selects the specific variant of the operation in the op field


```

Idealy we would like to keep all instructions the same size, but some require more than 32 bits given the above format
like lw (load word) since it includes constants.

<br>

Design Principle 3: Good Design demands good compromises.

<br>

This issue with constants has led us to the next instruction format:

```
# immediate format or i-type or i-format
# op, rs and rt remain the same size of bits.

op | rs | rt | constant or address (16 bits)
```

in a load word instruction the rt meaning changes to the destination field.

### 2.6 Logical Operators

A shift moves all of the bits in a word to the left or right leaving 0 in its place. These are sll and srl in mips (shift left logical and shift right logical).

<br>

There is also AND, OR, NOT, and NOR.

### 2.7 Instructions for Making Decisions

beq and bne (branch equal and branch not equal) goes to a statement if something is true. These are conditional branches there are also unconditional branches like jump, which will jump to a certain statement no matter what.

<br>

Most programming languages have a case/switch statement.
This requires a jump address table to jump to whichever instructions are true.

### 2.8 Supporting Procedures in Computer Hardware

A procedure has 6 steps:

- Put parameters in a place where the procedure can access them.
- Transfer control to the procedure.
- Acquire the storage resources needed for the procedure.
- Perform the desired task.
- Put the result value in a place where calling the program can access it.
- Return control to the point of origin, since a procedure can be called from several points in a program.

<br>

Registers are fastest place to hold data. There are 4 argument registers a0-a3, 2 value registers to return v0-v1, and 1 return address (ra). For procedures there is a specific instruction jal (jump and link) this jumps to the address and saves it in the return address.

### 2.9

### 2.10

### 2.12

### A.1-A.4

### A.6
