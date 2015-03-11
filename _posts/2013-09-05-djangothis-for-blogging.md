---
layout: post
title: "Djangothis For Blogging"
section: blog
---
{% include JB/setup %}

tldr: This weekend I moved this blog over to
[djangothis](https://github.com/amitu/djangothis) from jekyll, this is
how you can do it and why you should give djangothis a chance.

#### What is djangothis?

[Djangothis](https://github.com/amitu/djangothis) is fundamentally a
prototyping tool.

For example you think of a new web product, before you build it, you can
prototype it in HTML, so you can show it to others for feedback. The
problem with using static files is that you can not have a common base
template from where all your HTML will be derived from, and you copy
over the whole HTML. This means making modification to common portions
has to be done multiple times.

With djangothis you can create a folder containing index.html,
pricing.html, signup.html, and run djangothis from this folder, and
djangothis will expose these files on http://localhost:8000/,
http://localhost:8000/pricing.html etc. If you know [djanog template
language](https://docs.djangoproject.com/en/dev/topics/templates/), you
can then inherit from common base.html, and have a common look and feel
across pages.

Djangothis has a few other niceness to help you in prototyping. It
automatically maps static folder to be served on /static/. It looks for
a views.py and if it is present imports it, which means you can use
[importd's view decorator](http://pythonhosted.org/importd/#d-decorator)
to map views to URLs directly from views.py and have some rudimentary
views for your prototype. djangothis also sets up django by looking at a
file named config.yaml, so you can have custom settings, context
processors, middlewares etc. Djangothis also looks for templatetags
named folder, and any [template
tag](https://docs.djangoproject.com/en/dev/howto/custom-template-tags/)
defined there becomes available to your templates for maximum
awesomeness.

And finally djangothis is "themable", what it means is you can have a
folder named \_theme in the current folder, and djangothis will use it
to overwrite templates, and the theme folder can also contain views.py
etc. To help theme writers there is also a cmds folder that can be
present in theme folder that can allow themes to bundle custom commands,
for example jekyll has two commands start-post and start-page, that take
post title etc and create a blank document at right location, right name
etc.

Here is the
[\_theme](https://github.com/amitu/djangothis-jekyll/tree/amitu.com)
that powers this site. You can see all the features of djangothis used
in this folder. This theme is quite compatible with jekyll, so if you
have a jekyll powered blog, moving over to djangothis should be quite
easy.

#### Playing with djangothis

So you want to give djangothis a try. Install it using:

    :::shell
    $ pip install -U djangothis

Make sure you have version number 0.6 or above.

Setup a working directory:

    :::shell
    $ mkdir site
    $ cd site
    $ vim index.html
    $ djangothis
    Validating models...

    0 errors found
    Django version 1.4.1, using settings None
    Development server is running at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.

Instead of starting from scratch, you may want to start from HTML5
boilerplate:

    $ git clone https://github.com/amitu/djangothis-html5-boilerplate.git site
    $ cd site
    $ djangothis
    Validating models...

    0 errors found
    Django version 1.4.1, using settings None
    Development server is running at http://127.0.0.1:8000/

If you peek into index.html, you will see:

    :::django+html
    {% extends "base.html" %}
    {% block title %}Home{% endblock %}
    {% block main %}
    <h1>Welcome to your site!</h1>

    <a href="/about.html">About this site</a>
    {% endblock %}

As you can see bulk of "base html" is in a file aptly named
[base.html](https://github.com/amitu/djangothis-html5-boilerplate/blob/master/base.html),
which defines a few "blocks" to be filled by templates like index.html
above. This is django template system in play.

As you can see "about.html" file is available via "/about.html". If you
wanted cleaner URL, eg "/about/", you can just create a file
"about/index.html" and you will be done.

You are not limited just to templates, you can create custom django
templatetags, request context processors, and even map views to URLs.

Go ahead, prototype away your next web project :-)

#### djangothis For Blog

How to use djangothis for a blog?

The differene between a site full of pages and a blog is that blog has
"posts" and we want to show a list of post on the main page, or on
atom.xml page, so we need the list of posts. We also have to worry about
how to generate the list of posts, and then figure out what URL we want
the post to be served on.

There are many ways to accomplish this, the easiest probably is to reuse
what I did for my blog, which had most of the posts generated for
jekyll.

Here is how to do it:

    :::shell
    $ mkdir blog
    $ cd blog
    $ git clone https://github.com/amitu/djangothis-jekyll.git _theme
    $ djangothis jekyll_init
    All Done.
    Run "djangothis jekyll_post" or "djangothis jekyll_page".
    $ djangothis
    Validating models...

    0 errors found
    Django version 1.4.1, using settings None
    Development server is running at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.

And there is your blog. Modify config.yaml file that was created by
jekyll\_init to your liking. Update the template HTMLs in \_theme
folder.

You can create a new page by:

    :::shell
    $ djangothis jekyll_page --url /about/ "About Us"
    about/index.html created.

Or a new post by:

    :::shell
    $ djangothis jekyll_post This is my awesome post!
    _posts/2013-09-05-this-is-my-awesome-post.md created.

Once you are ready to push your blog to [github
pages](https://help.github.com/articles/what-are-github-pages) for
example, or any static site host, use wget to mirror the localhost:8000
site in a folder, and upload that folder.

    :::shell
    $ wget -m http://localhost:8000

Take a look at my [publish
script](https://github.com/amitu/amitu.github.com/blob/djangothis/publish)
that I use for this site.

Do [let me know](mailto:upadhyay@gmail.com?subject=djangothis rocks!) if
you end up using this, or have any questions. :-)

