---
layout: post
title: "7 Areas Where Golang Shines"
---
{% include JB/setup %}

Programming, like any other engineering is all about picking the right tool for
the right job. No single tool is good for all kinds of requirements, and people
who paint themselves in any given technology, like python only, or ruby only, or
java/.NET only, are making a mistake.

A good programmer, like a good engineer is comfortable with a variety of tools.

The newest tool I have been loving these days is golang, and during my brief
experience with it I find it pretty good tool for the following use cases.

## 1. Git, or any command line tool

Git is written in C. There is no reason it could not have been written in
golang. Writing the next git in Java or .NET is not an option. Java startup is
insanely slow compared to the speed I expect from git commands, which one runs
hundreds and thousands of times a day. Java is also not easy to distribute, many
systems don’t have proper java installed, and java is a massive dependency.
Similarly with .NET. Linus would never touch these languages by a 100ft pole.

Then comes ruby and python, and these languages suffer from distribution
problem, as well as speed problem. Quite a few of the core git operations are
very performance intensive, and if you want to implement git in python, you will
be implementing a lot of it in C.

Golang is the perfect language for the next Git like tool. It has already won in
this department. Github’s hub tool has been rewritten in golang. Lots of cli
tools distributed by mongo are written in golang.

If you are writing a command line tool, cross platform, right now picking any
language other than golang is nearly stupid.

Think about the next ls, the next zsh the next ssh, the next ftp. Golang is the
right tool for these all.

## 2. The next Redis or even PostgreSQL

Languages like Java/.NET can be a contender for redis/postgresql, but they do
not win out because of the redistribution issues. Golang is low level enough to
give C a competition for next Redis/PostgreSQL.

Making it in golang instead of C makes it much easier for developers to work in
these projects, as otherwise C poses a huge barrier to entry, you hear very few
people thinking about modifying redis or postgresql for their needs. Go lang
would have made it more accessible.

## 3. Nginx

Nginx sits in front of most web applications, and today its nearly a wastage to
run nginx instead of a golang based proxy. You will see more and more projects
that would come up as feature implemented through custom reverse proxy.

For example, imagine if nginx, along with passing the request to backend app in
rail, also passed cache values for pre configured cache key per URL pattern.
This will save request to memcache, which is fast, but a useless thing. Golang
proxy instead of nginx can act as memcache.

Or consider the rate limiting work done by these guys, they have custom rate
limiting proxy server sitting before their api backend servers. Doing that in
golang is trivial, and nearly no other language encourages you to write such
tools like go.

You want to logging or event to statsd? Why not add some headers to response and
let a go proxy ship it to the right place, never having to worry about adding
another gem or writing any custom code.

## 4. API Apps

There are a bunch of apps cropping up which are purely API servers. Google
analytics, to ads, to Disqus, to Uber, to Evernote sync server to Dropbox to
Apple Push notification service.

All of these use HTTP, but none of these will benefit from Ruby on Rails or
Django. The entire app is just a few APIs, and the APIs are hammered like crazy,
performance is the most important aspect. C speed is a virtue in such domains.

On the other hand, writing monolithic or otherwise mega enterprise app servers
is a bad idea as it makes things inaccessible to developers. Golang is the
perfect language as if you really had to, you can get Django like productivity
with Go frameworks, and if you needed you can get nearly C like performance.

## 5. Browser Extensions

Golang with gopherjs today is an excellent tool for building browser extensions.
There are very few language to give it a competition, you were not going to
write them in Java or Ruby anyways. Javascript is a bad language for many
reasons. And not having to write it is a huge advantage. Gopher is a very active
community, and developing like there is no tomorrow.

For extensions it does not matter much if you have pay 100kb extra, but the
benefits of robustness that comes with compiler type checks, the superior
channel/go routine based architecture instead of callback hells.

## 6. Realtime Game Backends

Game backends have unique requirement of “be fast”, “handle many many connected
clients, the c10k problem”, have zero memory leaks, as well restarting nodejs is
no fun, and “fun to program”, as after all if building game is not fun, the
frustration of builders will eventually leak out to game players.

You are not going to build game backends in Ruby etc. Java is an ok language for
this. But golang is even better. Go’s http/websocket make solving c10k problem a
child’s game.

## 7. (In near future) Mobile Games

We are not here yet, may be in a few months. Golang already has good OpenGL-ES
support, which works well on Android and Web, how many languages you can boast
that for? Google is seriously putting their behind making golang work with
Android. And they are also making progress on iOS.

Porting native UI across platforms is difficult, but if your app/game just has a
bunch of sprites getting moved around based on touch and some physics may be,
which is the case with most games, golang is very soon going to be a native
speed alternative to Javascript/ObjectiveC/Java nightmare. Cross platform fun,
without sacrificing on FPS, which is most important consideration for games.

## Conclusion

Golang is a good tool. Add it to your arsenal.

