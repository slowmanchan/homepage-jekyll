---
layout: post
title: The Code Wars (Decipher this!)
date: 2017-01-23
categories: coding
tags: [puzzles]
---
It's time for some more code wars again!

You're in for a treat today because I have not one but two puzzles to decipher with you today.  

Here's the first:

<!--more-->

> Decipher this!
You are given several secret messages you need to decipher. Here are the conditions:

> The first letter corresponds to ASCII character code (case sensitive)
The second letter needs to be switched to the last letter
The last letter needs to be switched to the second letter
If it only has one letter, it will be unchanged
If it only has two letters, you will just need to convert the ASCII character code to a letter
Keepin' it simple -- there are no special characters

> Example:
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

I'll give you a second to process.

....

Ok! Did you get it? If not it's cool, I found this one particularly tricky because I did'nt know how to convert ascii character codes.  Luckily I found this:

~~~javascript
String.fromCharCode(num, num2)
~~~

this will take any number and returns it's corresponding ASCII character.  

for example:

~~~javascript
String.fromCharCode(72);
<< "H"
~~~

I also learned of the replace and match methods:

replace will replace the first argument with the second.

~~~javascript
var str = 'hello bob';
str.replace('bob', 'norm');
<< 'hello norm'
~~~

match will find any matches and return it in an array:

~~~javascript
var str = 'hello 777';
str.match(/\d+/);
<< ["777"]
~~~

great little methods for isolating numbers or letters.

So lets break this baby down.  

* split the string into an array.
* iterate through the array.
* replace any numbers in array to its ascii equivalent.
* if the result is length of 2 or 1 then push it to the a new array.
* else, concatenate all necessary substrings and push that to the new array.
* join the new array and return it.

This is the answer I came up with:

~~~javascript
function decipherThis(str) {
  var result = [];
  var array = str.split(' ');
  var ascii_string = '';

  for (var i = 0; i < array.length; i++) {
    ascii_string = array[i].replace(/\d+/, String.fromCharCode(array[i].match(/\d+/)));

    if (ascii_string.length == 2 || ascii_string.length == 1 ) {
      result.push(ascii_string);
    }else{
      ascii_string = ascii_string[0] + ascii_string.slice(-1) + ascii_string.slice(2, -1) + ascii_string[1];
      result.push(ascii_string);
    }
  }return result.join(' ');
};
~~~

And thats it!  This one took me a while because I wasn't very comfortable with the new methods but a persistence got me there!

Let me know if you have any questions.
