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
updates without any fanfare, so please use -U every so often. Don't use it for
anything but demos.

#### What Works So Far

{% highlight bash %}
$ lipy -e '(print (string.upper "hello world"))'
HELLO WORLD

$ lipy -e '(print ("hello world" __len__))'
11

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

$ lipy -e '(do (= name "amitu") (print "hello" name))'
hello amitu

$ lipy -e '(do (print "hello") (print "world"))'
hello
world

$ lipy -e '
(do
    (defmacro hello [name] (do (print "hello" (~ name)) (print "bye")))
    (hello "amitu")
    (hello (+ 1 2))
    (map hello (range 2))
)'
hello amitu
bye
hello 3
bye
hello 0
bye
hello 1
bye

{% endhighlight %}

#### Major ToDos

 * proper lambda, macros are too high painful as a substitute for fn
 * proper stack management, currently everything is global
 * modules and imports
 * booleans and conditions
 * looping?
 * tail call optimization
 * python import hook to load lipy from python?

#### Bugs/Feature Requests/Ideas

I would love to hear from you, please [send me a mail](mailto:lipy@amitu.com).
