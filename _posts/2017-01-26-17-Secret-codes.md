---
layout: post
title: The Code Wars (Expanded Numbers)
date: 2017-01-26
categories: coding
tags: [puzzles]
---

Today's puzzle is pretty simple.  It is a Rank 6 kata and I believe the difficulty to be closer to a rank 7 or 8.

<!--more-->

## Secret Codes
[LINK](https://www.codewars.com/kata/5842df8ccbd22792a4000245)

> Description:

>Write Number in Expanded Form

>You will be given a number and you will need to return it as a string in Expanded Form. For example:

>
~~~ruby
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
~~~
NOTE: All numbers will be whole numbers greater than 0.

Give it a go. Remember, practice makes perfect.  If you get stuck, scroll down a bit and read my thought process.

...

Ready? Ok, let's dive in!

Breakdown:

* convert the number to a string
* convert the resulting string into an array
* iterate through the array
* Here was the tricky part for me.  I needed a way to add 0's to the current number we are iterating through.  Ultimately I took the Array constructor, created a new array with the size of the current array - i.  Then joined 0 which added that many 0's and converted the array to a string
* But only if an item is greater then 0, we push it to a results array because 0 cannot be expanded and we need to leave it out
* formatted the result with " + " signs at the end

My solution:

~~~javascript
function expandedForm(num) {
  var result = [];
  var array = num.toString().split('');

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result.push(array[i] + (Array(array.length - i).join('0')));
    }
  }return result.join(' + ');
}
~~~

That's it!

Let me know what you think!

Post your answers below and don't forget to check out [code wars](http://www.codewars.com) for my code goodness.
