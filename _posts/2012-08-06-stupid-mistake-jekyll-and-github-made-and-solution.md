---
layout: post
title: "Stupid Mistake Jekyll and GitHub Made (And Solution)"
description: ""
category: 
tags: []
---
{% include JB/setup %}
#### Background

[Github](http://github.com) has an excellent feature called
[pages](http://http://pages.github.com/), that allows one to host and publish
static websites from any git repository on github. This is great for projects
to host a free project page. Github also allows and encourages github users to
host their personal static sites on github pages. They go to the extent of
allowing you to host your custom domains.

Managing static sites is a pain, and we meet
[Jekyll](https://github.com/mojombo/jekyll/), a static site generator designed
with blogs in mind. What jekyll does is it expects some special files and
folders with names starting with an underscore, and uses them to convert all
files in the current folder with .md extension into .html files. In folder
named \_posts, specially named .md files are used to create blog, with
categories and tags. Post meta data is stored in the .md files themselves at
the top. jekyll creates archive page, a list of all pages on the site, rss and
sitemap file and all.

Jekyll takes all the content, applies jekyll rules and plugins and generate a
static site and stores it in a folder named \_site.

#### The Mistake

Github ignores the \_site folder.

Github has jekyll of its own, and it insists on using its copy of jekyll to
generate \_site, or where-ever they store static files.

Github does it so you do not have to have jekyll installed on your machine, and
still be able to publish jekyll sites, so it assumes \_site may be out of date.


#### The Consequence Of The Mistake

The first problem with this decision is: jekyll plugins. Jekyll comes with a
wide range of [plugins](https://github.com/mojombo/jekyll/wiki/Plugins), but
jekyll copy of github wont load most of them.

There are ways to overcome this, instead of storing jekyll in the repository,
store the static compiled \_site in the repository and tell github that it is
not a jekyll repo.

This introduces complexities for developers. I have to now maintain two
different repositories or branches, I have to write [scripts to sync
them](http://charliepark.org/jekyll-with-plugins/) etc.  And it completely
defeats the point of support jekyll at github level.

If we look at a normal software build, we have Makefile, we have src/\*.c etc,
and compiled output is stored in some special folder named "build" etc. What we
have with jekyll is very close to this, but not there.

#### Solution: Github Contract

This design decision to incorporate jekyll is bad compromise. I posit that
almost no jekyll based repository is maintained by someone without access to
jekyll on their local system.

So instead of github trying to take care of that use case (and the use case of
cases where a repository can be modified from web), github takes care of a much
better use case: site original files and built static sites being stored in the
same repo, which is a real pain point [faced by
people](http://stackoverflow.com/questions/6201339/a-clean-system-for-github-pages-with-local-plugins).

Here is my proposed github contract for pages: if a github pages repository
contains a folder named \_site, the http request to /any-url goes to file
/_site/any-url instead of the file /any-url.

If github does that then they can claim they have equal support for not just
jekyll but any static site generation system. I can use jekyll with my custom
plugins as easily as without them, or as easily as
[hyde](http://ringce.com/hyde) or even my own make files that takes index.md
and compiles it into \_site/index.html.

This simplifies github internal architecture, they do not have to worry about
compiling jekyll sites, and makes life easier for nearly every github pages
user, as we do not have to manage two repositories/branches.
