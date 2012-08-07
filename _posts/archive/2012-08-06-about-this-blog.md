---
layout: post
title: "About This Blog"
description: ""
category:
tags: []
---
{% include JB/setup %}

#### Background

This is my newest blog. I have been blogging since almost when the word
blogging was coined. My first blog was managed by blogger.com. Eventually came
a time when I got frustrated by blogger. One of my prime gripe was lack of
control over it, no proper way to handle one off static pages. Blogger is good
for a blog but not a site.

Being a web developer I did what is obvious next choice, wrote my own blogging
engine. I decided to forgo database for storing blog posts and instead stored
them in a git repo. I called in [gitology](http://github.com/amitu/gitology).

I made a mistake with that gitology. I tried to handle comments too with
gitology. This meant my blog had to be a dynamic site instead of a static html
site. I had to deploy my site on a django friendly host, limiting my options.

#### On Content

I wrote an import system that got my old posts out from blogger, but this lead
to be a problem instead. I have overgrown quite a few of the things, and the
old blog always put me in the old "place", and this lead to me not blogging at
all. So I decided to start afresh.

Archive.org has got my [old
blog](http://web.archive.org/web/20100115120330/http://www.amitu.com/blog/) in
wayback machine.

#### Latest Setup

For the blog I still want to use git repository concept. Which lead me to
[jekyll](http://jekyllrb.com/). There are a few alternatives,
[hyde](http://ringce.com/hyde)  being the most prominent one. Hyde is python
based, and jekyll ruby. I generally have a python bias, but for this time I
decided to stick with jekyll for its support by github.

I used [jekyllbootstrap](http://jekyllbootstrap.com/) as my starting point as
it comes with a theme I liked. A simple clone, and I could start after
modifying \_config file.

Only time will tell till how long will I stick with it. I love the design and
simplicity of the system so far. Though I am not yet sure what is the meaning
of jekyll being run by github.

