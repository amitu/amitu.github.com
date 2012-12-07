---
layout: page
title: "Welcome"
tagline: Supporting tagline
comments: false
---
{% include JB/setup %}

Hey!

I work with the wonderful folks at [CrispyGames](http://crispygam.es).

A few of my open source babies [smarturls](/smarturls/),
[fhurl](http://packages.python.org/fhurl/), [importd](/importd/),
[zutils](https://github.com/amitu/zutils/blob/master/amitu/zutils.py) and
[dutils](http://packages.python.org/dutils/). Check out my [open
source](/open-source.html) page to see them in detail.

I have recently moved away from facebook to a blog+email list based setup, read
about it in this [blog
post](/2012/09/i-am-leaving-facebook-why-and-how-you-should-too/) and please
[subscribe to my mailing list](http://eepurl.com/pRhOD) to help me in this
experiment.

Writings: [angularjs](/angularjs/), [flash for python developers](/flash/).

-- Amit Upadhyay

<header>
    <div class="unit-head">
        <div class="unit-inner unit-head-inner">
            <h1 class="h2 entry-title">Blog</h1>
        </div><!-- unit-inner -->
    </div><!-- unit-head -->
</header>

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}/">{{ post.title }}</a></li>
  {% endfor %}
</ul>

