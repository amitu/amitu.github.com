---
layout: page
title: "Flash: Getting Started, Hello World"
description: ""
---
{% include JB/setup %}

First we will need the flash builder. In the File menu you will find option to
create a new "ActionScript Project". "Project Name" is anything you want, I
picked HelloWorld, "Application Type" is "Web". Click "Finish".

You have a working project, you will see folders "src", "bin-debug" and
"html-template".  There are a few others, but these are the interesting ones.

"html-template" contains a file "index.template.html", this will be used as a
template for the flash loader, the file that serves the swf. We can leave it as
it is for now.

"bin-debug" contains built output. We will have to upload the content of this
file on a web server when we want to publish the project.

"src", as you might expect, contains the main source. Lets delete the
HelloWorld.as file in it (right click on the file, Delete) and start from
scratch. Its still not really scratch, but still. It is a good idea to organize
code in packages, or so java developers believe, and we will stick with that
and create a package com.amitu.hello. To do so right click on src, New,
package, name it com.amitu.hello.

Now our main application. One of the reasons I hate IDEs is the magic that goes
on behind the scene and deep within configuration options, and one of the magic
you will see is that the first action script file you create will be somehow
the "main" applicaiton (You can make any other actionscript file default
application by making sure it defines a class derived from Sprite class as
mentioned below, and selecting "Set as Default Application" from the right
click/context menu.

So lets create HelloWorld.as, right click on the package, New, ActionScript
Class. In the wizard put the Name "HelloWorld", in superclass you want to
select "flash.display.Sprite", in order to do so you can start typing sprite
and you will see it in the auto complete list. What it creates is something
like this:

{% highlight actionscript %}
package com.amitu.hello
{
    import flash.display.Sprite;

    public class HelloWorld extends Sprite
    {
        public function HelloWorld()
        {
            super();
        }
    }
}
{% endhighlight %}

So far it is an empty slate. Please not that "flash.display.Sprite" is kind of
root class of displayable objects in flash, so most of your classes would be
derived from this class.

You can test the empty file by double clicking on "HelloWorld.html" file
located in "bin-debug".

Lets add some text there. We are going to use "flash.text.TextField" for that.
As I have already mentioned action script is optionally typed language, meaning
variables can have type, but if we want we can omit the type, in which case we
will get a warning, but code will work.

Like javascript, a variable is declared by a var foo syntax. In addition we can
specify the type by vat foo:Number syntax. Number is a builtin type of
actionscript, so is String, a unicode compliant string class.

In this case we are going to create an object of type TextField, so we do it
like this:

{% highlight actionscript %}
package com.amitu.hello
{
    import flash.display.Sprite;
    import flash.text.TextField;

    public class HelloWorld extends Sprite
    {
        public function HelloWorld()
        {
            super();

            var tf:TextField = new TextField();
            tf.text = "Hello World";
            this.addChild(tf);
        }
    }
}
{% endhighlight %}

As you can see we imported "flash.text.TextField" from the top. Infact flash
builder adds that line for us when we select TextField in auto complete that
pops up after we have written "var tf:".

Rest is easy, TextField has a publicly visible member "text" to which we can
assign the string we want to display, and we have to add the text field we
created to the "display list", otherwise it will not be drawn on screen, we do
that by calling addChild method, that is defined in Sprite class and is
available to us using inheritance.

There you go, double click on "HelloWorld.html" in "bin-debug" to see our hello
world in the browser.

Back to [Flash For Python Developers](/flash/).
