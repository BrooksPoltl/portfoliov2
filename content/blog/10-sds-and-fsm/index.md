---
title: "10: Synchronous Digital Systems and Functional Units"
date: "2021-05-28T22:12:03.284Z"
description: "Part 3 of CS61C Great Ideas in Computer Architecture"
topic: "teachyourselfcs"
subCat: "computer-architecture"
---

This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00-getting-started/).

## LECTURES

### L9

Hardware Design: how a modern processor is built,
starting with basic elements as building block.

Because Moore's law is ending there is higher demand for custom hardware. This was 5 years before apple silicon.

All computers we are building comprise of synchronous or digital systems.

<br>

Synchronous:
All operations coordinated by a central clock
"heartbeat" of the system.

Digital:

- Represent all values by discrete values
- Two binary digits: 1 and 0
- Electrical signals are treated as 1's and 0's
- 1 and 0 are complements of each other
- high / low voltage for true / false 1 / 0

#### switches

if switch is closed light is on if switch is open light is off (simple circuits).

if two switches is a line it creates an "and" because both must be on.

if two switches are parallel it creates an "or" because it can choose either one.

These basic switches can be used to create pretty much all of the logic of the computer.

Some gates (NAND and NOR) have functional completeness. Meaning they can be used to perform any other logic (I learned this from Nand2Tetris).

George Boole a mathematician came up with a lot of the theory that computer designers used fr circuits with true and false thats why they are called "Booleans".

#### Transistors

High voltage represents 1 or true, modern microprocessors its about 1 volt.
low voltage 0 volt or ground reprensets 0 or false.

CMOS: Complementary Metal-Oxide on Semiconductor

CMOS transistors act as voltage controlled switches.

Modern microprocessors have several billion transistors.

2 bit Adder needs 3 bits for overflow.

#### Boolean Algebra

Use plus "+" for OR

- "logical sum"

Use product for AND (a \* b or ab)

- "logical product"

"Hat" means complement (NOT)

#### Type of Circuits

Combinational Logic circuits:

- Output is a fucntion of the inputs
- E.g. ALUs

Sequential Logic:

- Circuits that "remember" or store information
- aka "State Elements"
- E.g. memories and registers

sequential logic uses the clock which basically snap shots the state
so the operation can be done without things changing out from under it.

### L10

Clock tells you when to move to next step.

Takes time when the clock ends its wave for the output to be represented (q delay).

max delay = CLK to Q Delay + CL Delay + Setup Time

Critical Path: the bottleneck of the delay. Designers look for these bottlenecks to improve them.

You can add a register to be able to do parrallelism, but have to be wary about the overhead of adding registers.

ALU: where the logic operations are executed.

### L11

Adder Truth table:

| ai  | bi  | ci  | si  | ci + 1 |
| --- | --- | --- | --- | ------ |
| 0   | 0   | 0   | 1   | 0      |
| 0   | 0   | 1   | 1   | 0      |
| 0   | 1   | 0   | 1   | 0      |
| 0   | 1   | 1   | 0   | 1      |
| 1   | 0   | 0   | 1   | 0      |
| 1   | 0   | 1   | 0   | 1      |
| 1   | 1   | 0   | 0   | 1      |
| 1   | 1   | 1   | 1   | 1      |

Have to account for a carry from the previous result so you can properly calculate the current sum.
<br>

Five Stages of Instruction Execution:

1. Instruction Fetch
2. Instruction Decode
3. ALU
4. Memory Access
5. Register Write

Processor Design: 5 steps

step 1: Analyze instruction set to determine datapath requirements.

step 2: Select set of datapath components & establish clock methodology.

step 3: Assemble datapath components that meet the requirements.

step 4: Analyze implementation of each instruction to determine setting of control points that realizes the register transfer.

step 5: Assemble the control logic.

## HW

### HW 3

### Project 1

## READINGS
