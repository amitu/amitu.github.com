---
layout: page
title: "Lipy - Pythonic Lisp"
description: ""
---
{% include JB/setup %}

"In order to be fluent you must lisp first."

An [experimental](/lab/) implementation of clojure/lisp in python. One that gels well
with python.

Source:
[lipy.py](https://github.com/amitu/amitu.github.com/blob/master/lab/lipy/lipy.py).

What works so far:

{% highlight bash %}
$ python lipy.py "(print (string.upper 'hello world'))"
HELLO WORLD

$ python lipy.py "(print (+ 1 2 (* 23 45 2)))"
2073

$ python lipy.py "(print (random.random))"
0.675215886799

$ python lipy.py "(print (len (range 100)))"
100

$ python lipy.py "(map print (range 2 9 2))"
2
4
6
8

$ python lipy.py "(print sys.argv)"
['lipy.py', '(print sys.argv)']

{% endhighlight %}

#### Major ToDos

 * "variables"
 * lambda
 * macros
 * hash/set etc data types
 * tail call optimization

