---
layout: page
title: Amit Upadhyay
tagline: Supporting tagline
---
{% include JB/setup %}

Hey!

I work with the wonderful folks at [BrowserStack](http://www.browserstack.com).
On the side I am working on [bookwork](http://www.bookwork.in).

A few of my open source babies [smarturls](/smarturls/),
[fhurl](http://packages.python.org/fhurl/), [importd](/importd/) and
[dutils](http://packages.python.org/dutils/). Check the rest on [my github
page](http://github.com/amitu).

## Blog

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}/">{{ post.title }}</a></li>
  {% endfor %}
</ul>

