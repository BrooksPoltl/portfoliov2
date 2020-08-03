---
title: "06: Concurrency and Streams"
date: "2020-07-21T22:12:03.284Z"
description: "Part 6 of CS61A Structure and Interpretation of Computer Programs"
topic: "teachyourselfcs"
subCat: "programming"
---

This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00-getting-started/).

#### LECTURES

##### L30

Client/Server programming
<br>
<br>

Have a host, connects with the "internet address".
Then you also have a port on that host to connect to.

<br>
<br>

Running out of internet addresses (4 bil), not because of 4 bil computers buts because of unassigned addresses.
<br>
<br>

To solve this ipv6 was created.
<br>
<br>

https: secure http
<br>
<br>

socket is an abstract datatype: 2 way internet connection.
<br>
<br>

three way handshake: client sends to server, server sends to client, client sends back to server.
<br>
<br>

##### L31

Your processer has memory inside of it to do computations with data very fast (ram). If second load called before first store happens you can get a concurrency issue.
<br>
<br>

Have to "lock out" the variable while it is being used.
<br>
<br>
Serializer: takes a procedure and returns a protected procedure.
Prevents procedures from overlapping.
<br>
<br>

Better to crash than to get wrong answer, because wrong answers pile up without you noticing them.
<br>
<br>

Inefficiency: not using parrallelism at all
<br>
<br>
Deadlock: 2 threads locked waiting for eachother to finish
<br>
<br>

unfairness: process A wins and process B can't win.

##### L32

Correct answer. Consistent within sequential order of the evaluated threads.
Same answer as no parallelism.
<br>
<br>

serial: one after the other
<br>
<br>

Most programs aren't programmed with deadlock in mind, because processes are very fast.
<br>
<br>

Figure out about the deadlock from thread maintenance in the database, then you kill one of the threads.
<br>
<br>

Resource starvation: several threads want resource. One thread keeps getting the resource.
<br>
<br>
mutex: object that attempts to aquire and release

##### L33

Duplicate video

##### L34

memoization: remembering result of expression and using that to build the next expression.
<br>
<br>

Stream uses JIT (just in time) to where it calculates the value whenever it is needed.
<br>
<br>
Only use streams if program is functional.
<br>
<br>
Parts of the interpreter and computer are non-functional, but they provide a layer of abstraction at the program level that allows for safe multiprocessing if you write a functional program.

##### L35

Therac-25
<br>
Software that had a bug that caused some cancer patients to die of overdose.
<br>
<br>

Software doesnt degrade, but has problems with reliability because of the amount of possibilities that could go wrong that the real world doesnt have. Many layers of abstraction create a black box that can have underlying problems.
<br>
<br>

No limit to how complicated a software program can get.
<br>
<br>

Therac was multithreaded, must do error checking.
<br>
<br>

There were error messages that werent really errors, when a real error occurs operators will bypass because it is likely not a big deal.

<br>
<br>

Documentation, didn't help people understand issues that happened.
<br>
<br>

Initially people thought it was operator error since the machines most of the time (we know concurrency issues can cause this). Sometimes it actually was operator error, but it was because of poor user interface design and bad error messaging.
<br>
<br>

They found error and fixed it, but just because you found a real error doesn't mean more errors can't be within the program. They shipped the bugfix without extensive testing to make sure the issue is really resolved.

##### L38

mapReduce is really mapSortReduce, sorts one value then reduces it.
<br>
<br>
groupReduce: accumulates all values of a key.

##### L39

find most common word in song. Want to do with multi processing,
find most common word for each starting letter. can use single processer to check the 26 results that the multiprocessed calculation gets.

#### READING

##### 3.4

Referential Transparency: The ability to replace a subexpression with the values.
<br>
<br>
Several processes can attempt to access same state variable, this makes order matter, so you have to use sequential order.
<br>
<br>
example of multiprocessing complications:
2 processes of 3 ordered events. There are 20 possibilties of how these events can be executed. Programmers must think about all possibilties. This creates huge complications when thinking about an entire system.
<br>
<br>
serialization: Processes will execute concurrently, but some will collections will be done sequentially. While the procedure is being executed it locks out other procedures from being able to access it.
<br>
<br>

Deadlock: 2 procedures stalled because they rely on eachother to finish the procedure.

##### 3.5

Delayed evaluation: allows ability to represent a very large sequence as streams.
<br>
<br>
If large amounts are represented by a list it can create huge problems with both time and space complexity.
<br>
<br>
Delay: packages an expression into a procedure that it can call later.
<br>
Force: calls the procedure that delay creates
