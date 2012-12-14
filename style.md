---
layout: page
title: "Style Guide"
description: ""
---
{% include JB/setup %}

Code is written for humans to read first. We are not computers. We can not
match closing brackets. I hate seeing Lisp like \)\)\)\). There is no need of
them, new lines do not cost money.

This page documents the style rules I follow in my python/javascript code to
make things easier for humans.

Instead of writing down everything, where most rules are obvious to people
familiar with [PEP-008](http://www.python.org/dev/peps/pep-0008/) I will only
talk about where pep008 differs my taste.

Their first code example is this:

{% highlight python %}
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

# More indentation included to distinguish this from the rest.
def long_function_name(
        var_one, var_two, var_three,
        var_four):
    print(var_one)
{% endhighlight %}

This is ugly according to me.

#### Rule 1: Each nesting must be exactly 4 spaces

In first line in code above you will see that we are trying to nest things
inside the \(\). And for nesting an unpredictable amount of space has been
used. This is wrong and stupid, as it makes it highly difficult to nest further
levels.

{% highlight python %}
foo = long_function_name(
    var_one, var_two, var_three, var_four
)

def long_function_name(
    var_one, var_two, var_three, var_four
):
    print(var_one)
{% endhighlight %}

Lets see how my convention and pep008 fares when we increase nesting in the foo
call.

{% highlight python %}
# PEP008:
foo = long_function_name(var_one, var_two, fun1(var_a, var_b, var_c,
                                                var_d, var_e, var_f, var_g, 
                                                var_h, var_j),
                         var_three, fun2(var_1, var_2, var_3, var_4, var_5, 
                                         var_6, var_7), var_four)

# vs amitu's style

foo = long_function_name(
    var_one, var_two, fun1(
        var_a, var_b, var_c, var_d, var_e, var_f, var_g, var_h, var_j
    ), var_three, fun2(var_1, var_2, var_3, var_4, var_5, var_6, var_7),
    var_four
)
{% endhighlight %}

As you can see my style can cope with any amount of nesting, unlike pep008,
which is just plain weird as things get more complex.

#### Rule 2: If new line is used to nest, opening bracket must be last char in current line, and closing bracket must match with beginning of line with opening bracket

You can already see this rule at play in previous example, foo =
long_function_name\( increased nesting, so closing \) must be directly under f
of foo. Same with fun1 call.

This makes it trivial to see if all brackets close properly. Consider this
example:

{% highlight python %}
# pep008
foo = long_function_name(var_one, var_two,
                         var_three, var_four(bar, baz())),
                         var_eight, var_nine, var_k())
# vs amitu
foo = long_function_name(
    var_one, var_two, var_three, var_four(bar, baz()), var_eight, var_nine, 
    var_k()
)
# style wise I try to balance line lengths if possible:
foo = long_function_name(
    var_one, var_two, var_three, var_four(bar, baz()),
    var_eight, var_nine, var_k()
)
{% endhighlight %}

As you can see with my style the most you have to ever scan if brackets are
closed is the current line. Either the brace is closed in the same line, or it
is closed on a line on its own with same indentation as the line that opened
brace.

Another example to reinforce the same point:

{% highlight python %}
# pep008:
class Rectangle(Blob):

    def __init__(self, width, height,
                 color='black', emphasis=None, highlight=0):
        if (width == 0 and height == 0 and
            color == 'red' and emphasis == 'strong' or
            highlight > 100):
            raise ValueError("sorry, you lose")
        if width == 0 and height == 0 and (color == 'red' or
                                           emphasis is None):
            raise ValueError("I don't think so -- values are %s, %s" %
                             (width, height))
        Blob.__init__(self, width, height,
                      color, emphasis, highlight)

# vs amitu
class Rectangle(Blob):

    def __init__(
        self, width, height, color='black', emphasis=None, highlight=0
    ):
        if (
            width == 0 and height == 0 and
            color == 'red' and emphasis == 'strong' or
            highlight > 100
        ):
            raise ValueError("sorry, you lose")
        if width == 0 and height == 0 and (
            color == 'red' or emphasis is None
        ):
            raise ValueError(
                "I don't think so -- values are %s, %s" % (width, height)
            )
        Blob.__init__(self, width, height, color, emphasis, highlight)
{% endhighlight %}

This rule helps write arbitrary nested generators without any loss of
readability:

{% highlight python %}
foo = (
    x for x in (
        (
            k.one, k.two, k.three, k.four, k.five, k.six, k.seven,
            k.eight, k.nine, k.ten, k.eleven
        ) for k in get_all_k(var_one, var_two, var_three)
    ) if x[0] > compute_something(
        x[1], x[2], x[3], x[4], var_something, var_something_else
    )
)
{% endhighlight %}

As you can see, beyond the concpetual difficulty of understanding nested
generators, this code is very easy to keep track of despite nesting. You can
increase the nesting and you will still not have to worry about matching
opening and closing braces.

Following this rule for documentation strings:

{% highlight python %}
# pep008

"""Return a foobang

Optional plotz says to frobnicate the bizbaz first.

"""

# amitu style

"""
    Return a foobang

    Optional plotz says to frobnicate the bizbaz first.
"""

# exception allowed as per my style:

"""
Return a foobang

Optional plotz says to frobnicate the bizbaz first.
"""
{% endhighlight %}

#### Exception to rule 2: In javascript only, call to function with dictionary as parameter

{% highlight javascript %}
// strictly following rule 2
var foo = long_function_name(
    {
        "var_one": var_one, "var_two": var_two, "var_three": var_three,
        "var_four": var_four
    }
)
// using exception
var foo = long_function_name({
    "var_one": var_one, "var_two": var_two, "var_three": var_three, 
    "var_four": var_four
})
{% endhighlight %}

Other than this exception, only in javascript, rule 2 must never be broken.

#### Rule 3: Imports

PEP008 says:

{% highlight python %}
# YES
import os
import sys

# NO
import sys, os
{% endhighlight %}

I say opposite of this. There is no resaon to second type is inferior to first.

Just never use bracket to stuff multiple import in one line, split imports if
all can not fit in 80 char limit.

PS: I am breaking rule 2 in my [lisp like code](/lab/lipy/), I have not yet
formulated them yet.

