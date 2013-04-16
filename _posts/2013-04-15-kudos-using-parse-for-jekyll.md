---
layout: post
title: "Kudos Using Parse For Jekyll"
description: ""
---
{% include JB/setup %}

Kudos:

> [Dustin Kurtis](http://dustincurtis.com/) came up with an excellent idea for
> the [Svbtle](http://svbtle.com/) blogging network (go visit
> [Svbtle.com](http://svbtle.com/) to see an example). He called them Kudos.
> They're little widgets next to each post that enable users to give "Kudos" to
> posts they really like. You hover over the widget, it gives a fun little
> animation, and changes the icon and count after a moment.

Source: [masukomi/kudos](https://github.com/masukomi/kudos).

A working demo at the bottom of this post.

### How To

1. You will need a [parse account](https://parse.com/plans), its free for upto a 
million requests per month.
2. Get the files [/kudos/kudos.js](/kudos/kudos.js), 
[/kudos/parse-kudos.js](/kudos/parse-kudos.js) and 
[/kudos/jstorage.js](/kudos/jstorage.js) and include them in your 
"_include/themes/\[your-theme\]/default.html".
3. Link to [parse-1.2.3.min.js](http://www.parsecdn.com/js/parse-1.2.3.min.js)
and jquery in your default.html.
4. Get and link [/kudos/kudos.css](/kudos/kudos.css) as CSS in your default.html.
5. Store [/kudos/heart_60x60.png](/kudos/heart_60x60.png) somewhere. 
6. Update parse-kudos.js with your parse keys.
7. Update kudos.css with the location on heart_60x60.png.
8. In your "_include/themes/\[your-theme\]/\[post|page\].html files, add [the
highlighted
HTML](https://github.com/amitu/amitu.github.com/blob/master/_includes/themes/the-program/page.html#L18-L28) 
where it makes sense.
9. Enjoy

I can create a jekyll plugin, but since [github pages](http://pages.github.com/)
do not support custom jekyll plugins, I wont myself be using the plugins. And 
hopefully the above steps can be used with minimal changes on other static 
site/blog generators.

### Credits

[Masukomi](http://www.masukomi.org/) for 
[masukomi/kudos](https://github.com/masukomi/kudos), jquery plugin that does 
the animation.
