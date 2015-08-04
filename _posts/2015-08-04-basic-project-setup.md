---
layout: post
title: "Basic Project Setup"
url: /python/basic-project-setup/
section: python
---
{% include JB/setup %}

If you plan to work on any project with me, this is the basic setup I recommend
you have before you look at Makefile of my project.

1. Make sure you are using latest pip.
1. Install mkvirtualenv globally via system pip (eg /usr/bin/pip).
1. In project directories you will find a .venv named file, the content of this
   file is the $name of the virtual environment we will be working with.
1. Create the virtual environment using `mkvirtualenv $name`.
1. Make sure you are using zsh with oh-my-zsh.
1. Make sure you got virtualenvwrapper in your `plugins=(git python pip
   virtualenvwrapper)` in .zshrc.
1. Now when you cd into the project directory, pip/python etc will point to the
   virtualenv you created in 4th step.
