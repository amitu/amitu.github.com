---
layout: post
title: "On WebApps and Passwords"
description: ""
category: 
tags: []
---
{% include JB/setup %}

So you building a new webapp. It will require authentication. Which usually has
passwords. Now passwords need storage, and everyone tells you clear passwords
are bad idea. This is obvious. But for a modern webapp the answer on how to
hash is not obvious.

#### Slow vs Fast hash tradeoff

The traditiona/unix philosophy on this topic has been to use a hashing
algorithm that is slow. So if someone gets hold of your hashed passwords, it
takes really long for them to do a brute force attack on them. bcrypt is one
such algorithm. It takes a matter of 100s of milliseconds to compute.

But this philosophy has one problem: what if you want to release an API?

Unix passwords were entered by only a few user but for a successful next
twitter, the authentication would then kill you. You can also not easily change
hash function used to encrypt your passwords (a note, django mentions the hash
function used in the password, which is very good practice as it allows you to
change hash function over a period of time). SHA1, the hash used by default by
django, is designed to be fast.

#### Salting

To understand what salt does: if I stole a 1 million password hashes, without
salt, and I know the hash function. Lets assume that total number of possible
passwords a user could have picked is 1 billion. I can do a brute force
dictionary attack and generate hashes of all these billion passwords. Lets say
it take 1 hr to generate 1 billion hashes. So in one hr, plus the matching
time, I would crack all passwords.

With salting, I need not just the hashes and hash function, but also the
salting strategy, in case of django it is to prepend some secret key with
password. If I do not have the secret key, the stolen hashes are of no use. If
I do know the secret, then back in 1hr I have all the passwords.

#### User specific salt

One way to make things more secure is to include per user immutable data as
part salt when hashing password. While in general people are discouraged to use
creativity when implementing security, being creative in picking salt can be a
good thing. Just make sure its immutable/predictable.

With per user salt, then cracker will have to generate billion of hashes for
each user. This means it will take me 1 million hours to get all million
passwords.

#### Recap

1. Hash passwords
1. Salt hashes with secret keys
1. Per user salts
1. Include hash strategy hint in password so it can be changed in future
