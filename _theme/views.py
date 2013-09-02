from importd import d
from path import path
from datetime import datetime

from djangothis.app import dotslash, read_yaml, watchfile

posts = None

def get_posts():
    global posts
    if posts is not None: return posts
    posts = []
    for post in path(dotslash("_posts")).walkfiles():
        if post.endswith(".swp"): continue
        watchfile(post)
        content = post.open().read()
        _, header, body = content.split("---", 2)
        body = body.replace("{% include JB/setup %}", "")
        header = read_yaml(header)
        y, m, d, slug = post.basename().split("-", 3)
        slug = slug[:-3]
        posts.append({
            "date": datetime(int(y), int(m), int(d)),
            "url": "/%s/%s/%s/" % (y, m, slug),
            "title": header["title"],
            "header": header,
            "body": body,
        })
    posts.sort(lambda x, y: cmp(x["date"], y["date"]), reverse=True)
    return posts

def context_processor(request):
    return {
        "settings": d.settings,
        "posts": get_posts(),
    }

def find_post_by_path(pth):
    prev, curr, nex = None, None, None
    for post in get_posts():
        if curr:
            nex = post
            break
        if post["url"] == pth:
            curr = post
        else:
            prev = post
    return prev, curr, nex

@d("/<int4:year>/<int2:month>/<slug:slug>/")
def post_page(request, year, month, slug):
    prev, curr, nex = find_post_by_path(request.path)
    return "post.html", {
        "previosu": prev,
        "post": curr,
        "next": nex
    }
