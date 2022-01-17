---
title: "computer networking"
date: "2022-01-08T22:12:03.284Z"
description: "notes from https://www.youtube.com/watch?v=qAFI-2I7wPE&list=PLoCMsyE1cvdWKsLVyf6cPwCLDIZnOj0NS&index=1"
topic: "teachyourselfcs"
subCat: "computer-networking"
---

## L1

Internet breaks data into packets and gets them to the right destination.

IP - internet protocol.

computers run applications locally and connect to eachother via the internet.

<br>

Byte Stream Model:

sets up a connection that allows two computers to read and write data to each other. Either is able to close the connection.

<br>

World Wide Web (HTTP):

uses client server programming. Client makes request in the browser and receives a response.

<br>

BitTorrent (BT):

Shares and exchanges large file.

Instead of client server connection, bittorrent allows clients to request data from other clients.

BT breaks files into pieces, a client downloads data then allows other clients to download that data as well.

BT has a tracker to know what other clients exist in the swarm (group of clients).

<br>

Skype:

Simple client server exchange,
except both are clients.

complications with this is a NAT (Network Address Translator).
If you are behind a NAT you can open connections but they can't connect with you.

This complicates things with Skype. What you can do is have a Rendezvous server, client a connects to server to talk to client b and if client b accepts its sends a connection request to client a.

If both have NATs skype has a relay server that acts as a intermediary between two clients.

<br>

all of these use bidirectional byte stream
