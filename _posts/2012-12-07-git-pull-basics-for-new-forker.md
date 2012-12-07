---
layout: post
title: "Git Pull Basics For New Forker"
description: ""
category: 
tags: []
---
{% include JB/setup %}

So you found a open source project on github you like and you have many ideas
on how to make it better. You know what to do, you fork it.

### Why Is Forking Better

Actually you have a *few different options*.

*You can keep creating issues and attaching patches to it*. The advantage of
this is you have to do minimal of administrative stuff, just clone the
repository, may be create a branch, and hack away, everytime you are done with
a feature or a bugfix, create a complete diff from master branch which is
tracking upstream.

While this works, it has a one small problem, it is not easy for me to try your
changes. First there is no gaurantee that your patch will cleanly apply as
upstream may have moved since last you submitted the patch. Even if it has not,
as a observer I have to do more work on my part to see you code working, I have
to clone the repository, create a branch, apply your patch. If I am looking at
patches submitted by many developers, then I will have to either commit your
changes in my newly created branch, or do the patching part again the next time
I want to come to you. And if a new patch comes along I have to revert the
commit and apply patch again.

There is no reason it can not work, linux development happens like this, many
other open source project work like this.

*Another option is you trying to get commit access to the original project*,
you can directly commit now. But it lacks a review process, people do not get
to voice their opinion. Any good open source project will aspire to have a
better review policy. This also applies to the case when you yourself own the
original project, you think you can push changes willy-nilly, but going through
the same process is much better. An open source project, when it gets
reasonably popular should get its primary repository shifted to a project
specific user from original developer, ie amitu/foo should shift to foo/foo.

*Pull requests, along with github hosting is the best option*, if you dont mind
github. All contributors can fork the original project, create a feature
specific branch, work on it, and when feature is ready, submit a pull request.
The pull request is visible as an issue, people can comment on it.

Based on comments and feedbacks further changes can be made in that branch in
your repo, and those changes will automatically be visible in the pull request,
and be part of merge when original developer choses to merge your pull request.

#### How To Do Pull Requests Right?

Lets say somedeveloper/someproject rocks. I, amitu, want to contribute a few
features/bugfixes to it. So first thing I do is I clone
somedeveloper/someproject as amitu/someproject.

Now the original somedeveloper may have many branches in someproject, and all
those will come to me, but I should ignore all as his private stuff. My concern
is master branch.

It is highly recommended to use [git
flow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/), it helps
create branches based on feature. If you use git-flow, use it only to create
feature branches, and not to merge things back to master.

*Never make any changes to master branch*. All your changes must be in feature
specific branches. *Also never have changes that you intend to go as separate
pull request/issues, go in the same feature branch*. This is very important.

Now lets say you want to fix issue # 12, in
somedeveloper/someproject/issues/12. It would be a good idea to turn off issues
in your fork, and confine all issues in original repository
somedeveloper/someproject. Create branch feature/12, when you are satisfied
that the issue is fixed, send a pull request. Github currently lacks easy way
to associate pull request to existing issue, may be it is a good thing, it
gives different developers to propose different solutions to same issue. Once
you file a pull request, a new issue would be created, put a comment about it
in issue # 12.

You can be working on any number of issues and feature requests in different
branches, create pull request for each of them, rest of the developers/watchers
can track your changes, offer feedback. If they want to try you changes they
can simply clone your fork and switch to right branch, and keep pulling your
changes as it happens, and testing your work. If someone wants to build on your
unaccepted changes, they can fork your fork, or pull your branch by adding you
as a repository, get access to your feature/12 branch, add more commits, and
create their own pull requests.

PS: You will have to do "git push --all" to push your newly created branches,
as by default they don't go.
