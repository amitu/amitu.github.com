import yaml, sys, markdown

idx = sys.argv[1]

data = yaml.load(file(idx + ".yaml"))

parts = [
"""---
layout: page
title: "AmitU's Weekly - Volume %s"
description: ""
---
{%% include JB/setup %%}

<style>dt { margin-top: 20px }</style>
""" % idx
]

def mdfy(s):
    return markdown.markdown(s)

if "intro" in data:
    parts.append(data["intro"])

def do_section(section, header):
    if section in data and data[section]:
        parts.append("#### %s" % header)
    else:
        return
    parts.append("<dl>")
    naked_links = []
    links = []
    for item in data[section]:
        if isinstance(item.values()[0], basestring):
            naked_links.append(item)
        else:
            title = item.keys()[0]
            url = item.values()[0].keys()[0]
            intro = mdfy(item.values()[0].values()[0])
            if url == "pass":
                parts.append("<dt>%s</dt>" % title)
            else:
                parts.append('<dt><a href="%s">%s</a></dt>' % (url, title))
            parts.append("<dd>%s</dd>" % intro)

    if naked_links:
        parts.append("<dt>Links</dt>")
        parts.append("<dd><ul>")
        for item in naked_links:
            title = item.keys()[0]
            url = item.values()[0]
            parts.append('<li><a href="%s">%s</a></li>' % (url, title))
        parts.append("</ul></dd>")

    parts.append("</dl>")


do_section("geek", "Programming & Geeky Stuff")
do_section("india", "Politics & India & Philosophy")
do_section("personal", "Personal Stuff & Random Thoughts")

parts.append("Date: 3rd Jan 2013")

print "\n\n".join(parts)
