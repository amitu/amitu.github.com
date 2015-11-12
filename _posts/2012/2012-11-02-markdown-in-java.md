---
layout: post
title: "Markdown in Java"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Here is a note to future self about using markdown in java.

There are two pure java libraries I found:
[pagedown](https://github.com/sirthias/pegdown) and
[markdownj](http://markdownj.org/quickstart.html).

Pagedown usage:

{% highlight java %}
PegDownProcessor mp = new PegDownProcessor();
String html = mp.markdownToHtml(markup);
{% endhighlight %}

Pagedown has a dependency on
[parboiled](https://github.com/sirthias/parboiled/wiki).

markdownj usage:

{% highlight java %}
MarkdownProcessor mp = new MarkdownProcessor();
String html = mp.markdown(markup);
{% endhighlight %}

markdownj is pure java library with no dependencies. 

And there is always [strapdownjs](http://strapdownjs.com/), a pure
javascript/client side implementation.

