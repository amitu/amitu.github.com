---
layout: importd
title: "importd"
description: ""
---
{% include JB/setup %}

importd is the fastest way to django. No project creation, no apps, no
settings.py, just an import.

Install importd:

{% highlight bash %}
$ easy_install importd
{% endhighlight %}

Say hello to importd:

{% highlight python %}
# hello.py
from importd import d

@d("/")
def index(request):
    return d.HttpResponse("hello world")
{% endhighlight %}

Run your app:

{% highlight bash %}
$ python hello.py
Validating models...

0 errors found
Django version 1.4.1, using settings None
Development server is running at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
{% endhighlight %}

#### Features

 * automatically configure django
 * explicitly configure django, eg d(DEBUG=True)
 * automatically include "templates" in TEMPLATE_DIRS setting, so start using
   templates without any boiler plate
 * automatically configure django to serve files in "static" on "/static/"
 * a view can return a string, that will be assumed name of template, which
   will be rendered using render_to_response
 * a view can return tuple containing string, dict. in this case dict will be
   treated as context when rendering template
 * if view returns anything not a string, tuple or HttpResponse, it will be
   rendered as a json
 * importd can automatically construct regular expressions for your urls, based
   on preconfigure regular expression patterns
 * custom regular expression patterns can be defined
 * d acts like a wsgi application
 * works with gunicorn
 * manage.py commands are available
 * automatically runs a debug server
 * works well with [fhurl](http://packages.python.org/fhurl/)
 * auto configuration, and other magic features can be turned off
 * most commonly used classes and functions in django are available on d
   namespace, eg d.HttpResponse

#### Examples

A few of the features can be seen in the following example:

{% highlight python %}
from importd import d

d(DEBUG=True) # configure django

def real_index2(request):
    return d.HttpResponse("real_index2")

# setup other urlpatterns
d(d.patterns("",
    ("^$", real_index2),
))

@d # /index/, url derived from name of view
def index(request):
    import time
    return "index.html", {"msg": time.time()}

@d("^home/$", name="home")  # named urls
def real_index(request):
    return "home.html"

@d  # served at /json/, converts object to json string, with proper mimetype
def json(request):
    return {
        "sum": (
            int(request.GET.get("x", 0)) + int(request.GET.get("y", 0))
        )
    }

@d("/edit/<int:id>/", name="edit_page") # translats to ^edit/(?P<id>\d+)/$
def edit(request, id):
    return {"id": id}

@d("^fhurl/$")
class MyForm(d.RequestForm):
    x = d.forms.IntegerField()
    y = d.forms.IntegerField()

    def save(self):
        return self.cleaned_data["x"] + self.cleaned_data["y"]
{% endhighlight %}
