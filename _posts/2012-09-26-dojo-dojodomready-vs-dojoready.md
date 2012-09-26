---
layout: post
title: "Dojo: dojo/domReady! vs dojo/ready"
description: ""
category: 
tags: []
---
{% include JB/setup %}

[Dojo](http://dojotoolkit.org/), my javascript library of interest these days,
has one stumbling block for beginners, the distinction between
[dojo/domReady!](http://dojotoolkit.org/reference-guide/1.8/dojo/domReady.html)
plugin and
[dojo/ready](http://dojotoolkit.org/reference-guide/1.8/dojo/ready.html)
module.

dojo/domReady! is used in all the examples and is considered equivalent of
[jquery.ready](http://api.jquery.com/ready/) method.

This:

{% highlight javascript %}
$(function() {
    console.log("DOM ready");
});
{% endhighlight %}

is equivalent to:

{% highlight javascript %}
require(["dojo/domReady!"], function() {
    console.log("DOM ready");
});
{% endhighlight %}

The problem is that dojo has a concept of modules that can be loaded on demand,
and dojo loads them asynchronously, which means your application initialization
has to wait for DOM to get ready, as well as wait for all modules to become
available.

For this functionality, there is "dojo/ready". Equivalent code would be:

{% highlight javascript %}
require(["dojo/ready"], function(ready) {
    ready(function(){
        console.log("DOM is ready and all required modules are loaded");
    });
});
{% endhighlight %}

One of the common beginners error in dojo is using "dojo/domReady!" when using
dojo\'s [declarative
syntax](https://dojotoolkit.org/reference-guide/1.8/dojo/parser.html). Widgets
that are initialized by declaring them in HTML, they "become available" after
"dojo/parser" and widgets referenced in HTML are loaded. Further "dojo/parser"
first waits for DOM to become available, and then it starts processing the
HTML. When using domReady!, the callback is called while parser is doing its
thing, and widgets may not be ready yet.

So which to use? "dojo/domReady!" is slightly less code, and slightly more
"aesthetic", and may be used when doing something complex, and not using
dijit widgets, or relying on dojo\'s autoparser. For anything else use
"dojo/require".

Here is an [interesting
thread](http://dojo-toolkit.33424.n3.nabble.com/A-Blank-Canvas-td3989993.html#a3990000)
on dojo\'s mailing list about this.
