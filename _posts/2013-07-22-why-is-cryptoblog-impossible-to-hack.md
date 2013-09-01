---
layout: post
title: "Why is CryptoBlog impossible to hack?"
description: ""
category: 
tags: []
---
{% include JB/setup %}

So the other day I introduced [cryptyblog](/2013/07/cryptoblog/) with much fan
fare. And the most important property of cryptoblog is that it is impossible to
"hack", and I would like to talk about that here.

Lets start with the definition of "hack". For the purpose of this post,
"hacking" a blog can mean either of two things:

1. Some individual defaced the site, changed any of the content, without the
author knowing about it. Used the site to misrepresent the views of the author,
or used the website to phish, or distribute malware etc.

2. The second possibility, and the possibility I am more concerned about is,
the author himself tries to pull a fast one, triesto change the content of the
website without the readers being aware of it.

#### Setup of this blog

This blog is hosted on github pages, a free hosting service, by a reasonably
trusted player. In github pages, as long as one does not "hack" github itself,
the only way to modify the content of this site is my making a commit in git
repository for this site.

This opens two questions, how can my reader be sure that the website is indeed
hosted by github pages?

This is relatively easy, if you trust github, then you can visit their [custom
domain
instruction](https://help.github.com/articles/setting-up-a-custom-domain-with-pages),
and you will see this:

<img src="/static/images/github-custom.png" class="hcenter">

And doing a "dig amitu.com +nostats +nocomments +nocmd" on my site, you will
see:

<img src="/static/images/amitu.com-dig.png" class="hcenter">

With this you can verify that my site is going to github pages.

Now to the second question: how can one be sure that github itself is not
hacked, may be github employees are involved.

This is quite interesting, and you should never trust any corporation, no
matter how trustworthy they appear on face. So how do bring in trust in this
environment where trust is to difficult.

#### Cryptoblog on your machine

Lets first cut the middleman, github. Github pages is just a convenient way to
access this blog. The moment you suspect something is fishy, please forgo the
convenience, and do a little bit of work to recreate this blog on a machine you
trust.

This blog is powered by something called [jekyll](http://jekyllrb.com/), so
here is what you will have to do:

{% highlight bash %}
$ gem install jekyll
$ git clone https://github.com/amitu/amitu.github.com.git
$ cd amitu.github.com
$ jekyll serve
{% endhighlight %}

With these four commands you have installed the software powering my blog,
*and* downloaded the entire history of this blog, all the posts, images etc.
And a local copy of this blog will not be available to you, just open
http://localhost:4000 in browser.

With this you can verify that the content of amitu.com is same as what you see
on your local machine.

#### Git to rescue!

You will then say that you are still trusting github.com, because this is where
you have downloaded my blog from.

This is where the power of git, cryptographic hashes, and maths come to rescue.

See, you are not trusting github.com when you are downloading my blog from
there, you are trusting git. Git lets you see the latest "hash" of my blog. Eg

{% highlight bash %}
$ git log -1
commit a87b1a57640af59753273cfaf18baed16970090b
Author: Amit Upadhyay <comments@amitu.com>
Date:   Thu Jul 18 22:49:43 2013 -0700

    minor
{% endhighlight %}

You see this string "a87b1a57640af59753273cfaf18baed16970090b", it is a bit
hard to prove, but there are many [sources on
internet](http://www-cs-students.stanford.edu/~blynn/gitmagic/ch08.html) that
can help you understand how it is true, suffice it to say, this string of
number in itself can not be the same if the entire history is not the same.

In other words, git log will never show
"a87b1a57640af59753273cfaf18baed16970090b" unless the history is intact, and if
someone modifies the history in any smallest way, the end result would be a
string that is completely different. This property lies at the core of bitcoin,
ssl, https, this property is the reason internet banking can happen.

#### What does it all mean?

The content of this blog can not be modified, without leaving a trail. I can
never say something on this blog, and later on deny that I did not say it. It
is not just difficult, it is impossible, neither can I do it, nor the president
of United States if he had a cryptoblog.

It is a common habit of politicians to lie, to change what they said
afterwards, to claim they have been misquoted. If you demand you politican to
commit everything on a cryptoblog, the politician will never be able to take
anything back.
