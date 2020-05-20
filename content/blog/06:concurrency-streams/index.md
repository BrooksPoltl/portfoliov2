---
title: "06: Concurrency and Streams"
date: "2020-05-16T22:12:03.284Z"
description: "Part 6 of CS61A Structure and Interpretation of Computer Programs"
topic: "teachyourselfcs"
subCat: "programming"
---

This article is a part of a series where I go through [teachyourselfcs](https://teachyourselfcs.com/).
If you would like to start at the beginning start [here](https://bpp.dev/articles/teachyourselfcs/programming/00:getting-started/).

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
mutex: object that attemps to aquire and realease

##### L33

##### L34

##### L35

##### L38

##### L39

#### LABS

##### LAB 6B

(lab 6A is related to logo project).

#### READING

##### 3.4

##### 3.5
