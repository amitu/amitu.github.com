---
layout: post
title: "dojo/text! Plugin And undefined Build Issue"
description: ""
category: 
tags: []
---
{% include JB/setup %}

#### Dojo is awesome

Dojo is an awesome javascript library. The reason it is really awesome is
because it reminds us that programming is hard, and asks us to respect the
hardness of web programming, and helps us solve the hard parts.

jQuery on the other hand wants you to believe things are easy, just include a
script node and a few lines and voila! animation. A few lines of code is indeed
easier in jquery than dojo, but no one in their sane mind will build
gmail/facebook etc with jquery. Sure they may use jquery as a little piece in
their toolbox, but they would end up re-inventing most of dojo.

#### About this post

This post is about one feature that makes dojo shine, and a bug in their
implementation of that feature and a workaround for that.

#### Dojo build system

That feature is build system. Dojo comes as a zip containing more than 9000
files, with more than 4000 of them being javascript files. It is not uncommon
for a simple hello world project including only a few features of dojo to end
up requiring more than 200 dependencies.

To solve this dojo comes with a build system that takes application description
file, and creates a minified, dojo.js that includes all the 200 or 4000
javascript files.

The best part of this build system is that it can build not just dojo modules,
but also modules you may write. And it can handle css files too.

There is a learning curve associated with using the build system, build system
is going through massive internal refactoring, which means a significant amount
of documentation and blog post you may come across may not apply to the version
of dojo you may use. So mitigate this problem one can start from a dojo base
project, [dojo-boilerplate](https://github.com/csnover/dojo-boilerplate), that
comes with build preconfigured. It works great.

#### dojo/text! plugin

One of the cool features of dojo is dojo/text! "plugin". This plugin loads a
resource using XHR. Dojo recommends all HTML portion of a widget or a library
be kept in a separate html file. And use this plugin to load the html use it in
widget/javascript. Ex:

{% highlight html %}
<html>
    <script
        data-dojo-config="async: true"
        src="dojo.js"></script>
    <script>
        require(
            // instruct dojo to load file.html and pass
            // it to our callback
            ["dojo/text!file.html"],
            function (filecontent) {
                console.log("file.html: ", filecontent);
            }
        );
    </script>
</html>
{% endhighlight %}

Since dojo/text! plugin loads the resource using a HTTP request, it would be
bad if we used 100s of resources. But it is not since dojo build system
includes them in the generated dojo.js, thus avoiding http request in
production.

This is a huge incentive to keep javascript clean and keep html separate.

#### Bug in dojo build system with dojo/text! plugin and work around

There is a bug in dojo build system,
[ticket#15867](http://bugs.dojotoolkit.org/ticket/15867), which causes dojo to
ignore any dojo/text! plugin files unless they end with .html extension.


