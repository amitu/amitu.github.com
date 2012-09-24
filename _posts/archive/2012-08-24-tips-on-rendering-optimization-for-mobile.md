---
layout: post
title: "Tips on Rendering Optimization for Mobile"
description: ""
category: 
tags: []
---
{% include JB/setup %}

#### Mobile Browsers Boom

Webkit started as a fork to KDE's Konquerer/KHTML. Apple did a marvelous job of
removing all KDE cruft, and fixing the licensing nightmare, and gave us Webkit.
Google took the open source webkit and ran with it, producing Chrome and then
Andriod based on it.

This is a blessing for developers. HTML is available everywhere. First class
browsers on desktop and mobile. This gives us a false sense of confidence that
we dont really have to worry about mobile now.

If only. Apple has redefined the performance expectation on mobile. Users
click, and they want the results. Gone are the days when mobile being slow was
acceptable in users mind. The increased and still increasing expectations, and
improving but still must leaner processors and ram availibility on mobiles has
given some interesting challenges to us.

So while our HTML/JS/CSS skills come very handy, its also required to rethink
everything from mobile point of view.

Here are some tips when optimizing a website for mobile browsers.

#### DOM Minimization

Desktop CPUs are fast enough that we do not have to think of the number of DOM
elements in the page as a performance issue. The number of elements that
desktop can support is usually an order of maginitude more than what we usually
find in a reasonable page. As soon as we hit mobile, this ratio is no longer
valid.

So instead of putting a LI, that contains a link, on which we put click
handler, put the click handler directly on LI. Same for images.

Another thing to do to minimize the number of dom nodes would be client side
templating. Lets say a page has 3 tabs, only one visible on page load. In
general we ll create the dom for all three tabs, and display none the tabs not
to be shown. This leads to wasteful creation of DOM elements that may not be
required at all, and slows down the initial page load. One could use some
javascript templating library like
[http://icanhazjs.com/](http://icanhazjs.com/).

Further, its becoming a norm these days to only load images below the fold if
the user scrolls. Consider similar techniques for DOMs themselves. 

It will all become really fun really soon. So do keep in mind that premature
optimizations is evil.

#### Test On Old Devices

On premature optimization, somewhere I read about purchasing (relatively) old
devices for testing, they are cheap, they are slower, so if your code is fast
enough on them, there is no need to optimize, and well, they are good for the
environment.

#### Minimize Reflow

Reflow is something that happens in browsers, but desktop developers are
usually not aware of it, and it tends to become a problem in mobile.

Javascript interacts with DOM api and alters DOM in various ways, updates style
of elements, adds/removes elements to dom, and so on. All these operations
forces browser to revisit the entire page, see if every element has suffecient
space, if page height has to be updated, if scroll bars are to be adjusted and
so on. 

Reflow is heavy, and desktop developers will blissfully update the css of
children of a node, one at a time in a loop without a second thought, on
trivial actions like mouse over. Desktop browsers will forgive you, they are
fast enough, but if each update to css of even one elements is taking 100s of
milliseconds, this can become really slow really fast.

While just knowing that thats a problem one will spot many opportunities to
reduce such updates, but one non trivial trick is dom swapping.

Instead of modifying the dom directly, clone the nearest parent. Cloning it
creates a copy of the dom, apply all dom updates on the clone. Because clone is
not yet part of the DOM tree, browser does not apply reflow. Once all
operations are done, call replaceChild, to remove the old node and add the new
dom node.

Remember that a display none is not suffecient, tho it is better than nothing.

#### No JS Animation for you!

Reflow latency also rules out most javascript animation on mobile browsers.
Till they catch up, CSS animations should be considered (judiciously).
[CSS_animations](https://developer.mozilla.org/en/CSS/CSS_animations).

#### Click vs TouchStart

It is usually said that the same jquery code will work on both desktop and
mobile, barring the hover events, that done exist on touch phones. Well tho
click does, understanding how it works gives a hint on why its slow and how to
fix it.

There is no "click" in a touch screen mobile. When there is a touch, OS does
not know if its a random contact to be ignored, or a concious attempt by user
to "click"/touch some UI element, and while the touch is still there, OS does
not even know if its a scroll attempt or a touch attempt. So first OS ignores
the touches with very little time span. Then the OS has to wait and see if the
user's finger starts to move after the touch or not, if they moved, its a
scroll or drag attempt, else its a "click" attempt. This means for OS to
understand that it really is a click, it has to wait for a while, making sure
finger is not moving, even after giving user humanly reasonable time to move. 

Well this humanly reasonable time is also delaying the click event handler,
making your webapp appear that bit slow. The solution: instead of waiting for
click, wait for touch start. 

Of course by trying to do a part of what OS is doing for you, you are inviting
lots of book keeping and work on your plate. What if users is actually trying
to scroll? Or what if user touches a different location before releasing touch
in the first one, which usually does not trigger click event is a expected by
user to be cancelling the accidental click? 

Google has got a good article on this and many issues and their solutions with
some code: [google fast
buttons](http://code.google.com/intl/ro-RO/mobile/articles/fast_buttons.html).

#### Javascript Optimization: Usual suspects

Goes without saying that because memory is much smaller, memory leaks is much
bigger problem on mobiles. Always use var as far as possible to limit the scope
of variables, explicitly delete any references you do not want to keep, delete
all initlialization functions and data references after their use.

#### Javascript Optimization: Anonymous functions not so great!

Closures and anonymous functions leads to a lot of references, reducing the
usage of anonymous functions, in favor of pre defined ones has double advantage
of not having local variable appearing in closure scope and remaining
permanently attached while the function is attached as an event handler; and
not having multiple copies of the same function in multiple click handler for
multiple elements.

#### Javascript Optimization: Avoid jQuery

We all love jquery, but there are smaller alternatives available, esp those
that are optimized for webkit. Consider including them in your mobile version
on your site instead of jquery. The key problem with jQuery/prototype is all
the hacks they have done to handle IE or old browsers, well if you dont need
them, they are just performance bottlenecks, waiting to be thrown away.



