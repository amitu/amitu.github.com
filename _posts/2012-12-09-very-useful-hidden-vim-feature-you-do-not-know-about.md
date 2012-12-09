---
layout: post
title: "Very Useful Hidden ViM Feature You Do Not Know About"
description: ""
category: 
tags: []
---
{% include JB/setup %}

You can use vim as a pager or syntax highlighting viewer for content from web.

{% highlight bash %}
$ vim http://amitu.com/javascripts/quotes.js
{% endhighlight %}

ViM downloads the file using curl and opens it in readonly mode.
