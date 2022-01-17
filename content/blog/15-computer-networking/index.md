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

## L2

The 4 Layer Internet Model:

- application
- transport
- network
- link

### Link

internet made of links and routers. Link is a connection between nodes.

### Network

Delivers packets end to end from the source to destination.

Internet Protocol makes best attempt to deliver our datagrams to the other end but does not make promises.

Datagrams can get lost can be delivered out of order and can be corrupted.

### Transport

If you need to ensure that the packets get there correctly and safely you need the transport layer.

TCP - Transmission Control Protocol. TCP will retransmit lost packets if necessary and ensures they are in correct order.

TCP is really good for web and email clients.

UDP - user datagram protocol. Doesnt ensure order and wholeness

### Application

The app running, when request are made they hand the request to the transport layer.

<br>

IP is the "thin waist" of the internet. Internet has many link layers, Ethernet, wifi, dsl 3g,
transport has TCP UDP RTP, but network layer only has 1 IP, making it easy to interface with when passing up and down layers.

<br>

7 layer internet model (replaced by 4 layer):

- 7 application
- 6 presentation
- 5 session
- 4 transport
- 3 network
- 2 link
- 1 physical

Most important thing is to remember numbers from 7 layer since still used to describe the layer.

Ethernet layer 2, application layer 7.
