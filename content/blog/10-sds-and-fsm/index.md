---
title: "10: Synchronous Digital Systems and Functional Units"
date: "2020-08-15T22:12:03.284Z"
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

46:41

### L10

### L11

## HW

### HW 3

### Project 1

## READINGS
