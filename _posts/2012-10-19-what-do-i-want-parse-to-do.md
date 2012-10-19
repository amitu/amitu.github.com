---
layout: post
title: "What do I want Parse to do?"
description: ""
category: 
tags: []
---
{% include JB/setup %}

What is [parse](http://parse.com), why is it significant? It allows
HTML/JavaScript developers to write fully functional web apps without any
backend at all. And because [phonegap](http://phonegap.com/) webapp therefore
mobile apps.

Some apps. Not all.

Why not more apps? This is the question. What do we need that is
required but parse does not or can not provide?

First of all we need hosting. [GitHub](http://github.com) is awesome. But by
giving hosting parse can become a one stop solution. Here I am talking about
[GitHub pages](https://help.github.com/articles/what-are-github-pages) style
static hosting.

Then comes google. Google wants data in the page, and parse asks you
to fetch the data after page load. To make google happy we need a
degree of dynamism.

Here is what I propose: parse dynamic pages. Parse developers attach
URL regex with JavaScript callbacks. Parse engine matches the URL and
calls the callback. The callback calls parae api to fetch data and
uses django style rendering engine to render the page. Parse dynamic
engine only responds to GET requests.

That will make me happy. And an unlimited credit for their service for
my personal apps.

PS: Can parse do server side javascript evaluation of scripts supplied by
untrusted developers? [They already
do](https://www.parse.com/docs/cloud_code_guide).

