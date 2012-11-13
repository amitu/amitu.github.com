---
layout: page
title: "Lipy - Pythonic Lisp"
description: ""
---
{% include JB/setup %}

"In order to be fluent you must lisp first."

An [experimental](/lab/) implementation of clojure/lisp in python. One that
gels well with python.

Source:
[lipy.py](https://github.com/amitu/amitu.github.com/blob/master/lab/lipy/amitu/lipy.py).

#### Install

{% highlight bash %}
$ sudo easy_install -U amitu.lipy
{% endhighlight %}

Please note that it is an experimental package so far, I will be releasing
updates without any fanfare, so please use -U every so often.

#### What Works So Far

{% highlight bash %}
$ lipy "(print (string.upper 'hello world'))"
HELLO WORLD

$ lipy -e "(print (+ 1 2 (* 23 45 2)))"
2073

$ lipy -e "(print (random.random))"
0.675215886799

$ lipy -e "(print (len (range 100)))"
100

$ lipy -e "(map print (range 2 9 2))"
2
4
6
8

$ lipy -e "(print sys.argv)"
['/usr/local/bin/lipy', '-e', '(print sys.argv)']

$ lipy -e "(eval 'print(1 + len([1, 2, 3]))')" # calling python's eval
4

$ lipy -e '(do (print "hello") (print "world"))'
hello
world

$ lipy -e '
(do
    (defmacro hello [name] (do (print "hello" (~ name)) (print "bye")))
    (hello "amitu")
    (hello (+ 1 2))
)'
hello amitu
bye
hello 3
bye

{% endhighlight %}

#### Major ToDos

 * "variables"
 * lambda
 * macros
 * hash/set etc data types
 * tail call optimization

#### Bugs/Feature Requests/Ideas

I would love to hear from you, please [send me a mail](mailto:lipy@amitu.com).
