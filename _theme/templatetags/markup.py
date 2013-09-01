from django.template.defaultfilters import stringfilter
from django import template
try:
    from django.utils.encoding import force_text as force_unicode
except ImportError:
    from django.utils.encoding import force_unicode
from django.utils.safestring import mark_safe

import markdown, re

register = template.Library()
highlight_re = re.compile(
    r'\{% highlight (?P<lang>\w+) %\}(?P<code>.*?)\{% endhighlight %\}',
    re.DOTALL
)

def highlight_converter(m):
    code = m.group("code")
    lang = m.group("lang")
    return "    :::%s\n%s" % (
        lang, "\n".join([
            (4 * ' ' + line) for line in code.split("\n")
        ])
    )

@register.filter(is_safe=True)
def md(value, arg='codehilite'):
    extensions = [e for e in arg.split(",") if e]
    value = force_unicode(value)
    value = re.sub(highlight_re, highlight_converter, value)
    if extensions and extensions[0] == "safe":
        extensions = extensions[1:]
        value = markdown.markdown(
            value, extensions, safe_mode=True, enable_attributes=False
        )
    else:
        value = markdown.markdown(value, extensions, safe_mode=False)
    return mark_safe(value)

