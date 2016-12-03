---
layout: post
title: "Jekyll 101"
date: 2016-12-02
categories: "Coding"
author: "Norman Chan"
---

This is a short and simple post on how to create a simple static site with Jekyll.  

Jekyll, if you dont know, is blogging software.  Its not a WYSIWYG (what you see is what you get) editor like square space or wordpress so you will have to do some actual code, which is fine, because Jekyll simplifies it and abstracts the hard parts for you.

# Installation

### Requirements

This guide is for Linux users.  I'm writing this tutorial with Ubuntu 16.04 LTS.

* Ruby
* Linux

If you dont have ruby then follow the link above to install.  If youre using mac, then it should already be installed.

### Install Jekyll

We will be working with the command line interface and running very simple commands.  

Open a fresh terminal. The default shortcut is alt-ctrl-t.

then check if you have jekyll:
{% highlight jekyll %}
jekyll --version
{% endhighlight %}

If not, run this command:
{% highlight ruby %}
gem install jekyll
{% endhighlight %}

Thats it! Jekyll is now installed on your machine.

### Create a new blog

Do this:
{% highlight jekyll %}
jekyll new myblog
{% endhighlight %}
this will create all the files you need for a simple blog.  The directory name is after new. In this case its myblog

Switch into the directory:
{% highlight jekyll %}
cd myblog
{% endhighlight %}

Run the server:
{% highlight jekyll %}
bundle exec jekyll serve
{% endhighlight %}

Now go to http://localhost:4000 in your web browser.

Congratulations! You've got a brand new blog!
