---
title: "00: Getting Started With Scheme"
date: "2020-04-19T22:12:03.284Z"
description: "In this article we will get the UCB STK interpreter for Scheme up and running on MacOS."
topic: "teachyourselfcs"
subCat: "programming"
---

This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00-getting-started/).

## Plans for this series

I will be reading through the recommended book for learning programming [Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html).
I will also be going through the suggested course associated with the book, by watching the [lectures](https://www.youtube.com/watch?v=4leZ1Ca4f0g&list=PLhMnuBfGeCDNgVzLPxF9o5UNKG1b-LFY9) and completing the associated labs found on the [calendar](http://inst.eecs.berkeley.edu/~cs61a/su10/index.html).
You can find my github repository associated with the course [here](https://github.com/brookspoltl/sicp).

## Getting Setup

To get started with the course you will have to download the UCB STK

### Step 1:

Go [here](http://www-inst.eecs.berkeley.edu/~scheme/precompiled/OSX/) and you will find a link. Click the link, and after opening you should be prompted with an install wizard.<br><br>
![intaller](/installer.png)<br>

### step 2:

Unless you have a very old machine you won't have X11 installed on your machine. You can download X11 [here](https://www.xquartz.org/index.html).

### step 3:

Moment of truth. Open up a terminal and type `stk-simply`<br><br>![command-line](/stk-simply.png)<br>

It is worth noting that stk-simply is built on top of STK and is created by UCB for this course. If you accidentally try running a program you see in class with the command `stk` you won't have access to the same functions that lecture uses. <br><br>

You have the option of writing Scheme programs straight in the command-line, or you can create `.scm` files and load them like in the picture above.<br><br>

Thank you for following this guide and see you in the the next installment of the series.
