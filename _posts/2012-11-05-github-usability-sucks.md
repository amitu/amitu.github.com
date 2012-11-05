---
layout: post
title: "GitHub Usability Sucks"
description: ""
category: 
tags: []
---
{% include JB/setup %}

At [crispygam.es](http://crispygam.es) we love [GitHub](http://github.com). Or
at least we use it a lot. Our code is in github, and so are our milestones and
issues.

#### No Way To See All Issues On One Page

We have 5-6 different repositories in github, each repository specific to
individual project. In the beginning of the day I have to see what are the
urgent issues waiting my attention. **GitHub makes it very difficult to
view issues if you have multiple repositories**.

GitHub provides no way to see all issues in one go, so I have to visit each
project individually. And to make matters worse it **takes me three clicks
(Home -> Project Name -> Issues) and subsequent page load to see issues for a
project**.

GitHub has a command bar, and if I remember the name of each project I can
enter like 20 well crafted key strokes to visit issues page for each project.
If they removed this crap and instead put a simple nested navigation tree, it
would take me 3 click without reloads to go to issues page of another project,
but without page reload. A navigation element invented in 1998 would be a huge
improvement compared to current state of affairs in GitHub.

Update: While writing this post I came across
[issues](https://github.com/dashboard/issues/assigned?sort=created&state=open)
page that is exactly what I wanted.

I still find the situation quite bad from usability point of view. The link is
only visible from home page. Once someone clicked on any issue, clicking on the
most prominent "issues" link takes you to project specific issues page and not
to issues across projects.

The issues link should be in top bar as the current cycle is: Home -> All
Issues -> Individual Issue -> Issues (wrong link) -> Home -> All Issues. Where
as the cycle should be Home -> All Issues -> Individual Issue -> All Issues. I
know one can use back button, but relying on user remembering to use the back
button, instead of clicking a conflicting wrong link is very bad usablity.

#### GitHub Stars Are Worse

Here is another example of GitHub usability nightmare, you starred a repository
yesterday, and you want to visit it now, how many clicks do you think it will
take? One from GitHub homepage? After all there is a Tab named "Stars" on the
home page! WRONG. That page shows items starred in God only knows what order.
There are six items to better refine this view, but none of them order them in
reverse chronological order as you would expect.

What you have to do is click on your name in the top navigation, there again
you see a link marked stars on left side bar, don't click on it, it does
something completely different compared to Stars on home page. Click on "Public
Activity" tab. There you will see all your activities, and hopefully the
repository that you starred yesterday.

#### What do you do if you went to a gist page?

And you want to come back to github main page? GitHub for some reason thinks
that a person clicking on the big bold logo on left top bar which is the usual
place to click when lost on site, is trying to create a new gist!

In order to go to homepage you have to instead click on the link marked
"Dashboard". No where else in github.com site is the word Dashboard used!

Compare this to the help page link, that takes you to
[help.github.com](http://help.github.com), where they label the link taking you
back to github.com as "Back to GitHub". Which is excellent label compared to
Dashboard!

[gist.github.com](http://gist.github.com) as a separate site, with its own
header/navigation etc is not a good decision. I, as a user, see gist related
updates next to github related ones on github. If you show me a list of items,
clicking on them should not take me to completely different sites.
gist.github.com appears to have been separated from github.com but not
completely. Github should make up their mind whether they think they are two
different sites or not.

