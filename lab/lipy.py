from pyparsing import *

class Token(object):
    def __init__(self, t):
        self.t = t
    def __str__(self): return repr(self)
    def __repr__(self): return "<%s %r>" % (self.__class__.__name__, self.t)

class Tick(Token): pass
class Symbol(Token): pass
class Keyword(Token): pass
class Decimal(Token): pass
class Real(Token): pass
class String(Token): pass
class List(Token): pass
class Vector(Token): pass
class Map(Token): pass
class Set(Token): pass
class LiteralList(Token): pass

def set_class(p, C):
    p.setParseAction(lambda t: C(t))
    p.setName("foo")
    return p

LPAR, RPAR, LBRK, RBRK, LBRC, RBRC, HASH, QUOTE, TICK, COLON= map(
    Suppress, "()[]{}#'`:"
)

symbol = set_class(Word(alphanums + "-./_*+="), Symbol)
keyword = set_class(Group(COLON + symbol), Keyword)

decimal = set_class(Regex(r'-?0|[1-9]\d*'), Decimal)
real = set_class(Regex(r"[+-]?\d+\.\d*([eE][+-]?\d+)?"), Real)

dblQuotedString = set_class(dblQuotedString, String)
quotedString = set_class(quotedString, String)

scalars = real | decimal | symbol | keyword | dblQuotedString | quotedString

sexp = Forward()
sexpList = set_class(Group(LPAR + ZeroOrMore(sexp) + RPAR), List)
sexpVector = set_class(Group(LBRK + ZeroOrMore(sexp) + RBRK), Vector)
sexpMap = set_class(Group(LBRC + ZeroOrMore(sexp) + RBRC), Map)
sexpSet = set_class(Group(HASH + LBRC + ZeroOrMore(sexp) + RBRC), Set)
sexpLiteral = set_class(Group(QUOTE + sexp), LiteralList)
sexpTicked = set_class(Group(TICK + sexp), Tick)
sexp << (
    scalars |
    sexpList |
    sexpVector |
    sexpMap |
    sexpSet |
    sexpLiteral |
    sexpTicked
)

def parse(s):
    return sexp.parseString(s, parseAll=False)


# http://blog.hackthology.com/writing-an-interactive-repl-in-python
# http://docs.python.org/2/library/cmd.html
# http://www.alittletooquiet.net/media//docs/sclapp-0.5.3.html
# https://github.com/iridium172/PyTerm/blob/master/pyterm.py
# http://openbookproject.net/py4fun/userInput/userInput.html
