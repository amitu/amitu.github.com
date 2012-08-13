---
layout: smarturls
title: "smarturls"
description: ""
---
{% include JB/setup %}

smarturls comes with a library of regularly used regular expression patterns to
easy regex creation for django urls. The library can be extended by using
django setting system.

#### Install smarturls

{% highlight bash %}
$ easy_install smarturls
{% endhighlight %}

#### Example usage

This is how normal django urls.py looks like:

{% highlight python %}
from django.conf.urls.defaults import *
urlpatterns = patterns('',
    ('^book/(?P<bookid>\d+)/$', 'some.view'),
    ('^author/(?P<author_name>[-\w]+)/$', 'some.other.view'),
    ('^year/(?P<year>\d{4,4})/$', 'year.view'),
    ('^year/(?P<year>\d{4,4})/(?P<month>\w+)/$', 'month.view'),
)
{% endhighlight %}

This is how it looks like with smarturls:

{% highlight python %}
from django.conf.urls.defaults import *
from smarturls import surl
urlpatterns = patterns('',
    surl('/book/<int:bookid>/', 'some.view'),
    surl('/author/<slug:author_name>/', 'some.other.view'),
    surl('/year/<int4:year>/', 'year.view'),
    surl('/year/<int4:year>/<word:month>/', 'month.view'),
)
{% endhighlight %}

#### Custom patterns

Existing patterns can be overwritten and new ones can be defined by defingin
the django setting SURL_REGEXERS.


Eg, in settings.py:

{% highlight python %}
SURL_REGEXERS = {
    "slug": "\w[-\w]*", # overwrite slug: always start with alphanumeric
    "username": "\w+"   # now you can use /author/<username:author>/ etc
}
{% endhighlight %}

#### Default Patterns

By default smarturls comes with the following patterns:

 * int: \d+
 * int2: \d{2,2}
 * int4: \d{4,4}
 * word: \w+
 * slug: \[\w-\]+
 * digit: \d{1,1}
 * username: \[\w.@+-\]+

#### Contribute

Do you repeatedly use some URL pattern that everyone may want to use? Please
mail me about it: code@amitu.com.

Report issues on [github issue page](http://github.com/amitu/smarturls/issues/)
or [fork the project](http://github.com/amitu/smarturls/) (let me know if you
do).

