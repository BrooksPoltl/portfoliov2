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

TCP - Tranport Control Protocol. TCP will retransmit lost packets if necessary and ensures they are in correct order.

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

## L3

ip datagrams = ip header + ip data

internet protocol (network layer) sends ip data to the link layer.

IP Service Model:

- datagram (individually routed packets hop by hop)
- unreliable (packets might get dropped)
- best effort
- connectionless (sequence is not gauranteed)

header contains SA (source address) and DA (destination address)

This service model was built to keep low assumptions and to let the applications decicde what features matter to them.

### IP Service Model Details:

#### tries to prevent packets from looping forever

has a hop header and a TTL (time to live) to prevent infinite looping.

#### Fragments packets that are too long

Some links can only carry small packets so IP service breaks big packets into smaller ones.

#### uses a header checksum to reduce chances of delivering datagram to wrong destination

can cause security problems if packets keep showing up in the wrong place.

#### Allows for new versions of IP

- currently IPv4 with 32 bit addresses
- and IPv6 with 128 bit addresses

#### Allows for new options to be added to header

can add features to header that werent in original spec.

<br>

IPv4 Datagram:

- destination IP Address
- source IP Address
- Protocol ID (what type of protocol is inside the data field)
- version (IPv4 and IPv6)
- Total Packet Length (64kb max)
- TTL (time to live prevents infinite loops, router decrements field and if it reaches 0 destroys the packet)
- Packet ID
- Flags
- Fragment Offset (to be covered later)
- Type of Service (how important the packet is)
- Header length (optional fields for extra information)
- Checksum (just in case header is corrupted)

## L4

application: stream of data

transport: segments the data

network: packets of data

TCP handles almost all trafic, has client and server.

Server listens for connection request. Client issues connection request and server responds.

3-way handshake:

1. client sends synchronize message "syn"
2. server responds synchronize and acknowledge "synack"
3. client acknowledges "ack"

IP Address = network layer address
TCP port = transport layer address

in wifi connection first hop to router is the WAP (wireless access point). then goes through routers wired together.

A router can have multiple links. Forwarding table has patterns and decides which link matches packet.

cool demo of 3 way handshake at 5:24

https://www.youtube.com/watch?v=UrXwobct70M&list=PLoCMsyE1cvdWKsLVyf6cPwCLDIZnOj0NS&index=4

## L5

### Packet switching

packet: self contained unit of data that carries information necessary for it to reach its destination

packet switching: independently for each arriving packet pick its outgoing link, if the link is free, send it.
Else hold the packet for later.

source routing: source specifies the path to the destination, this is bad because of security risk.

routers store a small amount of state that tells the router where to send packets to.

1. simple packet forwarding
2. Efficient sharing of links

Flow: a collection of datagrams belonging to the same end-to-end communication. e.g. a TCP connection.

Packet switches dont need state for each flow, each packet is self-contained.

## L6

### Layering

layering is the name given to the organization of a system into multiple layers. Layers communicate with the layer above and below them.

sometimes you have to break layer bounds, can cause huge issues. e.g. NATS make it hard/impossible to add new transfer protocols.

### Reasons for layering

- Modularity
- well defined service
- reuse
- separation of concerns
- continuous improvement
- p2p communications
