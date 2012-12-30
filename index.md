---
layout: page
title: "Welcome"
tagline: Supporting tagline
comments: false
---
{% include JB/setup %}

Hey!

I work with the wonderful folks at [CrispyGames](http://crispygam.es). We just
released two games, [Slots](http://apps.facebook.com/casinoallin-slots/) and
[Poker](http://apps.facebook.com/casinoallin-poker/), for facebook platform,
check it out :-\)

A few of my open source babies [smarturls](/smarturls/),
[fhurl](http://packages.python.org/fhurl/), [importd](/importd/),
[zutils](https://github.com/amitu/zutils/blob/master/amitu/zutils.py) and
[dutils](http://packages.python.org/dutils/). Check out my [open
source](/open-source.html) page to see them in detail.

Writings: [angularjs](/angularjs/), [flash for python developers](/flash/),
[style guide](/style.html).

Interested in Mumbai and Python? Join our [latest meetup](/mumpy.html).

I am a strong beliver of [Women must own Taser (Stun Gun) In
India](http://amitu.com/taser/). My position paper on [rape and what we should
do about it](/india/rape/).

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

